import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  categoryCounts: Record<string, number>;
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'All': return '🎮';
    case 'Performance': return '⚡';
    case 'Graphics': return '🎨';
    case 'Environment': return '🌍';
    case 'Interface': return '🖥️';
    case 'Effects': return '✨';
    case 'Privacy': return '🔒';
    case 'Audio': return '🔊';
    default: return '⚙️';
  }
};

const getCategoryColor = (category: string, isActive: boolean) => {
  const baseColors = {
    'All': 'from-gray-500 to-gray-600',
    'Performance': 'from-blue-500 to-blue-600',
    'Graphics': 'from-purple-500 to-purple-600',
    'Environment': 'from-green-500 to-green-600',
    'Interface': 'from-indigo-500 to-indigo-600',
    'Effects': 'from-pink-500 to-pink-600',
    'Privacy': 'from-red-500 to-red-600',
    'Audio': 'from-yellow-500 to-yellow-600'
  };
  
  return isActive 
    ? `bg-gradient-to-r ${baseColors[category] || 'from-gray-500 to-gray-600'} text-white shadow-lg scale-105`
    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 hover:border-gray-300';
};

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  categoryCounts
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 py-6 shadow-sm border-b">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Choose Your Optimizations
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`${getCategoryColor(category, activeCategory === category)} 
                         transition-all duration-300 hover:scale-105 font-semibold px-6 py-3`}
              variant={activeCategory === category ? "default" : "outline"}
            >
              <span className="text-lg mr-2">{getCategoryIcon(category)}</span>
              {category}
              <Badge 
                className="ml-2 bg-black/20 text-white text-xs"
                variant="secondary"
              >
                {categoryCounts[category] || 0}
              </Badge>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};