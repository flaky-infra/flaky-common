import {mongoose} from '@typegoose/typegoose';
import {TestFailures} from '../../models/test-run';
import {EventTypes} from './event-types';

export interface ProjectTestEndEvent {
  eventType: EventTypes.ProjectTestEnd;
  data: {
    testFailures: TestFailures[];
    isLastConfig: boolean;
    testRunId: mongoose.Types.ObjectId;
    projectId: mongoose.Types.ObjectId;
    configFile: string;
    scenarioConfiguration: string;
    testMethodName: string;
    executionLog: string;
    numberOfScenarios: number;
    duration: string;
  };
}
