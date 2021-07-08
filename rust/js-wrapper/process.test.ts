import fs from 'fs';
import { ChildProcess } from 'child_process';
import { pausePromise } from '@cubejs-backend/shared';

import { CubeStoreHandler } from './process';
import { getBinaryPath } from './download';

class CubeStoreHandlerOpen extends CubeStoreHandler {
  public cubeStore: ChildProcess | null = null;
}

describe('CubeStoreHandler', () => {
  it('acquire with release', async () => {
    jest.setTimeout(60 * 1000);

    try {
      fs.unlinkSync(getBinaryPath());
    } catch (e) {
      console.log(e);
    }

    const handler = new CubeStoreHandlerOpen({
      stdout: (v) => {
        console.log(v.toString());
      },
      stderr: (v) => {
        console.log(v.toString());
      },
      onRestart: () => {
        throw new Error('Process should not restart, while we are testing it!');
      },
    });

    await handler.acquire();

    // It's enough, just to test that it starts.
    await pausePromise(5 * 1000);

    await handler.release(true);
  });

  it('auto restart', async () => {
    jest.setTimeout(60 * 1000);

    try {
      fs.unlinkSync(getBinaryPath());
    } catch (e) {
      console.log(e);
    }

    let restartCount = 0;

    const handler = new CubeStoreHandlerOpen({
      stdout: (v) => {
        console.log(v.toString());
      },
      stderr: (v) => {
        console.log(v.toString());
      },
      onRestart: () => {
        restartCount++;
      },
    });

    await handler.acquire();

    // It's enough, just to test that it starts.
    await pausePromise(5 * 1000);

    if (handler.cubeStore) {
      handler.cubeStore.kill();
    } else {
      throw new Error('Cube Store doesn`t start!');
    }

    await pausePromise(5 * 1000);

    expect(restartCount).toEqual(1);

    if (!handler.cubeStore) {
      throw new Error('Cube Store doesn`t restart!');
    }

    await handler.release(true);
  });
});
