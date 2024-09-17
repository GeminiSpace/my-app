import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
import UserDetails from "./components/card-details/card-details";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return (
        monster.name.toLocaleLowerCase().includes(searchField) ||
        monster.email.toLocaleLowerCase().includes(searchField) ||
        monster.username.toLocaleLowerCase().includes(searchField)
      );
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <Router>
      <div className="App">
        <h1 className="app-title"> Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} />
        <Routes>
          <Route path="/" element={<CardList monsters={filteredMonsters} />} />
          <Route
            path="/monsters/:id"
            element={<UserDetails monsters={monsters} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
