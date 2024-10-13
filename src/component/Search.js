import React, { useState } from 'react';
import './css/search.css';

const Search = () => {
  const [id, setId] = useState('');
  const [item, setItem] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const allData = JSON.parse(storedData);
      const foundItem = allData.find((item) => item.id === id);
      if (foundItem) {
        setItem(foundItem);
        setNotFound(false);
      } else {
        setNotFound(true);
        setItem(null);
      }
    }
  };

  return (
    <div className="Search">
      <form onSubmit={handleSearch}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Search</button>
      </form>
      {notFound && <p>Item not found!</p>}
      {item && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Search;