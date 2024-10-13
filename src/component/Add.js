import React, { useState } from 'react';
import './css/add.css';

const Add = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);

  const categories = ['Select a Category', 'Electronics', 'Clothing', 'Home Goods'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (quantity <= 0 || price <= 0) {
      setError('Quantity and/or Price cannot be negative numbers!');
      return;
    }
    if (!id || !name || !category || category === 'Select a Category') {
      setError('Please fill out all fields!');
      return;
    }

    const storedData = localStorage.getItem('data');
    let data = [];
    if (storedData) {
      data = JSON.parse(storedData);
    }

    const existingItem = data.find((item) => item.id === id);
    if (existingItem) {
      alert('Item with this ID already exists!');
      return;
    }

    data.push({ id, name, quantity, price, category });
    localStorage.setItem('data', JSON.stringify(data));
    alert('Item added successfully!');

    setId('');
    setName('');
    setQuantity(0);
    setPrice(0);
    setCategory('');
  };

  return (
    <div className="add-container">
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Quantity:
          <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" min="1" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} />
        </label>
        <br />
        <label>
          Category:
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <br />
        <input type="submit" value="Add Item" disabled={!id || !name || !category || quantity < 0 || price < 0} />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Add;