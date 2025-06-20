import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Navbar, Dropdown, Sidebar } from "flowbite-react";

export default function Layout() {
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      {/* Top Bar */}
      <div className="bg-purple-400/80 text-sm py-2">
        <div className="container mx-auto flex justify-between px-4">
          <ul className="flex space-x-4 text-black-700">
            <li><i className="lni lni-phone"></i> +260 981 325485</li>
            <li><i className="lni lni-envelope"></i> info@biine.app</li>
          </ul>
          <div className="flex items-center space-x-4">
            <a href="#"><i className="lni lni-facebook-filled"></i></a>
            <a href="#"><i className="lni lni-twitter-filled"></i></a>
            <Link to="/login" className="hover:underline">Log In</Link>
            <span>|</span>
            <Link to="/register" className="hover:underline">Register</Link>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden p-3 fixed top-[60px] left-4 z-50 bg-gray-200 rounded-lg shadow"
      >
        <i className="lni lni-menu"></i>
      </button>

      {/* Overlay */}
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
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>

      {/* Desktop Navbar */}
      <Navbar fluid rounded className="bg-white shadow sticky top-0 z-30 hidden md:flex">
        <div className="max-w-screen-xl mx-auto w-full flex flex-wrap items-center justify-between">
          <Navbar.Brand as={Link} to="/">
            <img src="/assets/img/logo.png" className="h-8 mr-3" alt="Biine Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-green-600">
              Biine Market Place...
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link as={Link} to="/" active={pathname === "/"}>Home</Navbar.Link>
            <Navbar.Link as={Link} to="/categories" active={pathname === "/categories"}>Categories</Navbar.Link>
            <Navbar.Link as={Link} to="/about" active={pathname === "/about"}>About</Navbar.Link>
            <Dropdown label="Listings" inline>
              <Dropdown.Item as={Link} to="/ads/grid">Ad Grid</Dropdown.Item>
              <Dropdown.Item as={Link} to="/ads/list">Ad Listing</Dropdown.Item>
              <Dropdown.Item as={Link} to="/ads/123">Listing Detail</Dropdown.Item>
            </Dropdown>
            <Dropdown label="Pages" inline>
              <Dropdown.Item as={Link} to="/about">About Us</Dropdown.Item>
              <Dropdown.Item as={Link} to="/services">Services</Dropdown.Item>
              <Dropdown.Item as={Link} to="/post-ad">Post Ad</Dropdown.Item>
              <Dropdown.Item as={Link} to="/faq">FAQ</Dropdown.Item>
            </Dropdown>
            <Navbar.Link as={Link} to="/post-ad">
              <button className="bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700">
                Post Ad
              </button>
            </Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-screen-lg">
        <Outlet />
      </main>
    </div>
  );
}
