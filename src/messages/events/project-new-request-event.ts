import {mongoose} from '@typegoose/typegoose';
import {EventTypes} from './event-types';

export interface ProjectNewRequestEvent {
  eventType: EventTypes.ProjectNewRequest;
  data: {
    testRunId: mongoose.Types.ObjectId;
    projectId: mongoose.Types.ObjectId;
    projectPath: string;
    name: string;
    version?: number;
    commitId: string;
    testMethodName: string;
    configurationFolder: string;
    moduleName: string;
  };
}
