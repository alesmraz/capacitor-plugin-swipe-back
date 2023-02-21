import { WebPlugin } from '@capacitor/core';

import type { CapacitorSwipeBackPlugin } from './definitions';

export class CapacitorSwipeBackWeb
  extends WebPlugin
  implements CapacitorSwipeBackPlugin
{
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
