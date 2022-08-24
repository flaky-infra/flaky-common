import {
  getModelForClass,
  modelOptions,
  mongoose,
  prop,
  Severity,
} from '@typegoose/typegoose';
import {TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';

export class TestExecutionResult {
  @prop()
  public stacktrace?: string;
  @prop()
  public classname?: string;
  @prop()
  public displayName?: string;
  @prop()
  public name?: string;
  @prop()
  public message?: string;
}

@modelOptions({options: {allowMixed: Severity.ALLOW}})
export class TestFailures {
  @prop({type: () => TestExecutionResult, default: []})
  public testCases?: TestExecutionResult[];
  @prop({required: true})
  public duration!: string;
}

export const TestFailuresModel = getModelForClass(TestFailures);

@modelOptions({options: {allowMixed: Severity.ALLOW}})
export class ScenarioExecutionResult extends TimeStamps {
  @prop({required: true})
  public scenarioName!: string;
  @prop({required: true})
  public scenarioConfiguration!: string;
  @prop({required: true})
  public numberOfRuns!: number;
  @prop({required: true})
  public executionWithFailure!: number;
  @prop({required: true})
  public failureRate!: number;
  @prop({required: true})
  public duration!: string;
  @prop()
  public executionLog?: string;
  @prop({default: []})
  public testExecutionsResults?: mongoose.Types.ObjectId[];
}

export const ScenarioExecutionResultModel = getModelForClass(
  ScenarioExecutionResult
);

@modelOptions({options: {allowMixed: Severity.ALLOW}})
export class TestRun extends TimeStamps {
  @prop({required: true})
  public testMethodName!: string;
  @prop({required: true})
  public configFolderPath!: string;
  @prop()
  public isFlaky?: boolean;
  @prop({type: () => ScenarioExecutionResult})
  public rootCause?: ScenarioExecutionResult;
  @prop({default: []})
  public scenarioExecutionsResult?: mongoose.Types.ObjectId[];
}

export const TestRunModel = getModelForClass(TestRun);
