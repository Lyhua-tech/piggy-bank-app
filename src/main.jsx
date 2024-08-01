import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserAccountProvider } from './contexts/userAccount';
import { NavigationProvider } from './contexts/navigation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NavigationProvider>
    <UserAccountProvider>
      <App />
    </UserAccountProvider>
  </NavigationProvider>
)
