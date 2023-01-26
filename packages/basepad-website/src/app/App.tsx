import React from 'react';
import 'tailwindcss/tailwind.css';
import Button from '../components/Button/Button';

export function App() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="card shadow-xl bg-gradient-to-tl from-green-300 to-green-500">
        <div className="card-body gap-4">
          <h2 className="card-title">Card title!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <Button text="Button" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
