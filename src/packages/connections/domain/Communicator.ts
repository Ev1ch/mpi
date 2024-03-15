import type { Group, Process } from '@/core/domain';

import type Abort from './Abort';

/**
 * Core network abstraction which allows to
 * communicate between {@link packages/core/domain/Process.Process | processes}, give methods for
 * this communication and provides information about
 * {@link packages/core/domain/Process.Process | processes} which are present in the network.
 */
export default interface Communicator {
  isMaster: boolean;
  process: Process;
  group: Group;
  start(): Promise<void>;
  send(data: unknown, processes: Process[], abort?: Abort): Promise<void>;
  receive(abort?: Abort): Promise<unknown>;
  broadcast(data: unknown, abort?: Abort): Promise<void>;
}
