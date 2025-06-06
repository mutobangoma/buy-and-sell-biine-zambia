// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import PostAd from './pages/PostAd';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/post-ad" element={<PostAd />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1 className="text-center mt-10 text-xl font-semibold">404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
