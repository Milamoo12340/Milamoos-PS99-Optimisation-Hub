import { Optimization } from '@/data/optimizations';

export const generateAutoHotkeyScript = (enabledOptimizations: Optimization[]): string => {
  if (enabledOptimizations.length === 0) {
    throw new Error('No optimizations selected');
  }

  const allFlags: Record<string, string | number | boolean> = {};
  
  // Collect all flags from enabled optimizations
  enabledOptimizations.forEach(opt => {
    Object.assign(allFlags, opt.flags);
  });

  const flagEntries = Object.entries(allFlags)
    .map(([key, value]) => {
      let regValue: string;
      let regType: string;
      
      if (typeof value === 'string') {
        regValue = value;
        regType = 'REG_SZ';
      } else if (typeof value === 'boolean') {
        regValue = value ? 'True' : 'False';
        regType = 'REG_SZ';
      } else {
        regValue = value.toString();
        regType = 'REG_DWORD';
      }
      
      return `RegWrite("${regValue}", "${regType}", "HKEY_CURRENT_USER", "Software\\\\Roblox Corporation\\\\Environments\\\\roblox-player", "${key}")`;
    })
    .join('\n        ');

  return `#Requires AutoHotkey v2.0
#SingleInstance Force
#NoTrayIcon

; Request administrator privileges
if not A_IsAdmin {
    try {
        Run('*RunAs "' A_ScriptFullPath '"')
    }
    ExitApp()
}

; Roblox Performance Optimizer
; Generated: ${new Date().toLocaleString()}
; Optimizations: ${enabledOptimizations.map(o => o.name).join(', ')}

MsgBox("🚀 Roblox Performance Optimizer\\n\\nThis will apply ${enabledOptimizations.length} optimizations.\\n\\n⚠️ Make sure Roblox is CLOSED before continuing!", "Roblox Optimizer", "OK")

; Check if Roblox is running
if ProcessExist("RobloxPlayerBeta.exe") or ProcessExist("Roblox.exe") {
    MsgBox("❌ Roblox is currently running!\\n\\nPlease close Roblox completely and run this script again.", "Error", "OK IconX")
    ExitApp()
}

; Apply optimizations
try {
    ; Create registry key if it doesn't exist
    RegCreateKey("HKEY_CURRENT_USER", "Software\\\\Roblox Corporation\\\\Environments\\\\roblox-player")
    
    ; Apply all flags
    ${flagEntries}
    
    MsgBox("✅ SUCCESS!\\n\\n${enabledOptimizations.length} optimizations applied successfully!\\n\\n🎮 You can now launch Roblox to see the performance improvements.", "Success", "OK")
    
} catch as err {
    MsgBox("❌ ERROR: " err.Message "\\n\\nMake sure you're running as administrator!", "Error", "OK IconX")
}

ExitApp()`;
};

export const downloadScript = (content: string, filename: string = 'RobloxOptimizer.ahk'): boolean => {
  try {
    // Create blob with BOM for proper encoding
    const blob = new Blob(['\ufeff' + content], { 
      type: 'text/plain;charset=utf-8' 
    });
    
    // Create download URL
    const url = URL.createObjectURL(blob);
    
    // Create temporary download link
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.style.display = 'none';
    
    // Add to DOM, click, and remove
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    
    // Clean up URL
    setTimeout(() => URL.revokeObjectURL(url), 100);
    
    // Show success notification
    if (typeof window !== 'undefined' && window.alert) {
      setTimeout(() => {
        alert(`✅ Script downloaded successfully!\\n\\nFile: ${filename}\\n\\n📋 Instructions:\\n1. Right-click the downloaded file\\n2. Select "Run as administrator"\\n3. Follow the prompts\\n\\n⚠️ Make sure Roblox is closed before running!`);
      }, 500);
    }
    
    return true;
  } catch (error) {
    console.error('Download failed:', error);
    if (typeof window !== 'undefined' && window.alert) {
      alert('❌ Download failed: ' + (error instanceof Error ? error.message : 'Unknown error'));
    }
    return false;
  }
};