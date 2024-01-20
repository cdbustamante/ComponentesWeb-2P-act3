// App.jsx
import React from 'react';
import ClickExample from './components/ClickExample.jsx';
import InputExample from './components/InputExample.jsx';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <h1>Implementación - Grupo 6</h1>
            <div className="examples-container">
                <ClickExample />
                <InputExample />
            </div>
        </div>
    );
}

export default App;
