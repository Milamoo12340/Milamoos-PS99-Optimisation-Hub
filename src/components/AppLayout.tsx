import React, { useState } from 'react';
import { Header } from './Header';
import { CategoryFilter } from './CategoryFilter';
import { OptimizationCard } from './OptimizationCard';
import { AdminDialog } from './AdminDialog';
import { PresetSelector } from './PresetSelector';
import { optimizations } from '@/data/optimizations';
import { moreOptimizations } from '@/data/moreOptimizations';
import { generateAutoHotkeyScript, downloadScript } from '@/utils/scriptGenerator';
import { useAppContext } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const AppLayout: React.FC = () => {
  const allOptimizations = [...optimizations, ...moreOptimizations];
  const [showAdminDialog, setShowAdminDialog] = useState(false);
  const [showPresets, setShowPresets] = useState(false);
  
  const { 
    selectedOptimizations, 
    selectedCategory, 
    setSelectedCategory,
    applyPreset,
    clearOptimizations 
  } = useAppContext();

  const categories = ['all', ...Array.from(new Set(allOptimizations.map(o => o.category.toLowerCase())))];
  const enabledCount = selectedOptimizations.size;
  
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = cat === 'all' ? allOptimizations.length : allOptimizations.filter(o => o.category.toLowerCase() === cat).length;
    return acc;
  }, {} as Record<string, number>);

  const filteredOpts = selectedCategory === 'all' 
    ? allOptimizations 
    : allOptimizations.filter(o => o.category.toLowerCase() === selectedCategory);

  const handleDownloadScript = () => {
    try {
      const enabled = allOptimizations.filter(o => selectedOptimizations.has(o.id));
      if (enabled.length === 0) {
        toast({
          title: "No Optimizations Selected",
          description: "Please select at least one optimization before downloading.",
          variant: "destructive",
        });
        return;
      }
      
      const script = generateAutoHotkeyScript(enabled);
      const success = downloadScript(script, 'RobloxOptimizer.ahk');
      
      if (success) {
        toast({
          title: "Script Downloaded Successfully!",
          description: `AutoHotkey script with ${enabled.length} optimizations is ready to use.`,
        });
      }
    } catch (error) {
      console.error('Script generation failed:', error);
      toast({
        title: "Download Failed",
        description: "Failed to generate the AutoHotkey script. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleApplySettings = () => {
    if (enabledCount === 0) {
      toast({
        title: "No Optimizations Selected",
        description: "Please select at least one optimization to apply.",
        variant: "destructive",
      });
      return;
    }
    setShowAdminDialog(true);
  };

  if (showPresets) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <Button 
              onClick={() => setShowPresets(false)}
              variant="outline"
              className="text-white border-gray-600 hover:bg-gray-700"
            >
              ← Back to Optimizations
            </Button>
          </div>
          <PresetSelector onPresetSelect={(preset) => {
            applyPreset(preset);
            setShowPresets(false);
          }} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        enabledCount={enabledCount}
        onDownloadScript={handleDownloadScript}
        onApplySettings={handleApplySettings}
        onShowPresets={() => setShowPresets(true)}
        onClearAll={clearOptimizations}
      />
      
      <CategoryFilter
        categories={categories}
        activeCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categoryCounts={categoryCounts}
      />

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpts.map(opt => (
            <OptimizationCard
              key={opt.id}
              optimization={opt}
            />
          ))}
        </div>
      </div>

      <AdminDialog
        isOpen={showAdminDialog}
        onClose={() => setShowAdminDialog(false)}
        onDownloadScript={handleDownloadScript}
        optimizationCount={enabledCount}
      />
    </div>
  );
};

export default AppLayout;