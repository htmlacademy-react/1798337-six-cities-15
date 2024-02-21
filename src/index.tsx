import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

function randomInteger (min: number, max: number) : number {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount = {randomInteger(1,10)}
    />
  </React.StrictMode>
);
