import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/styles/main.css';
import '../src/styles/base.css';
import LoginPage from './pages/login';
import Blogpage from './pages/blog';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogInnerPage from './pages/blogInnerPage';
import ShopPage from './pages/shop';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/skin-care" element={<BlogInnerPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
