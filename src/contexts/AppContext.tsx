import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import { OptimizationPreset } from '@/data/presets';

interface AppContextType {
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  selectedOptimizations: Set<string>;
  toggleOptimization: (id: string) => void;
  applyPreset: (preset: OptimizationPreset) => void;
  clearOptimizations: () => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const defaultAppContext: AppContextType = {
  sidebarOpen: false,
  toggleSidebar: () => {},
  selectedOptimizations: new Set(),
  toggleOptimization: () => {},
  applyPreset: () => {},
  clearOptimizations: () => {},
  selectedCategory: 'all',
  setSelectedCategory: () => {},
};

const AppContext = createContext<AppContextType>(defaultAppContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOptimizations, setSelectedOptimizations] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const toggleOptimization = (id: string) => {
    setSelectedOptimizations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const applyPreset = (preset: OptimizationPreset) => {
    setSelectedOptimizations(new Set(preset.optimizations));
    toast({
      title: "Preset Applied",
      description: `${preset.name} preset has been applied with ${preset.optimizations.length} optimizations.`,
    });
  };

  const clearOptimizations = () => {
    setSelectedOptimizations(new Set());
    toast({
      title: "Optimizations Cleared",
      description: "All optimizations have been deselected.",
    });
  };

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        selectedOptimizations,
        toggleOptimization,
        applyPreset,
        clearOptimizations,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};