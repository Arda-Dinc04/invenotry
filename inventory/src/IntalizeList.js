import React, { useState, useEffect } from 'react';

export default()=>{
	const [items, setItems] = useState([
		{ itemName: 'Task 1', quantity: 1, isSelected: false },
		{ itemName: 'Task 2', quantity: 1, isSelected: false },
		{ itemName: 'Task 3', quantity: 1, isSelected: false },
	]);
    return [items, setItems];
  }

  