import React from 'react';
import './App.css';
import TodoHeader from "./components/TodoHeader/TodoHeader";
import TodoList from "./components/TodoList/TodoList";
function App() {
    return (
        <div className="App">
            <header>
                <h1>TodoList</h1>
            </header>
            <main>
                <TodoHeader/>
                <TodoList/>
            </main>
        </div>
    );
}

export default App;
