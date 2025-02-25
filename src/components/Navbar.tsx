import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600" />
            <Link to="/" className="ml-3 text-xl font-semibold text-gray-800">
              Course Platform
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Courses
            </Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}