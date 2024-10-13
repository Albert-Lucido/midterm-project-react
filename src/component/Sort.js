import React, { useState, useEffect } from 'react';
import './css/sort.css';

const Sort = () => {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('asc');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const allData = JSON.parse(storedData);
      setItems(allData);
    }
  }, []);

  const handleSort = () => {
    let sortedItems = [...items];

    if (sortBy === 'quantity') {
      sortedItems.sort((a, b) => {
        if (order === 'asc') {
          return a.quantity - b.quantity;
        } else {
          return b.quantity - a.quantity;
        }
      });
    } else if (sortBy === 'price') {
      sortedItems.sort((a, b) => {
        if (order === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }

    setItems(sortedItems);
  };

  return (
    <div className="Sort">
      <form>
        <label>
          Sort by:
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </label>
        <br />
        <label>
          Order:
          <select value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
        <br />
        <button type="button" onClick={handleSort}>
          Sort
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sort;