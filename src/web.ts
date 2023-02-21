import { WebPlugin } from '@capacitor/core';

import type { CapacitorSwipeBackPlugin } from './definitions';

export class CapacitorSwipeBackWeb
  extends WebPlugin
  implements CapacitorSwipeBackPlugin
{
  async enable(): Promise<{ status: 'enable' }> {
    return new Promise(resolve => {
      resolve({ status: 'enable' });
    });
  }
  async disable(): Promise<{ status: 'disable' }> {
    return new Promise(resolve => {
      resolve({ status: 'disable' });
    });
  }
}
