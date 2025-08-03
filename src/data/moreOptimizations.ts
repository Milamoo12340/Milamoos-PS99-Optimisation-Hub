import { Optimization } from './optimizations';

export const moreOptimizations: Optimization[] = [
  {
    id: 'remove-grass',
    name: 'Remove Grass',
    description: 'Eliminates grass rendering for cleaner performance.',
    impact: 'Small FPS boost, less natural environments',
    riskLevel: 'Low',
    category: 'Environment',
    flags: {
      "FIntFRMMaxGrassDistance": "0",
      "FIntFRMMinGrassDistance": "0"
    },
    enabled: false
  },
  {
    id: 'remove-shadows',
    name: 'Remove Shadows',
    description: 'Disables all shadow rendering for major performance gains.',
    impact: 'Significant FPS boost, flat lighting',
    riskLevel: 'Medium',
    category: 'Graphics',
    flags: {
      "FFlagNewLightAttenuation": "False",
      "FIntRenderShadowIntensity": "0",
      "DFFlagDebugPauseVoxelizer": "True",
      "FIntCSGVoxelizerFadeRadius": "0"
    },
    enabled: false
  },
  {
    id: 'low-terrain',
    name: 'Low Quality Terrain',
    description: 'Reduces terrain rendering quality and complexity.',
    impact: 'FPS improvement, less detailed terrain',
    riskLevel: 'Low',
    category: 'Environment',
    flags: { "FIntTerrainArraySliceSize": "0" },
    enabled: false
  },
  {
    id: 'low-graphics',
    name: 'Force Low Graphics',
    description: 'Forces graphics quality to lowest setting.',
    impact: 'Major performance boost, minimal visual quality',
    riskLevel: 'Low',
    category: 'Graphics',
    flags: {
      "FIntRomarkStartWithGraphicQualityLevel": "1",
      "DFIntDebugFRMQualityLevelOverride": "1"
    },
    enabled: false
  },
  {
    id: 'low-render-distance',
    name: 'Reduce Render Distance',
    description: 'Limits how far objects are rendered.',
    impact: 'Good FPS boost, objects pop in closer',
    riskLevel: 'Medium',
    category: 'Performance',
    flags: { "DFIntDebugRestrictGCDistance": "1" },
    enabled: false
  },
  {
    id: 'disable-ui',
    name: 'Disable In-Game UI',
    description: 'Removes screen GUI elements for competitive advantage.',
    impact: 'Slight performance boost, no UI elements',
    riskLevel: 'High',
    category: 'Interface',
    flags: { "FFlagDebugDontRenderScreenGui": "True" },
    enabled: false
  },
  {
    id: 'disable-ssao',
    name: 'Disable SSAO',
    description: 'Disables Screen Space Ambient Occlusion for better performance.',
    impact: 'FPS improvement, less realistic shadows',
    riskLevel: 'Low',
    category: 'Graphics',
    flags: {
      "FFlagDebugSSAOForce": "False",
      "FIntSSAOMipLevels": "0"
    },
    enabled: false
  },
  {
    id: 'disable-ads',
    name: 'Disable Ad Portals',
    description: 'Removes advertisement portals and sponsored content.',
    impact: 'Cleaner experience, faster loading',
    riskLevel: 'Low',
    category: 'Interface',
    flags: { "FFlagAdServiceEnabled": "False" },
    enabled: false
  },
  {
    id: 'disable-autocomplete',
    name: 'Disable Command Autocomplete',
    description: 'Removes command autocomplete for better input performance.',
    impact: 'Faster chat input, no autocomplete suggestions',
    riskLevel: 'Low',
    category: 'Interface',
    flags: { "FFlagEnableCommandAutocomplete": "False" },
    enabled: false
  },
  {
    id: 'disable-blur',
    name: 'Disable CoreGUI Blur',
    description: 'Removes blur effects from menus and interfaces.',
    impact: 'Better performance, sharper UI',
    riskLevel: 'Low',
    category: 'Interface',
    flags: { "FIntRobloxGuiBlurIntensity": "0" },
    enabled: false
  },
  {
    id: 'disable-sky',
    name: 'Disable Sky Rendering',
    description: 'Replaces sky with solid color for performance.',
    impact: 'FPS boost, gray sky background',
    riskLevel: 'Medium',
    category: 'Environment',
    flags: { "FFlagDebugSkyGray": "True" },
    enabled: false
  },
  {
    id: 'disable-player-textures',
    name: 'Disable Player Textures',
    description: 'Removes player avatar textures and clothing.',
    impact: 'FPS improvement, plain colored avatars',
    riskLevel: 'Medium',
    category: 'Graphics',
    flags: { "DFIntTextureCompositorActiveJobs": "0" },
    enabled: false
  },
  {
    id: 'disable-titlebar',
    name: 'Disable Fullscreen Titlebar',
    description: 'Prevents titlebar from appearing in fullscreen.',
    impact: 'Cleaner fullscreen experience',
    riskLevel: 'Low',
    category: 'Interface',
    flags: { "FIntFullscreenTitleBarTriggerDelayMillis": "2147483647" },
    enabled: false
  },
  {
    id: 'disable-viewport-frames',
    name: 'Disable ViewportFrames',
    description: 'Disables 3D viewport frames in GUIs.',
    impact: 'Better performance, missing 3D GUI elements',
    riskLevel: 'Medium',
    category: 'Interface',
    flags: { "FIntViewportFrameMaxSize": "0" },
    enabled: false
  },
  {
    id: 'disable-telemetry',
    name: 'Disable Telemetry',
    description: 'Stops Roblox from collecting usage data and analytics.',
    impact: 'Better privacy, potential detection risk',
    riskLevel: 'High',
    category: 'Privacy',
    flags: {
      "FFlagDebugDisableTelemetryEphemeralCounter": "True",
      "FFlagDebugDisableTelemetryEphemeralStat": "True",
      "FFlagDebugDisableTelemetryEventIngest": "True",
      "FFlagDebugDisableTelemetryPoint": "True",
      "FFlagDebugDisableTelemetryV2Counter": "True",
      "FFlagDebugDisableTelemetryV2Event": "True",
      "FFlagDebugDisableTelemetryV2Stat": "True"
    },
    enabled: false
  },
  {
    id: 'disable-wind',
    name: 'Disable Wind Effects',
    description: 'Removes wind animations on trees and objects.',
    impact: 'Small FPS boost, static environment',
    riskLevel: 'Low',
    category: 'Environment',
    flags: { "FFlagGlobalWindActivated": "False" },
    enabled: false
  },
  {
    id: 'quick-launch',
    name: 'Disable Quick Game Launch',
    description: 'Disables quick launch feature for more stable startup.',
    impact: 'More stable game loading, slower startup',
    riskLevel: 'Low',
    category: 'Performance',
    flags: { "FFlagEnableQuickGameLaunch": "False" },
    enabled: false
  },
  {
    id: 'remove-textures',
    name: 'Remove All Textures',
    description: 'Removes most textures for maximum performance boost.',
    impact: 'Massive FPS boost, everything looks flat',
    riskLevel: 'High',
    category: 'Graphics',
    flags: {
      "FFlagMSRefactor5": "False",
      "FIntDebugTextureManagerSkipMips": "-1",
      "FStringPartTexturePackTablePre2022": "",
      "FStringTerrainMaterialTable2022": ""
    },
    enabled: false
  },
  {
    id: 'disable-sound-effects',
    name: 'Reduce Audio Quality',
    description: 'Lowers audio quality and disables some sound effects.',
    impact: 'Better performance, reduced audio quality',
    riskLevel: 'Low',
    category: 'Audio',
    flags: {
      "DFIntAudioStreamingMinBitrate": "32",
      "DFIntAudioStreamingMaxBitrate": "64",
      "FFlagDebugAudioLogging": "False"
    },
    enabled: false
  },
  {
    id: 'memory-optimization',
    name: 'Memory Optimization',
    description: 'Optimizes memory usage and garbage collection.',
    impact: 'More stable performance, less memory usage',
    riskLevel: 'Low',
    category: 'Performance',
    flags: {
      "DFIntHttpCurlConnectionCacheSize": "16",
      "DFIntTaskSchedulerTargetFps": "144",
      "FFlagPreloadSounds": "False"
    },
    enabled: false
  }
];