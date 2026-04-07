import React, { useState } from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider, useAppContext } from '@/contexts/AppContext';
import { PresetSelector } from '@/components/PresetSelector';
import { OptimizationCard } from '@/components/OptimizationCard';
import { CategoryFilter } from '@/components/CategoryFilter';
import { optimizations } from '@/data/optimizations';
import { optimizationPresets, OptimizationPreset } from '@/data/presets';
import { generateScript, downloadScript, ScriptFormat } from '@/utils/scriptGenerator';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Code, FileCode, Terminal, Zap, AlertTriangle, RefreshCw } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

function ScriptOutputPanel({ format, setFormat }: { format: ScriptFormat; setFormat: (f: ScriptFormat) => void }) {
  const { selectedOptimizations, clearOptimizations } = useAppContext();
  const [preview, setPreview] = useState(false);

  const script = generateScript({ format, selectedIds: selectedOptimizations, optimizations });
  const count = selectedOptimizations.size;

  function handleDownload() {
    if (!count) {
      toast({ title: "Nothing selected", description: "Pick at least one optimisation.", variant: "destructive" });
      return;
    }
    downloadScript(script, format);
    toast({ title: `✅ Downloaded!`, description: `${count} optimisations → .${format === 'powershell' ? 'ps1' : format}` });
  }

  return (
    <Card className="border-green-500/30 bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Terminal className="h-4 w-4 text-green-400" />
          Script Output
          {count > 0 && <Badge className="bg-green-500/20 text-green-400 border-green-500/30">{count} selected</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Format tabs */}
        <Tabs value={format} onValueChange={(v) => setFormat(v as ScriptFormat)}>
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="powershell">PowerShell</TabsTrigger>
            <TabsTrigger value="json">JSON</TabsTrigger>
            <TabsTrigger value="ahk">AHK v2</TabsTrigger>
            <TabsTrigger value="bat">Batch</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="text-xs text-muted-foreground">
          {format === 'powershell' && '🖥️ Writes FFlags directly to your Roblox ClientAppSettings.json'}
          {format === 'json' && '📋 Raw JSON — paste into ClientSettings\\ClientAppSettings.json manually'}
          {format === 'ahk' && '🤖 AutoHotkey v2 macro — auto-applies and optionally launches Roblox'}
          {format === 'bat' && '⚡ One-click batch file — double-click to apply'}
        </div>

        {/* Preview toggle */}
        {count > 0 && (
          <Button variant="outline" size="sm" className="w-full" onClick={() => setPreview(!preview)}>
            <Code className="h-3 w-3 mr-1" /> {preview ? 'Hide' : 'Preview'} Script
          </Button>
        )}

        {preview && count > 0 && (
          <pre className="text-xs bg-black/50 border border-white/10 rounded p-3 overflow-auto max-h-64 text-green-400 font-mono whitespace-pre-wrap">
            {script.slice(0, 3000)}{script.length > 3000 ? '\n... (truncated in preview)' : ''}
          </pre>
        )}

        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={handleDownload}
          disabled={!count}
        >
          <Download className="h-4 w-4 mr-2" />
          {count > 0 ? `Download Script (${count} opts)` : 'Select optimisations first'}
        </Button>

        {count > 0 && (
          <Button variant="ghost" size="sm" className="w-full text-muted-foreground" onClick={clearOptimizations}>
            <RefreshCw className="h-3 w-3 mr-1" /> Clear All Selections
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function MainContent() {
  const { selectedCategory, applyPreset, selectedOptimizations } = useAppContext();
  const [showPresets, setShowPresets] = useState(true);
  const [format, setFormat] = useState<ScriptFormat>('powershell');

  const filtered = optimizations.filter(
    o => selectedCategory === 'all' || o.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  const riskCounts = { Critical: 0, High: 0, Medium: 0, Low: 0 };
  optimizations.filter(o => selectedOptimizations.has(o.id)).forEach(o => {
    riskCounts[o.riskLevel as keyof typeof riskCounts]++;
  });
  const hasHighRisk = riskCounts.Critical > 0 || riskCounts.High > 0;

  function handlePresetSelect(preset: OptimizationPreset) {
    applyPreset(preset);
    setShowPresets(false);
  }

  return (
    <AppLayout>
      {showPresets ? (
        <div className="p-6">
          <PresetSelector onPresetSelect={handlePresetSelect} />
          <div className="text-center mt-4">
            <Button variant="ghost" className="text-muted-foreground" onClick={() => setShowPresets(false)}>
              Skip — choose manually →
            </Button>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="flex gap-2 mb-4 flex-wrap items-center justify-between">
            <div className="flex gap-2 items-center flex-wrap">
              <h2 className="text-lg font-bold">Optimisations</h2>
              <Button variant="outline" size="sm" onClick={() => setShowPresets(true)}>
                <Zap className="h-3 w-3 mr-1" /> Load Preset
              </Button>
            </div>
            {hasHighRisk && (
              <div className="flex items-center gap-1 text-orange-400 text-xs">
                <AlertTriangle className="h-3 w-3" />
                High-risk flags selected — monitor your system
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6">
            {/* Optimisations list */}
            <div>
              <CategoryFilter />
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                {filtered.map(opt => (
                  <OptimizationCard key={opt.id} optimization={opt} />
                ))}
              </div>
            </div>

            {/* Script output panel */}
            <div className="space-y-4">
              <ScriptOutputPanel format={format} setFormat={setFormat} />

              {/* Risk breakdown */}
              {selectedOptimizations.size > 0 && (
                <Card className="border-white/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Risk Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1 text-xs">
                    {riskCounts.Critical > 0 && <div className="flex justify-between"><span className="text-red-500">⛔ Critical</span><span>{riskCounts.Critical}</span></div>}
                    {riskCounts.High > 0 && <div className="flex justify-between"><span className="text-orange-400">🔴 High</span><span>{riskCounts.High}</span></div>}
                    {riskCounts.Medium > 0 && <div className="flex justify-between"><span className="text-yellow-400">🟡 Medium</span><span>{riskCounts.Medium}</span></div>}
                    {riskCounts.Low > 0 && <div className="flex justify-between"><span className="text-green-400">🟢 Low</span><span>{riskCounts.Low}</span></div>}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}

export default function Index() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
