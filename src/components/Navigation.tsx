import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Wand2, ImagePlus, Video, User, LayoutDashboard } from 'lucide-react';

export function Navigation() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/login');
  };

  if (!user) return null;

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            CharacterMake
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
            <Link to="/train" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <Wand2 size={20} />
              <span>Train</span>
            </Link>
            <Link to="/generate" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <ImagePlus size={20} />
              <span>Generate</span>
            </Link>
            <Link to="/video" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <Video size={20} />
              <span>Video</span>
            </Link>
            <Link to="/account" className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
              <User size={20} />
              <span>Account</span>
            </Link>
            <button
              onClick={handleSignOut}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}