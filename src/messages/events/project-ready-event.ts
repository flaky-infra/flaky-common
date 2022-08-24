import {mongoose} from '@typegoose/typegoose';
import {EventTypes} from './event-types';

export interface ProjectReadyEvent {
  eventType: EventTypes.ProjectReady;
  data: {
    testRunId: mongoose.Types.ObjectId;
    projectId: mongoose.Types.ObjectId;
    name: string;
    projectPath: string;
    version?: number;
    commitId: string;
    testMethodName: string;
    configurationFolder: string;
    moduleName: string;
  };
}
