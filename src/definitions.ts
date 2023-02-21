export interface CapacitorSwipeBackPlugin {
  enable(): Promise<{ status: 'enable' }>;
  disable(): Promise<{ status: 'disable' }>;
}
