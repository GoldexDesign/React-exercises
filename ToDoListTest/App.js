import React from 'react';

import Todo from './Todo';
import './styles.css';

const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function App() {
    const todoList = DUMMY_TODOS.map(todo => <Todo text={todo} key={todo} />);
    return (
        <ul>
          {todoList}
        </ul>
    );
}
console.log("Zlaja")
