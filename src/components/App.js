import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox/SearchBox';

import './App.scss';

const App = () => {
  const [monsters] = useFetch('https://ghibliapi.herokuapp.com/people');
  const [searchText, setSearchText] = useState('');

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const searchTextHandler = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search Monsters"
        searchText={searchText}
        handleTextChange={searchTextHandler}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
