import React from 'react';
import Nav from './components/Nav';
import Routes from './routes';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes />
      <GlobalStyles />
    </div>
  );
}

export default App;
