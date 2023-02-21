import { registerPlugin } from '@capacitor/core';

import type { CapacitorSwipeBackPlugin } from './definitions';

const CapacitorSwipeBack = registerPlugin<CapacitorSwipeBackPlugin>(
  'CapacitorSwipeBack',
  {
    web: () => import('./web').then(m => new m.CapacitorSwipeBackWeb()),
  },
);

export * from './definitions';
export { CapacitorSwipeBack };
