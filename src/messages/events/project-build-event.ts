import {EventTypes} from './event-types';

export interface ProjectBuildEvent {
  eventType: EventTypes.ProjectBuild;
  data: {
    id: string;
    projectPath: string;
    name: string;
    version?: number;
    commitId: string;
    testMethodName: string;
    configurationFolder: string;
  };
}
