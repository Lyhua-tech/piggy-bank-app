import React from 'react';
import Route from './components/Route';
import Link from './components/Link';
import SignUpPage from './pages/SignUpPage';

const App = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/signup">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            <Route path="/">
                HomePage
            </Route>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/contact">
                <h1>Contact Page</h1>
            </Route>
        </div>
    );
};

export default App;
