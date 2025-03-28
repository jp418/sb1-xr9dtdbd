import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import toast from 'react-hot-toast';

export function CharacterTrainingPage() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [characterName, setCharacterName] = useState('');
  const [isTraining, setIsTraining] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTraining(true);
    
    try {
      toast.loading('Training character...', { id: 'training' });
      // Training logic will be implemented here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Temporary placeholder
      toast.success('Character trained successfully!', { id: 'training' });
    } catch (error) {
      toast.error('Failed to train character', { id: 'training' });
    } finally {
      setIsTraining(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Train New Character</h1>
        
        <div className="mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Training a new character costs 400 points
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="character-name" className="block text-sm font-medium text-gray-700">
              Character Name
            </label>
            <input
              type="text"
              id="character-name"
              value={characterName}
              onChange={(e) => setCharacterName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Training Images
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload files</span>
                    <input
                      id="file-upload"
                      type="file"
                      multiple
                      onChange={(e) => setFiles(e.target.files)}
                      className="sr-only"
                      required
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 10MB each
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isTraining}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
          >
            {isTraining ? 'Training...' : 'Start Training'}
          </button>
        </form>
      </div>
    </div>
  );
}