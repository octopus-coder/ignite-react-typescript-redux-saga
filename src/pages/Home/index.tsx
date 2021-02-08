import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fadeIn } from '../../animations';
import Game from '../../components/Game';
import GameDetail from '../../components/GameDetail';
import { useGetGameIDFromLocation } from '../../hooks/useGetGameIDFromLocation';
import { ApplicationState } from '../../store';
import { DetailsActionTypes, GameActionTypes } from '../../store/types';
import { Container, Games } from './styles';

const Home: React.FC = () => {
  const [game_id] = useGetGameIDFromLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!game_id) {
      dispatch({ type: GameActionTypes.fetchGames });
    }
  }, [dispatch, game_id]);

  useEffect(() => {
    if (game_id)
      dispatch({
        type: DetailsActionTypes.setGameID,
        payload: { chosen_game_id: game_id },
      });
  }, [dispatch, game_id]);

  const {
    popular_games,
    new_games,
    upcoming_games,
    searched_games,
  } = useSelector((state: ApplicationState) => state.games);

  return (
    <Container variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {game_id && <GameDetail game_id={game_id.toString()} />}
        </AnimatePresence>
        {searched_games.length > 0 && (
          <>
            <h2>Searched Games</h2>
            <Games>
              {searched_games.map((game) => (
                <Game key={game.id} game={game} />
              ))}
            </Games>
          </>
        )}
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming_games.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular_games.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {new_games.map((game) => (
            <Game key={game.id} game={game} />
          ))}
        </Games>
      </AnimateSharedLayout>
    </Container>
  );
};

export default Home;
