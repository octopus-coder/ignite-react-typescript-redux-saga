import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { popUp } from '../../animations';
import { IGame } from '../../store/types';
import { smallImage } from '../../util';
import { Container } from './styles';

interface GameProps {
  game: IGame;
}

const Game: React.FC<GameProps> = ({ game }) => {
  const { id: game_id, name, released, background_image: image } = game;

  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
  };
  const layout_id = game_id.toString();

  return (
    <Container
      layoutId={layout_id}
      onClick={loadDetailHandler}
      variants={popUp}
      initial="hidden"
      animate="show"
    >
      <Link to={`/game/${game_id}`}>
        <motion.h3 layoutId={`title ${layout_id}`}>{name}</motion.h3>
        <p>{released}</p>
        {image && (
          <motion.img
            layoutId={`image ${layout_id}`}
            src={smallImage(image, 640)}
            alt={name}
          />
        )}
      </Link>
    </Container>
  );
};

export default Game;
