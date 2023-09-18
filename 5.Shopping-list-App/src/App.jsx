import React, { useState } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(0);

	const handleAddButtonClick = () => {
		if (inputValue.trim() !== '') {
			const newItem = {
				itemName: inputValue,
				quantity: 0,
				isSelected: false,
			};

			const newItems = [...items, newItem];

			setItems(newItems);
			setInputValue('');
			calculateTotal();
		}
	};

	const handleRemoveButtonClick = (index) => {
		const removedItemQuantity = items[index].quantity;
		const updatedItems = items.filter((item, i) => i !== index);

		setItems(updatedItems);
		setTotalItemCount(totalItemCount - removedItemQuantity);
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];
		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		if (newItems[index].quantity > 0) {
			newItems[index].quantity--;
		}

		setItems(newItems);
		calculateTotal();
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => total + item.quantity, 0);

		setTotalItemCount(totalItemCount);
	};

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input
						className='add-item-input'
						placeholder='Add an item...'
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
					/>
					<FontAwesomeIcon icon={faPlus} onClick={handleAddButtonClick} />
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container' key={index}>
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

							<div className='quantity'>
								<button onClick={() => handleQuantityDecrease(index)}>
									<FontAwesomeIcon icon={faChevronLeft} />
								</button>
								<span> {item.quantity} </span>
								<button onClick={() => handleQuantityIncrease(index)}>
									<FontAwesomeIcon icon={faChevronRight} />
								</button>
							</div>

							<div className='remove-item' onClick={() => handleRemoveButtonClick(index)}>
								<FontAwesomeIcon icon={faTrash} />
							</div>
						</div>
					))}
				</div>

				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>
	);
};

export default App;
