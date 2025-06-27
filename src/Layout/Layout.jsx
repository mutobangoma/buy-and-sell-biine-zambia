import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Navbar, Dropdown, Sidebar, TextInput } from 'flowbite-react';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?q=${encodeURIComponent(search.trim())}`);
      setSearch('');
    }
  };

  const navButtonStyle = "bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700";

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Mobile Sidebar Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden p-3 fixed top-4 left-4 z-50 bg-gray-200 rounded-lg shadow"
      >
        <i className="lni lni-menu"></i>
      </button>

      {/* Overlay for Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <Sidebar className={`fixed top-0 left-0 z-50 w-64 h-full bg-white shadow transform transition-transform duration-300 md:hidden ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} to="/" onClick={() => setSidebarOpen(false)}>Home</Sidebar.Item>
            <Sidebar.Item as={Link} to="/categories" onClick={() => setSidebarOpen(false)}>Categories</Sidebar.Item>
            <Sidebar.Item as={Link} to="/ads/grid" onClick={() => setSidebarOpen(false)}>Ad Grid</Sidebar.Item>
            <Sidebar.Item as={Link} to="/ads/list" onClick={() => setSidebarOpen(false)}>Ad Listing</Sidebar.Item>
            <Sidebar.Item as={Link} to="/ads/123" onClick={() => setSidebarOpen(false)}>Listing Detail</Sidebar.Item>
            <Sidebar.Item as={Link} to="/post-ad" onClick={() => setSidebarOpen(false)}>Post Ad</Sidebar.Item>
            <Sidebar.Item as={Link} to="/about" onClick={() => setSidebarOpen(false)}>About Us</Sidebar.Item>
            <Sidebar.Item as={Link} to="/services" onClick={() => setSidebarOpen(false)}>Services</Sidebar.Item>
            <Sidebar.Item as={Link} to="/faq" onClick={() => setSidebarOpen(false)}>FAQ</Sidebar.Item>
            <Sidebar.Item as={Link} to="/login" onClick={() => setSidebarOpen(false)}>Log In</Sidebar.Item>
            <Sidebar.Item as={Link} to="/register" onClick={() => setSidebarOpen(false)}>Register</Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Navbar (Visible on all screen sizes) */}
      <Navbar fluid rounded className="bg-white shadow sticky top-0 z-30">
        <div className="max-w-screen-xl mx-auto w-full flex flex-wrap items-center justify-between px-4">
          <Navbar.Brand as={Link} to="/">
            <img src="/assets/img/logo.png" className="h-8 mr-3" alt="Biine Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-green-600">
              Biine Market Place
            </span>
          </Navbar.Brand>

          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 w-full md:w-64">
            <TextInput
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              required
            />
          </form>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link as={Link} to="/" active={pathname === "/"}>
              <button className={navButtonStyle}>Home</button>
            </Navbar.Link>
            <Navbar.Link as={Link} to="/categories" active={pathname === "/categories"}>
              <button className={navButtonStyle}>Categories</button>
            </Navbar.Link>            
            <Navbar.Link as={Link} to="/post-ad" active={pathname === "/post-ad"}>
              <button className={navButtonStyle}>Post Ad</button>
            </Navbar.Link>
            <Navbar.Link as={Link} to="/login" active={pathname === "/login"}>
              <button className={navButtonStyle}>Log In</button>
            </Navbar.Link>
            <Navbar.Link as={Link} to="/register" active={pathname === "/register"}>
              <button className={navButtonStyle}>Register</button>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-screen-lg flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
