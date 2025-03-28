import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome back!</h1>
        <p className="text-gray-600">Manage your characters and creations from your dashboard.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Characters</h2>
          <p className="text-gray-600 mb-4">View and manage your created characters</p>
          <div className="text-sm text-gray-500">No characters created yet</div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Recent Generations</h2>
          <p className="text-gray-600 mb-4">Your recently generated images and videos</p>
          <div className="text-sm text-gray-500">No recent generations</div>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Available Points</h2>
          <p className="text-gray-600 mb-4">Your current point balance</p>
          <div className="text-2xl font-bold text-indigo-600">0 points</div>
        </div>
      </div>
    </div>
  );
}