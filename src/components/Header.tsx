import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Settings, Zap, Shield } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface HeaderProps {
  enabledCount: number;
  onDownloadScript: () => void;
  onApplySettings: () => void;
  onShowPresets?: () => void;
  onClearAll?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  enabledCount,
  onDownloadScript,
  onApplySettings,
  onShowPresets,
  onClearAll
}) => {
  const handleDownloadClick = () => {
    if (enabledCount === 0) {
      toast({
        title: "No Optimizations Selected",
        description: "Please select at least one optimization before downloading the script.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      onDownloadScript();
      toast({
        title: "Script Download Started",
        description: `Downloading AutoHotkey script with ${enabledCount} optimizations...`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "Failed to generate the AutoHotkey script. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleApplyClick = () => {
    if (enabledCount === 0) {
      toast({
        title: "No Optimizations Selected",
        description: "Please select at least one optimization first.",
        variant: "destructive",
      });
      return;
    }
    onApplySettings();
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
            <h1 className="text-5xl font-black bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              ROBLOX OPTIMIZER
            </h1>
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
            Unleash maximum performance with advanced FFlag optimizations. 
            Boost your FPS, reduce lag, and dominate the competition!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <Badge className="bg-green-500 text-white px-4 py-2 text-lg">
              {enabledCount} Optimizations Active
            </Badge>
            <Badge className="bg-blue-500 text-white px-4 py-2 text-lg">
              <Shield className="w-4 h-4 mr-2" />
              Safe & Reversible
            </Badge>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleDownloadClick}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download AutoHotkey Script
          </Button>
          
          <Button
            onClick={handleApplyClick}
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-4 text-lg"
          >
            <Settings className="w-5 h-5 mr-2" />
            Apply Settings
          </Button>
          
          {onShowPresets && (
            <Button
              onClick={onShowPresets}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 text-lg"
            >
              Load Presets
            </Button>
          )}
          
          {onClearAll && (
            <Button
              onClick={onClearAll}
              size="lg"
              variant="outline"
              className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
            >
              Clear All
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};