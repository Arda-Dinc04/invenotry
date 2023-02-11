import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';
import usetodo from './IntalizeList.js';


const App = () => {
	// HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity
  const [items, setItems] = usetodo();
  
  //look into using hooks, maps, filters, callbacks
  //
  //https://github.com/chrisblakely01/simple-shopping-list/blob/master/final/src/App.js
  //https://www.youtube.com/watch?v=_N6LQd6Y2UY&t=154s
  //https://github.com/ovuruska/getir-task-frontend
  //https://mui.com/material-ui/react-snackbar/
  


	const [inputValue, setInputValue] = useState('');
	


	//keep event handlers in main 
	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
		setInputValue('');
	};

	const toggleComplete = (index) => {
		let newItems = [...items];
		debugger;
		newItems = newItems.filter((item,ind) => ind != index);
		setItems(newItems);
	};

	return (
		<div className='app-background'>
			<div className='main-container'>
        <div className='title'><header>To-Do List</header></div>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isSelected ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
						</div>
					))}
				</div>
				<div className='total'>Total: {items.length}</div>
			</div>
		</div>
	);
};


//https://www.udemy.com/course/react-redux-tutorial/
//https://www.udemy.com/course/node-with-react-fullstack-web-development/
//https://www.udemy.com/course/react-redux/
//https://www.youtube.com/watch?v=qnyfvN4CIbo
// yarn start
//https://mui.com/material-ui/react-snackbar/
//After every add/remove use snackbar
//^ add remove function when strickthrough
//Fix total num


export default App;
