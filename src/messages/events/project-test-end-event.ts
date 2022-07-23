import {EventTypes} from './event-types';

export interface TestFailures {
  testCases: TestCase[];
}

export interface TestCase {
  classname: string;
  displayName: string;
  message: string;
  name: string;
  stacktrace: string;
}

export interface ProjectTestEndEvent {
  eventType: EventTypes.ProjectTestEnd;
  data: {
    testFailures: TestFailures[];
  };
}
