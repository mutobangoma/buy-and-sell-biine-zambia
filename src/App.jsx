// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import ProtectedRoute from './routes/ProtectedRoute';
import Directory from './pages/Directory'; // ✅ Ensure path is correct

// Direct (non-lazy) imports for debugging
import Home from './pages/Home';
import Admin from './pages/Admin';
import PostAd from './pages/PostAd';
import Login from './pages/Login';
import AdDetails from './pages/AdDetails';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="directory" element={<Directory />} />
        <Route
          path="admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="post-ad"
          element={
            <ProtectedRoute>
              <PostAd />
            </ProtectedRoute>
          }
        />
        <Route path="ad/:id" element={<AdDetails />} />
        <Route path="login" element={<Login />} />
        <Route
          path="*"
          element={
            <h1 className="text-center mt-10 text-xl font-semibold">
              404 - Page Not Found
            </h1>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
