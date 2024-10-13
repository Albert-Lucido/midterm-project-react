import React, { useState, useEffect } from 'react';
import './css/displaycategory.css';

const DisplayCategory = () => {
  const [category, setCategory] = useState('Select a Category');
  const [data, setData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const categories = ['Select a Category', 'Electronics', 'Clothing', 'Home Goods'];

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const allData = JSON.parse(storedData);
      setData(allData);
    }
  }, []);

  useEffect(() => {
    if (category !== 'Select a Category') {
      const filtered = data.filter(item => item.category === category);
      setFilteredItems(filtered);
    } else {
      setFilteredItems([]);
    }
  }, [category, data]);

  return (
    <div className="DisplayCategory">
      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <br />
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
          {filteredItems.map((item, index) => (
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

export default DisplayCategory;