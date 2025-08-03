import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';
import { PresetSelector } from '@/components/PresetSelector';
import { OptimizationPreset } from '@/data/presets';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const [showPresets, setShowPresets] = useState(true);

  const handlePresetSelect = (preset: OptimizationPreset) => {
    setShowPresets(false);
  };

  return (
    <AppProvider>
      {showPresets ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
          <div className="max-w-6xl mx-auto">
            <PresetSelector onPresetSelect={handlePresetSelect} />
            <div className="text-center mt-6">
              <Button 
                onClick={() => setShowPresets(false)}
                variant="outline"
                className="text-white border-gray-600 hover:bg-gray-700"
              >
                Skip Presets - Customize Manually
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <AppLayout />
      )}
    </AppProvider>
  );
};

export default Index;