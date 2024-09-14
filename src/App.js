import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Gallery from './Gallery';

const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {}, []);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setData(response.data.photos.photo);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  };

  return (
    <div className="app-container">
      <center>
        <div className="header-section">
          <h2>Search Food Items</h2>
          <form onSubmit={submitHandler}>
            <input
              className="search-input"
              size="30"
              type="text"
              onChange={changeHandler}
              value={search}
              placeholder="Search food items"
            />
            <br />
            <br />
            <input className="search-button" type="submit" value="Search" />
          </form>
        </div>
        <br />
        {data.length >= 1 ? <Gallery data={data} /> : <h4>No Image Loaded</h4>}
      </center>
    </div>
  );
};

export default App;
