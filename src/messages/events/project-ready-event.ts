import {EventTypes} from './event-types';

export interface ProjectReadyEvent {
  eventType: EventTypes.ProjectReady;
  data: {
    id: string;
    name: string;
    projectPath: string;
    version?: number;
    commitId: string;
    testMethodName: string;
    configurationFolder: string;
  };
}
