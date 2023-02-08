import React, { useState, useEffect } from 'react';

export default()=>{
	const [items, setItems] = useState([
		{ itemName: 'item 1', quantity: 1, isSelected: false },
		{ itemName: 'item 2', quantity: 3, isSelected: true },
		{ itemName: 'item 3', quantity: 2, isSelected: false },
	]);
    return [items, setItems];
  }

  