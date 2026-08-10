export interface Optimization {
  id: string;
  name: string;
  description: string;
  impact: string;
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  category: string;
  flags: Record<string, string | number | boolean>;
  enabled: boolean;
}

export const optimizations: Optimization[] = [
  {
    id: 'infinite-fps',
    name: 'Unlock FPS Cap',
    description: 'Removes the 60 FPS limit for maximum performance. Monitor GPU temperature.',
    impact: 'Massive FPS increase, higher GPU usage',
    riskLevel: 'Medium',
    category: 'Performance',
    flags: {
      "DFIntTaskSchedulerTargetFps": 999,
      "FFlagTaskSchedulerLimitTargetFpsTo2402": false
    },
    enabled: false
  },
  {
    id: 'disable-vsync',
    name: 'Disable VSync',
    description: 'Disables vertical synchronization for lower input lag.',
    impact: 'Reduced input lag, possible screen tearing',
    riskLevel: 'Low',
    category: 'Performance',
    flags: {
      "DFIntDefaultFrameRateLimit": 0,
      "FFlagEnableVSync": false
    },
    enabled: false
  },
  {
    id: 'low-quality-textures',
    name: 'Low Quality Textures',
    description: 'Forces lowest texture quality for maximum FPS boost.',
    impact: 'Major FPS boost, significantly reduced visual quality',
    riskLevel: 'Low',
    category: 'Graphics',
    flags: {
      "DFIntTextureQualityOverride": 0,
      "DFFlagTextureQualityOverrideEnabled": true,
      "FIntDebugTextureManagerSkipMips": 8
    },
    enabled: false
  },
  {
    id: 'disable-shadows',
    name: 'Disable Shadows',
    description: 'Removes all shadow rendering for major performance gains.',
    impact: 'Significant FPS boost, flat lighting',
    riskLevel: 'Medium',
    category: 'Graphics',
    flags: {
      "FIntRenderShadowIntensity": 0,
      "DFFlagDebugPauseVoxelizer": true,
      "FFlagNewLightAttenuation": false
    },
    enabled: false
  },
  {
    id: 'disable-post-fx',
    name: 'Disable Post Effects',
    description: 'Removes bloom, blur, and other post-processing effects.',
    impact: 'Good FPS boost, flat appearance',
    riskLevel: 'Medium',
    category: 'Graphics',
    flags: {
      "FFlagDisablePostFx": true,
      "FIntRobloxGuiBlurIntensity": 0
    },
    enabled: false
  },
  {
    id: 'low-quality-meshes',
    name: 'Low Quality Meshes',
    description: 'Reduces mesh detail and level-of-detail switching.',
    impact: 'FPS improvement, less detailed models',
    riskLevel: 'Low',
    category: 'Graphics',
    flags: {
      "DFIntCSGLevelOfDetailSwitchingDistance": 0,
      "DFIntCSGLevelOfDetailSwitchingDistanceL12": 0,
      "DFIntCSGLevelOfDetailSwitchingDistanceL23": 0,
      "DFIntCSGLevelOfDetailSwitchingDistanceL34": 0
    },
    enabled: false
  },
  {
    id: 'disable-particles',
    name: 'Disable Particles',
    description: 'Removes all particle effects like fire, smoke, and explosions.',
    impact: 'Good FPS boost, no particle effects visible',
    riskLevel: 'Medium',
    category: 'Effects',
    flags: {
      "FFlagDebugDisableParticles": true,
      "DFIntMaxParticleCount": 0
    },
    enabled: false
  },
  {
    id: 'reduce-animations',
    name: 'Reduce Animation Quality',
    description: 'Lowers animation quality and frame rate.',
    impact: 'FPS improvement, choppy character movements',
    riskLevel: 'Medium',
    category: 'Performance',
    flags: {
      "DFIntAnimationLodFacsDistanceMin": 0,
      "DFIntAnimationLodFacsDistanceMax": 0,
      "FFlagAnimationMinLod": true
    },
    enabled: false
  },
  {
    id: 'disable-water',
    name: 'Disable Water Effects',
    description: 'Removes water reflections and wave animations.',
    impact: 'FPS boost near water, flat water appearance',
    riskLevel: 'Low',
    category: 'Environment',
    flags: {
      "FFlagDebugDisableWaterReflection": true,
      "DFIntWaterReflectionTextureSize": 0
    },
    enabled: false
  },
  {
    id: 'remove-grass',
    name: 'Remove Grass',
    description: 'Eliminates grass rendering completely.',
    impact: 'Small FPS boost, less natural environments',
    riskLevel: 'Low',
    category: 'Environment',
    flags: {
      "FIntFRMMaxGrassDistance": 0,
      "FIntFRMMinGrassDistance": 0,
      "FFlagGrassEnabled": false
    },
    enabled: false
  },
  {
    id: 'disable-antialiasing',
    name: 'Disable Anti-Aliasing',
    description: 'Turns off MSAA anti-aliasing to reduce GPU load.',
    impact: 'Moderate FPS boost, slightly jagged edges',
    riskLevel: 'Low',
    category: 'Graphics',
    flags: {
      "FIntDebugForceMSAASamples": 0
    },
    enabled: false
  },
  {
    id: 'disable-ssao',
    name: 'Disable Ambient Occlusion',
    description: 'Removes SSAO (screen-space ambient occlusion) for less GPU load.',
    impact: 'FPS boost, less depth in lighting',
    riskLevel: 'Low',
    category: 'Graphics',
    flags: {
      "FFlagDebugSSAOForce": true,
      "FIntSSAORadius": 0
    },
    enabled: false
  },
  {
    id: 'gray-sky',
    name: 'Simplified Sky',
    description: 'Replaces the dynamic skybox with a flat gray sky for better FPS.',
    impact: 'Small FPS boost, no sky details',
    riskLevel: 'Low',
    category: 'Environment',
    flags: {
      "FFlagDebugSkyGray": true
    },
    enabled: false
  },
  {
    id: 'disable-telemetry',
    name: 'Disable Telemetry',
    description: 'Disables all Roblox telemetry and data collection.',
    impact: 'Reduced background CPU usage, improved privacy',
    riskLevel: 'Low',
    category: 'Privacy',
    flags: {
      "FFlagDebugDisableTelemetryEphemeralCounter": true,
      "FFlagDebugDisableTelemetryEphemeralStat": true,
      "FFlagDebugDisableTelemetryEventIngest": true,
      "FFlagDebugDisableTelemetryPoint": true,
      "FFlagDebugDisableTelemetryV2Counter": true,
      "FFlagDebugDisableTelemetryV2Event": true,
      "FFlagDebugDisableTelemetryV2Stat": true
    },
    enabled: false
  },
  {
    id: 'disable-ads',
    name: 'Disable In-Game Ads',
    description: 'Prevents in-game advertisement rendering.',
    impact: 'Removes ad banners, minor FPS improvement',
    riskLevel: 'Low',
    category: 'Privacy',
    flags: {
      "FFlagAdServiceEnabled": false
    },
    enabled: false
  },
  {
    id: 'disable-wind',
    name: 'Disable Wind Effects',
    description: 'Stops all wind-based animations on foliage and objects.',
    impact: 'Small FPS boost, static foliage',
    riskLevel: 'Low',
    category: 'Environment',
    flags: {
      "FFlagGlobalWindActivated": false
    },
    enabled: false
  },
  {
    id: 'force-voxel-lighting',
    name: 'Force Voxel Lighting',
    description: 'Forces the less demanding Voxel lighting engine instead of Future/ShadowMap.',
    impact: 'Significant FPS boost on low-end PCs, simpler lighting',
    riskLevel: 'Medium',
    category: 'Graphics',
    flags: {
      "DFFlagDebugRenderForceTechnologyVoxel": true
    },
    enabled: false
  },
  {
    id: 'reduce-terrain',
    name: 'Reduce Terrain Quality',
    description: 'Lowers terrain detail and draw distance for better performance.',
    impact: 'FPS improvement, less terrain detail at distance',
    riskLevel: 'Low',
    category: 'Performance',
    flags: {
      "FIntTerrainArraySliceSize": 2,
      "DFIntDebugRestrictGCDistance": 1
    },
    enabled: false
  },
  {
    id: 'async-compression',
    name: 'Enable Async Compression',
    description: 'Enables asynchronous network compression to reduce lag spikes.',
    impact: 'Smoother gameplay, reduced network stutters',
    riskLevel: 'Low',
    category: 'Performance',
    flags: {
      "DFFlagEnableRequestAsyncCompression": true
    },
    enabled: false
  },
  {
    id: 'low-graphic-quality',
    name: 'Force Low Graphic Quality',
    description: 'Forces Roblox to start at the lowest graphic quality level.',
    impact: 'Major FPS boost, minimum visual quality',
    riskLevel: 'Low',
    category: 'Performance',
    flags: {
      "FIntRomarkStartWithGraphicQualityLevel": 1
    },
    enabled: false
  },
  {
    id: 'limit-texture-jobs',
    name: 'Limit Texture Processing',
    description: 'Reduces the number of active texture compositor jobs.',
    impact: 'Less CPU usage on texture loading, possible pop-in',
    riskLevel: 'Low',
    category: 'Performance',
    flags: {
      "DFIntTextureCompositorActiveJobs": 0
    },
    enabled: false
  }
];
