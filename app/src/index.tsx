import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchBar from './SearchBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div className='app'>
      <header>
        <p className='header__top'>Блог</p>
        <p className='header__bottom'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, sed. Deleniti accusamus recusandae magni libero molestias?</p>
      </header>
      <SearchBar/>
    </div>
  );
}
reportWebVitals();