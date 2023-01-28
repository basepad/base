/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
// TODO: Fix a11y issues
import React from 'react';
import 'tailwindcss/tailwind.css';

export function App() {
  return (
    <div className="p-4">
      <div className="navbar rounded-box mb-4 gap-4 bg-base-200 bg-opacity-90 text-base-content shadow backdrop-blur transition-all duration-100">
        <div className="flex-one">
          <a className="btn-ghost btn gap-2 text-xl normal-case">Bookings!</a>
        </div>
        <div className="basis-1/5" />
        <div className="flex-1">
          <div className="min-w-96 form-control w-full">
            <input type="text" placeholder="Search" className="input w-full" />
          </div>
        </div>
        <div className="basis-1/5" />
        <div className="flex-none">
          <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
              <div className="flex w-10 content-center rounded-full bg-base-300">
                <div className="self-center pt-1.5">
                  <span className="text-xl">😃</span>
                </div>
                {/* TODO: Add avatar image source */}
                {/* <img src="" alt="User profile" /> */}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-200 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
