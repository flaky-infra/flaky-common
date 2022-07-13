import {EventTypes} from './event-types';

export interface ProjectNewRequestEvent {
  eventType: EventTypes.ProjectRequest;
  data: {
    id: string;
    projectPath: string;
    name: string;
    version: number;
  };
}
