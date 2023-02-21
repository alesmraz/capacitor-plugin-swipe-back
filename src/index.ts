import { registerPlugin } from '@capacitor/core';

import type { CapacitorSwipeBackPluginDef } from './definitions';

const CapacitorSwipeBackPlugin = registerPlugin<CapacitorSwipeBackPluginDef>(
  'CapacitorSwipeBackPlugin',
  {
    web: () => import('./web').then(m => new m.CapacitorSwipeBackWeb()),
  },
);

export * from './definitions';
export { CapacitorSwipeBackPlugin };
