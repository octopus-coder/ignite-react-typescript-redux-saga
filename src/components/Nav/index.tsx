import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../../animations';
import logo from '../../img/logo.svg';
import { GameActionTypes } from '../../store/types';
import { Container, Logo, Search } from './styles';

const Nav: React.FC = () => {
  const [search_term, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: GameActionTypes.setSearchTerm, payload: { search_term } });
    setSearchTerm('');
  };

  return (
    <Container variants={fadeIn} initial="hidden" animate="show">
      <Logo
        onClick={() => dispatch({ type: GameActionTypes.ClearSearchedGame })}
      >
        <img src={logo} alt="logo" />
        <h1>Ignite</h1>
      </Logo>
      <Search onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={search_term}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </Search>
    </Container>
  );
};

export default Nav;
