import React, { useState, useEffect } from 'react';
import './css/displaylow.css';

const DisplayLow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const allData = JSON.parse(storedData);
      const lowQuantityData = allData.filter((item) => item.quantity <= 5);
      setData(lowQuantityData);
    }
  }, []);

  return (
    <div className="DisplayLow">
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

export default DisplayLow;