import React from 'react';
import './styles.css'; 
import TodoList from './TodoList';
import QuoteComponent from './components/QuoteComponent';
import ImageCarousel from './components/ImageCarousel'; 
import './components/ImageCarousel.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header1">
        <h1>Plan your day!✍️</h1>
      </header>
      <div className="App-content"> 
        <TodoList />
        <QuoteComponent />
        <ImageCarousel />
      
      </div>
    </div>
  );
}

export default App;
