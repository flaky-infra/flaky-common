import {EventTypes} from '../events/event-types';
import {ProjectNewRequestEvent} from '../events/project-new-request-event';
import {Publisher} from './base-publisher';

export class ProjectNewRequestPublisher extends Publisher<ProjectNewRequestEvent> {
  eventType: EventTypes.ProjectRequest = EventTypes.ProjectRequest;
  routingKey = 'project.new_request';
}
