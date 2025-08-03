import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Optimization } from '@/data/optimizations';
import { useAppContext } from '@/contexts/AppContext';

interface OptimizationCardProps {
  optimization: Optimization;
}

const getRiskColor = (risk: string) => {
  switch (risk) {
    case 'Low': return 'bg-green-500';
    case 'Medium': return 'bg-yellow-500';
    case 'High': return 'bg-orange-500';
    case 'Critical': return 'bg-red-500';
    default: return 'bg-gray-500';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Performance': return 'bg-blue-500';
    case 'Graphics': return 'bg-purple-500';
    case 'Environment': return 'bg-green-600';
    case 'Interface': return 'bg-indigo-500';
    case 'Effects': return 'bg-pink-500';
    case 'Privacy': return 'bg-red-600';
    case 'Audio': return 'bg-cyan-500';
    default: return 'bg-gray-500';
  }
};

export const OptimizationCard: React.FC<OptimizationCardProps> = ({
  optimization
}) => {
  const { selectedOptimizations, toggleOptimization } = useAppContext();
  const isEnabled = selectedOptimizations.has(optimization.id);

  return (
    <Card className={`transition-all duration-300 hover:shadow-lg border-2 ${
      isEnabled 
        ? 'border-green-400 bg-green-50 dark:bg-green-950' 
        : 'border-gray-200 hover:border-gray-300'
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CardTitle className="text-lg font-bold text-gray-900 dark:text-white">
              {optimization.name}
            </CardTitle>
            <Badge className={`${getCategoryColor(optimization.category)} text-white text-xs`}>
              {optimization.category}
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge className={`${getRiskColor(optimization.riskLevel)} text-white`}>
              {optimization.riskLevel} Risk
            </Badge>
            <Switch
              checked={isEnabled}
              onCheckedChange={() => toggleOptimization(optimization.id)}
              className="data-[state=checked]:bg-green-500"
            />
          </div>
        </div>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          {optimization.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm">
            <span className="font-semibold text-gray-700 dark:text-gray-200">Impact:</span>
            <span className="ml-2 text-gray-600 dark:text-gray-300">{optimization.impact}</span>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Flags:</span>
            <span className="ml-2">{Object.keys(optimization.flags).length} flag(s)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};