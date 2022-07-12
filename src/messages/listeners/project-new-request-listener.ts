import {ConsumeMessage} from 'amqplib';
import {EventTypes} from '../events/event-types';
import {ProjectNewRequestEvent} from '../events/project-new-request-event';
import {Listener} from './base-listener';

export class ProjectNewRequestListener extends Listener<ProjectNewRequestEvent> {
  eventType: EventTypes.ProjectRequest = EventTypes.ProjectRequest;
  queueName = 'ciaociao';
  routingKey = 'project.new_request';
  async onMessage(data: ProjectNewRequestEvent['data'], msg: ConsumeMessage) {
    const {id, projectPath} = data;

    console.log(id, projectPath);
  }
}
