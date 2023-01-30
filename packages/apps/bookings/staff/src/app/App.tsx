/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
// TODO: Fix a11y issues
import React from 'react';
import 'tailwindcss/tailwind.css';
import { Logo } from '@base/ui';

export function App() {
  return (
    <div className="drawer-mobile drawer">
      <input id="side-menu" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-4">
        <div className="navbar rounded-xl bg-base-200">
          <div className="flex-none lg:hidden">
            <label className="btn-ghost btn-square btn" htmlFor="side-menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <div className="dropdown">
              <label tabIndex={0} className="btn-ghost btn m-1">
                <a className="pr-2 text-xl normal-case">Messages</a>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </label>
              <div
                tabIndex={0}
                className="card-compact card dropdown-content w-64 bg-base-300 p-2 shadow"
              >
                <div className="card-body">
                  <h3 className="card-title">Card title!</h3>
                  <p>you can use any element as a dropdown.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none gap-2">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
                <div className="w-10 rounded-full bg-base-300" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
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
        <div className="">
          <p className="mt-4 mb-6 text-center">17 unread messages</p>
          <div className="flex flex-wrap gap-2">
            <div className="card w-96 flex-auto bg-base-100 shadow">
              <div className="card-body p-4">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end" />
              </div>
            </div>
            <div className="stats flex-auto shadow">
              <div className="stat">
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            <div className="stats flex-auto shadow">
              <div className="stat">
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
            <div className="stats flex-auto shadow">
              <div className="stat">
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side flex bg-base-200">
        <label className="drawer-overlay ml-80" htmlFor="side-menu" />
        <aside className="w-80">
          <div className="sticky top-0 z-20 flex flex-col bg-base-200 bg-opacity-80 px-4 pt-6 backdrop-blur">
            <div className="flex items-center text-xl font-medium">
              <div className="mr-1 h-5 w-5 saturate-0">
                <Logo />
              </div>
              <span className="light:text-stone-500 dark:text-stone-300">
                basepad
              </span>
              <span className="text-secondary">:bookings</span>
            </div>
            <div className="light:text-stone-400 flex-none pt-1 text-xs text-stone-400">
              <p>version 0.0.0 (dev)</p>
            </div>
          </div>
          <div className="divider" />
          <ul className="menu w-80 gap-2 bg-base-200 p-4">
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                Messages
                <div className="flex-auto">
                  <span className="badge-success badge float-right">17</span>
                </div>
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                Calendar
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                Reports
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default App;
