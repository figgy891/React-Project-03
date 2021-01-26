import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TaskProvider from './TaskProvider'
import 'font-awesome/css/font-awesome.min.css';

// Container Component
ReactDOM.render(
  <TaskProvider>
    <App />
  </TaskProvider>,
  document.getElementById('root')
);
