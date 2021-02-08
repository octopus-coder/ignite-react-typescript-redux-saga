import { motion } from 'framer-motion';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import apple from '../../img/apple.svg';
import gamepad from '../../img/gamepad.svg';
import nintendo from '../../img/nintendo.svg';
import playstation from '../../img/playstation.svg';
import starEmpty from '../../img/star-empty.png';
import starFull from '../../img/star-full.png';
import steam from '../../img/steam.svg';
import xbox from '../../img/xbox.svg';
import { RootState } from '../../store/reducers';
import { DetailsActionTypes } from '../../store/types';
import { smallImage } from '../../util';
import {
  CardShadow,
  Description,
  Detail,
  Gallery,
  Info,
  Media,
  Platforms,
  Rating,
  Stats,
} from './styles';

interface GameDetailProps {
  game_id: string;
}

const GameDetail: React.FC<GameDetailProps> = ({ game_id }) => {
  const { game, screenshots, isLoading, chosen_game_id } = useSelector(
    (state: RootState) => state.details
  );
  const dispatch = useDispatch();

  const history = useHistory();

  const exitDetailHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = event.target as Element;
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto';
      history.push('/');
    }
    dispatch({ type: DetailsActionTypes.clearGameID });
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img alt="star" key={i} src={i <= rating ? starFull : starEmpty} />
      );
    }
    return stars;
  };

  const getPlatformImages = (platform: string) => {
    switch (platform) {
      case 'PlayStation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'iOS':
        return apple;
      default:
        return gamepad;
    }
  };

  return (
    <>
      {game.id && !isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={game_id}>
            <Stats>
              <Rating>
                <motion.h3 layoutId={`title ${game_id}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
                {getStars()}
              </Rating>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms.map(({ platform }) => (
                    <img
                      key={platform.id}
                      src={getPlatformImages(platform.name)}
                      alt={platform.name}
                    />
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${game_id}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.name}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.map((screenshot) => (
                <img
                  key={screenshot.id}
                  src={smallImage(screenshot.image, 1280)}
                  alt="screenshot"
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

export default GameDetail;
