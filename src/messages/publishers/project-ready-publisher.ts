import {EventTypes} from '../events/event-types';
import {ProjectReadyEvent} from '../events/project-ready-event';
import {Publisher} from './base-publisher';

export class ProjectReadyPublisher extends Publisher<ProjectReadyEvent> {
  eventType: EventTypes.ProjectReady = EventTypes.ProjectReady;
  routingKey = this.eventType;
}
