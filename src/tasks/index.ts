import { farmRareItem } from '@/tasks/farmRareItem';
import { feedDragon } from '@/tasks/feedDragon';
import { repeatRaid } from '@/tasks/repeatRaid';
import { feedFourLeafClover } from '@/tasks/feedFourLeafClover';

export const taskRegistry: Record<
  string,
  (() => void | Promise<void>) | undefined
> = {};

export function setupTaskRegistry(): void {
  taskRegistry.重复战斗 = repeatRaid;
  taskRegistry.自动喂龙 = feedDragon;
  taskRegistry.喂四叶草 = feedFourLeafClover;
  taskRegistry.刷稀有 = farmRareItem;
}
