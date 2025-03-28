import React, { useState } from 'react';
import { Video } from 'lucide-react';
import toast from 'react-hot-toast';

export function VideoGenPage() {
  const [prompt, setPrompt] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      toast.loading('Generating video...', { id: 'generating' });
      // Video generation logic will be implemented here
      await new Promise(resolve => setTimeout(resolve, 2000)); // Temporary placeholder
      toast.success('Video generated successfully!', { id: 'generating' });
    } catch (error) {
      toast.error('Failed to generate video', { id: 'generating' });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Generate Videos</h1>
        
        <div className="mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  Generating a video costs 100 points
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Select Starting Image (Optional)
            </label>
            <select
              id="image"
              value={selectedImage}
              onChange={(e) => setSelectedImage(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">No image selected</option>
              {/* Image options will be populated here */}
            </select>
          </div>

          <div>
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
              Video Description
            </label>
            <textarea
              id="prompt"
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Describe the video you want to generate..."
              required
            />
            <p className="mt-2 text-sm text-gray-500">
              Use [Pan left], [Zoom in], etc. to specify camera movements
            </p>
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400"
          >
            {isGenerating ? 'Generating...' : 'Generate Video'}
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Generated Videos</h2>
          <div className="grid grid-cols-1 gap-4">
            {/* Generated videos will be displayed here */}
          </div>
        </div>
      </div>
    </div>
  );
}