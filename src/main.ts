import { runTaskForever } from '@/runTaskForever';
import { setupUI } from '@/setupUI';
import { setupTaskRegistry } from '@/tasks';
import { name, version } from 'package.json';

((): void => {
  console.log(`${name}: ${version}`);
  images.requestScreenCapture(false);

  launch('com.nintendo.zaga');

  device.keepScreenOn(10000);

  setupTaskRegistry();
  setupUI();
  // tslint:disable-next-line: no-floating-promises
  runTaskForever();
})();
