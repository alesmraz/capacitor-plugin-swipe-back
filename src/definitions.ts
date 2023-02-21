export interface CapacitorSwipeBackPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
