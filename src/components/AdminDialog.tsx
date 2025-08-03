import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, Download } from 'lucide-react';

interface AdminDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadScript: () => void;
  optimizationCount: number;
}

export const AdminDialog: React.FC<AdminDialogProps> = ({
  isOpen,
  onClose,
  onDownloadScript,
  optimizationCount
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-yellow-500" />
            Administrator Privileges Required
          </DialogTitle>
          <DialogDescription>
            To apply Roblox optimizations, we need to modify system registry entries.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Web browsers cannot directly modify system settings for security reasons.
              You have two options to proceed:
            </AlertDescription>
          </Alert>
          
          <div className="space-y-3">
            <div className="p-4 border rounded-lg bg-blue-50 dark:bg-blue-950">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Option 1: Download AutoHotkey Script (Recommended)
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Download a standalone script that you can run with administrator privileges. 
                This script contains all {optimizationCount} selected optimizations.
              </p>
            </div>
            
            <div className="p-4 border rounded-lg bg-amber-50 dark:bg-amber-950">
              <h4 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                Option 2: Manual Registry Editing
              </h4>
              <p className="text-sm text-amber-800 dark:text-amber-200">
                We'll show you the exact registry keys to modify manually using regedit.
                This requires advanced technical knowledge.
              </p>
            </div>
          </div>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button
            onClick={() => {
              onDownloadScript();
              onClose();
            }}
            className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Script
          </Button>
          <Button variant="outline" onClick={onClose} className="w-full sm:w-auto">
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};