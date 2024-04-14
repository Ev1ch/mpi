import type {
  MonitoringEventContext,
  MonitoringEventKeys,
  MonitoringEventKeysMap,
} from '@compyto/monitoring';

import type Print from './Print';

/**
 * The interface which represents the logger,
 * providing the ability to log events, errors, warnings
 * and info messages. Based on {@link logging/src.Print | print}.
 */
export default interface Logger {
  event<TEvent extends MonitoringEventKeys>(
    event: TEvent,
    context: MonitoringEventContext,
    ...args: MonitoringEventKeysMap[TEvent]
  ): void;

  error: Print;
  info: Print;
  warn: Print;
}
