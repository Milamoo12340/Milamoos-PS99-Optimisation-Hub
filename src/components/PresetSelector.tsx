import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { optimizationPresets, OptimizationPreset } from "@/data/presets";
import { useAppContext } from "@/contexts/AppContext";

interface PresetSelectorProps {
  onPresetSelect: (preset: OptimizationPreset) => void;
}

export function PresetSelector({ onPresetSelect }: PresetSelectorProps) {
  const { selectedOptimizations } = useAppContext();

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-500';
      case 'Medium': return 'bg-yellow-500';
      case 'High': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-2">Optimization Presets</h2>
        <p className="text-gray-400">Choose a preset configuration or customize your own</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {optimizationPresets.map((preset) => (
          <Card key={preset.id} className="bg-gray-800 border-gray-700 hover:border-gray-600 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{preset.icon}</span>
                  <CardTitle className="text-white text-lg">{preset.name}</CardTitle>
                </div>
                <Badge className={`${getRiskColor(preset.riskLevel)} text-white`}>
                  {preset.riskLevel}
                </Badge>
              </div>
              <CardDescription className="text-gray-400 text-sm">
                {preset.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div className="text-sm text-gray-300">
                  <span className="font-medium">{preset.optimizations.length}</span> optimizations
                </div>
                
                <Button
                  onClick={() => onPresetSelect(preset)}
                  className={`w-full ${preset.color} hover:opacity-90 text-white font-medium`}
                  variant="default"
                >
                  Apply Preset
                </Button>
                
                <div className="text-xs text-gray-500">
                  Click to apply all optimizations in this preset
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-400 bg-gray-800 px-4 py-2 rounded-lg">
          <span>💡</span>
          <span>You can still customize individual optimizations after applying a preset</span>
        </div>
      </div>
    </div>
  );
}