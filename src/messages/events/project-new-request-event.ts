import {EventTypes} from './event-types';

export interface ProjectNewRequestEvent {
  eventType: EventTypes.ProjectNewRequest;
  data: {
    id: string;
    projectPath: string;
    name: string;
    version?: number;
    commitId: string;
    testMethodName: string;
    configurationFolder: string;
    moduleName: string;
  };
}
