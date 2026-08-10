export interface OptimizationPreset {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  optimizations: string[];
  riskLevel: 'Low' | 'Medium' | 'High';
}

export const optimizationPresets: OptimizationPreset[] = [
  {
    id: 'maximum-fps',
    name: 'Maximum FPS',
    description: 'Aggressive optimizations for highest possible framerate. Sacrifices visual quality for performance.',
    icon: '⚡',
    color: 'bg-red-500',
    riskLevel: 'High',
    optimizations: [
      'infinite-fps',
      'disable-antialiasing',
      'low-quality-textures',
      'disable-post-fx',
      'force-voxel-lighting',
      'low-quality-meshes',
      'remove-grass',
      'disable-shadows',
      'disable-ssao',
      'gray-sky',
      'limit-texture-jobs',
      'reduce-terrain',
      'low-graphic-quality',
      'disable-particles',
      'disable-wind'
    ]
  },
  {
    id: 'competitive',
    name: 'Competitive',
    description: 'Optimized for competitive gaming. Removes distractions while maintaining visibility.',
    icon: '🎯',
    color: 'bg-orange-500',
    riskLevel: 'Medium',
    optimizations: [
      'infinite-fps',
      'disable-antialiasing',
      'disable-post-fx',
      'remove-grass',
      'disable-shadows',
      'disable-ssao',
      'disable-ads',
      'disable-wind',
      'disable-particles'
    ]
  },
  {
    id: 'low-end-pc',
    name: 'Low-End PC',
    description: 'Maximum compatibility for older or weaker hardware. Prioritizes stability and performance.',
    icon: '💻',
    color: 'bg-blue-500',
    riskLevel: 'Medium',
    optimizations: [
      'low-quality-textures',
      'force-voxel-lighting',
      'low-quality-meshes',
      'remove-grass',
      'disable-shadows',
      'disable-ssao',
      'gray-sky',
      'limit-texture-jobs',
      'reduce-terrain',
      'low-graphic-quality',
      'disable-wind',
      'disable-particles',
      'disable-water'
    ]
  },
  {
    id: 'balanced',
    name: 'Balanced',
    description: 'Moderate optimizations that improve performance while maintaining visual quality.',
    icon: '⚖️',
    color: 'bg-green-500',
    riskLevel: 'Low',
    optimizations: [
      'disable-antialiasing',
      'remove-grass',
      'disable-ssao',
      'disable-ads',
      'disable-wind',
      'async-compression'
    ]
  },
  {
    id: 'privacy-focused',
    name: 'Privacy Focused',
    description: 'Disables telemetry and data collection while maintaining performance.',
    icon: '🔒',
    color: 'bg-purple-500',
    riskLevel: 'Low',
    optimizations: [
      'disable-telemetry',
      'disable-ads'
    ]
  },
  {
    id: 'streaming',
    name: 'Streaming & Recording',
    description: 'Stable framerate for content creation. Reduces GPU spikes without sacrificing too much quality.',
    icon: '🎬',
    color: 'bg-cyan-500',
    riskLevel: 'Medium',
    optimizations: [
      'disable-antialiasing',
      'disable-particles',
      'disable-ssao',
      'disable-wind',
      'async-compression',
      'limit-texture-jobs',
      'reduce-animations'
    ]
  },
  {
    id: 'visual-clarity',
    name: 'Visual Clarity',
    description: 'Removes visual clutter for a cleaner view without aggressive quality loss.',
    icon: '👁️',
    color: 'bg-pink-500',
    riskLevel: 'Low',
    optimizations: [
      'disable-post-fx',
      'disable-wind',
      'remove-grass',
      'disable-water',
      'async-compression',
      'disable-ads'
    ]
  }
];
