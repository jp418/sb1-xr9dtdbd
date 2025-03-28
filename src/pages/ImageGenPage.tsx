import React, { useState } from 'react';
import { ImagePlus } from 'lucide-react';
import toast from 'react-hot-toast';

export function ImageGenPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      toast.loading('Generating image...', { id: 'generating' });
      // Image generation logic will be implemented here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Temporary placeholder
      toast.success('Image generated successfully!', { id: 'generating' });
    } catch (error) {
      toast.error('Failed to generate image', { id: 'generating' });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Generate Images</h1>
        
        <div className="mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Generating an image costs 25 points
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="character" className="block text-sm font-medium text-gray-700">
              Select Character (Optional)
            </label>
            <select
              id="character"
              value={selectedCharacter}
              onChange={(e) => setSelectedCharacter(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">No character selected</option>
              {/* Character options will be populated here */}
            </select>
          </div>

          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
              Prompt
            </label>
            <textarea
              id="prompt"
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Describe the image you want to generate..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
          >
            {isGenerating ? 'Generating...' : 'Generate Image'}
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Generated Images</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Generated images will be displayed here */}
          </div>
        </div>
      </div>
    </div>
  );
}