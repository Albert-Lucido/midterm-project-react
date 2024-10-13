import React, { useState, useEffect } from 'react';
import './css/update.css';

const Update = () => {
  const [id, setId] = useState('');
  const [field, setField] = useState('');
  const [newValue, setNewValue] = useState(0);
  const [updated, setUpdated] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [itemName, setItemName] = useState('');
  const [oldValue, setOldValue] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newValue <= 0) {
      setError('New value cannot be negative or zero!');
      return;
    }
    if (newValue === oldValue) {
      setError('New value cannot be the same as the old value!');
      return;
    }
    if (!id || !field) {
      setError('Please fill out all fields!');
      return;
    }

    const storedData = localStorage.getItem('data');
    if (storedData) {
      const allData = JSON.parse(storedData);
      const index = allData.findIndex((item) => item.id === id);
      if (index !== -1) {
        const item = allData[index];
        setItemName(item.name);
        if (field === 'quantity') {
          setOldValue(item.quantity);
          item.quantity = newValue;
        } else if (field === 'price') {
          setOldValue(item.price);
          item.price = newValue;
        }
        localStorage.setItem('data', JSON.stringify(allData));
        setUpdated(true);
      } else {
        setNotFound(true);
      }
    }
  };

  useEffect(() => {
    if (updated) {
      alert(`Quantity / Price of Item ${itemName} is updated from ${oldValue} to ${newValue}`);
      setUpdated(false);
    }
    if (notFound) {
      alert('Item not found!');
      setNotFound(false);
    }
    if (error) {
      alert(error);
      setError(null);
    }
  }, [updated, notFound, itemName, oldValue, newValue, error]);

  return (
    <div className="Update">
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <label>
          Field to Update:
          <select value={field} onChange={(e) => setField(e.target.value)}>
            <option value="">Select a field</option>
            <option value="quantity">Quantity</option>
            <option value="price">Price</option>
          </select>
        </label>
        <br />
        <label>
          New Value:
          <input type="number" min="1" value={newValue} onChange={(e) => setNewValue(e.target.valueAsNumber)} />
        </label>
        <br />
        <button type="submit" className="update-button" disabled={newValue <= 0 || newValue === oldValue || !id || !field}>Update Item</button>
      </form>
    </div>
  );
};

export default Update;