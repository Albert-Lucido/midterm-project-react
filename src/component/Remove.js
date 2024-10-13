import React, { useState } from 'react';
import './css/remove.css';

const Remove = () => {
  const [id, setId] = useState('');
  const [removed, setRemoved] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [removedItem, setRemovedItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem('data');
    if (storedData) {
      const allData = JSON.parse(storedData);
      const index = allData.findIndex((item) => item.id === id);
      if (index !== -1) {
        const removedItem = allData.splice(index, 1)[0];
        localStorage.setItem('data', JSON.stringify(allData));
        setRemoved(true);
        setRemovedItem(removedItem.name);
      } else {
        setNotFound(true);
      }
    }
  };

  const clearAllItems = () => {
    localStorage.removeItem('data');
    alert('All items have been removed!');
  };

  return (
    <div className="Remove">
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        </label>
        <br />
        <button type="submit" className="remove-button">Remove Item</button>
      </form>
      <button type="button" className="clear-button" onClick={clearAllItems}>Clear All Items</button>
      {removed && alert(`Item ${removedItem} has been removed from the inventory`)}
      {notFound && alert('Item not found!')}
    </div>
  );
};

export default Remove;