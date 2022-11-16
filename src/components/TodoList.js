import React from 'react';
import TodoListItem from './TodoListItem';
import 'style/TodoList.css';

const TodoList = ({ todos, onRemove, onToggle }) => {
	return (
		<div className='TodoList'>
			{todos.map(i => (
				<TodoListItem
					todo={i}
					key={i.id}
					onRemove={onRemove}
					onToggle={onToggle}
				/>
			))}
		</div>
	);
};

export default TodoList;
