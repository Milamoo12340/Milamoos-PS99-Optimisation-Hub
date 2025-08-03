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
      'DFIntTaskSchedulerTargetFps',
      'FFlagTaskSchedulerLimitTargetFpsTo2402',
      'DebugForceMSAASamples',
      'DFFlagTextureQualityOverrideEnabled',
      'DFIntTextureQualityOverride',
      'FFlagDisablePostFx',
      'DFFlagDebugRenderForceTechnologyVoxel',
      'DFIntCSGLevelOfDetailSwitchingDistance',
      'FIntFRMMaxGrassDistance',
      'FIntRenderShadowIntensity',
      'FIntTerrainArraySliceSize',
      'FIntRomarkStartWithGraphicQualityLevel',
      'DFIntDebugRestrictGCDistance',
      'FFlagMSRefactor5',
      'FFlagDebugSSAOForce',
      'FFlagDebugSkyGray',
      'DFIntTextureCompositorActiveJobs',
      'FIntViewportFrameMaxSize'
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
      'DFIntTaskSchedulerTargetFps',
      'DebugForceMSAASamples',
      'FFlagDisablePostFx',
      'FIntFRMMaxGrassDistance',
      'FIntRenderShadowIntensity',
      'FFlagDebugSSAOForce',
      'FFlagAdServiceEnabled',
      'FIntRobloxGuiBlurIntensity',
      'FFlagGlobalWindActivated',
      'DFFlagDebugPauseVoxelizer',
      'FFlagEnableCommandAutocomplete'
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
      'DFFlagTextureQualityOverrideEnabled',
      'DFIntTextureQualityOverride',
      'FIntTextureCompositorLowResFactor',
      'DFFlagDebugRenderForceTechnologyVoxel',
      'DFIntCSGLevelOfDetailSwitchingDistance',
      'FIntFRMMaxGrassDistance',
      'FIntRenderShadowIntensity',
      'FIntTerrainArraySliceSize',
      'FIntRomarkStartWithGraphicQualityLevel',
      'DFIntDebugRestrictGCDistance',
      'FFlagDebugSSAOForce',
      'FFlagDebugSkyGray',
      'DFIntTextureCompositorActiveJobs'
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
      'DebugForceMSAASamples',
      'FIntFRMMaxGrassDistance',
      'FFlagDebugSSAOForce',
      'FFlagAdServiceEnabled',
      'FIntRobloxGuiBlurIntensity',
      'FFlagGlobalWindActivated',
      'FFlagEnableCommandAutocomplete',
      'DFFlagEnableRequestAsyncCompression'
    ]
  },
  {
    id: 'privacy-focused',
    name: 'Privacy Focused',
    description: 'Disables telemetry and data collection while maintaining performance.',
    icon: '🔒',
    color: 'bg-purple-500',
    riskLevel: 'High',
    optimizations: [
      'FFlagDebugDisableTelemetryEphemeralCounter',
      'FFlagDebugDisableTelemetryEphemeralStat',
      'FFlagDebugDisableTelemetryEventIngest',
      'FFlagDebugDisableTelemetryPoint',
      'FFlagDebugDisableTelemetryV2Counter',
      'FFlagDebugDisableTelemetryV2Event',
      'FFlagDebugDisableTelemetryV2Stat',
      'FFlagAdServiceEnabled'
    ]
  },
  {
    id: 'visual-quality',
    name: 'Visual Quality',
    description: 'Minimal performance impact optimizations that enhance visual experience.',
    icon: '🎨',
    color: 'bg-pink-500',
    riskLevel: 'Low',
    optimizations: [
      'DFFlagEnableRequestAsyncCompression',
      'FFlagGlobalWindActivated',
      'FIntRobloxGuiBlurIntensity',
      'FFlagEnableCommandAutocomplete'
    ]
  }
];