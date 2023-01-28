/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
// TODO: Fix a11y issues
import React from 'react';
import 'tailwindcss/tailwind.css';

export function App() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Basepad website</h1>
          <p className="py-6">
            <ul>
              <li>TODO: add under construction gif 👷‍♂️</li>
              <li>TODO: build the whole website lol</li>
            </ul>
          </p>
          <button className="btn-primary btn" type="submit">
            Clicking is fun!
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
