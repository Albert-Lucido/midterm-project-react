import React, { useState, useEffect } from 'react';
import './css/displayall.css';

const DisplayAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const allData = JSON.parse(storedData);
      setData(allData);
    }
  }, []);

  return (
    <div className="DisplayAll">
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
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAll;