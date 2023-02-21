export interface CapacitorSwipeBackPluginDef {
  enable(): Promise<{ status: 'enable' }>;
  disable(): Promise<{ status: 'disable' }>;
}
