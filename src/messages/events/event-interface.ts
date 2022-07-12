import {EventTypes} from './event-types';

export interface Event {
  eventType: EventTypes;
  data: any;
}
