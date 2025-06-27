// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Spinner from './components/Spinner';
import FAQ from './Pages/FAQ';
import Contact from './Pages/Contact';
import Register from './pages/Register';
import CategoryAdmin from "./pages/CategoryAdmin";

// Lazy-loaded components
const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Directory = lazy(() => import('./pages/Directory'));
const Categories = lazy(() => import('./pages/Categories')); // ✅ Add this
const CategoryAds = lazy(() => import('./pages/CategoryAds'));
const Admin = lazy(() => import('./pages/Admin'));
const PostAd = lazy(() => import('./pages/PostAd'));
const Login = lazy(() => import('./pages/Login'));
const AdDetails = lazy(() => import('./pages/AdDetails'));
const ProtectedRoute = lazy(() => import('./routes/ProtectedRoute'));
const Search = lazy(() => import('./pages/Search'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="search" element={<Search />} />
          <Route path="directory" element={<Directory />} />
          <Route path="categories" element={<Categories />} /> {/* ✅ New Route */}
          <Route path="category/:category/:subcategory" element={<CategoryAds />} />
          <Route path="/admin/categories" element={<CategoryAdmin />} /> {/* ✅ Admin route */}
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
          <Route path="/register" element={<Register />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
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
    </Suspense>
  );
}

export default App;
