import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { CreditCard } from 'lucide-react';
import toast from 'react-hot-toast';

export function AccountPage() {
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleAddPoints = async (amount: number) => {
    setIsProcessing(true);
    try {
      toast.loading('Processing payment...', { id: 'payment' });
      // Payment processing logic will be implemented here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Temporary placeholder
      toast.success('Points added successfully!', { id: 'payment' });
    } catch (error) {
      toast.error('Failed to process payment', { id: 'payment' });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Account Settings</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">Profile Information</h2>
            <p className="text-gray-600">Name: {user?.name}</p>
            <p className="text-gray-600">Email: {user?.username}</p>
          </div>
          
          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-2">Current Balance</h2>
            <p className="text-2xl font-bold text-indigo-600">0 points</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Add Points</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => handleAddPoints(500)}
            disabled={isProcessing}
            className="flex flex-col items-center p-4 border rounded-lg hover:border-indigo-500 transition-colors"
          >
            <span className="text-2xl font-bold text-gray-900">500 Points</span>
            <span className="text-gray-600">$5.00</span>
          </button>
          
          <button
            onClick={() => handleAddPoints(1000)}
            disabled={isProcessing}
            className="flex flex-col items-center p-4 border rounded-lg hover:border-indigo-500 transition-colors"
          >
            <span className="text-2xl font-bold text-gray-900">1000 Points</span>
            <span className="text-gray-600">$9.00</span>
          </button>
          
          <button
            onClick={() => handleAddPoints(2000)}
            disabled={isProcessing}
            className="flex flex-col items-center p-4 border rounded-lg hover:border-indigo-500 transition-colors"
          >
            <span className="text-2xl font-bold text-gray-900">2000 Points</span>
            <span className="text-gray-600">$15.00</span>
          </button>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Transaction History</h2>
          <div className="border rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500" colSpan={4}>
                    No transactions yet
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}