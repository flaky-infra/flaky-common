import {
  getModelForClass,
  modelOptions,
  prop,
  Severity,
} from '@typegoose/typegoose';
import {TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';
import mongoose from 'mongoose';

@modelOptions({options: {allowMixed: Severity.ALLOW}})
export class Application extends TimeStamps {
  @prop({required: true})
  public name!: string;
  @prop({required: true})
  public projectPath!: string;
  @prop()
  public gitUrl?: string;
  @prop({required: true})
  public commitId!: string;
  @prop({required: true})
  public moduleName!: string;
  @prop()
  public version?: number;
  @prop()
  public logStdoutBuildpack?: string;
  @prop()
  public logStdoutWrapperImageBuild?: string;
  @prop()
  public logStdoutImagePush?: string;
  @prop()
  public logStderrBuildpack?: string;
  @prop()
  public logStderrWrapperImageBuild?: string;
  @prop()
  public logStderrImagePush?: string;
  @prop({default: []})
  public testRuns?: mongoose.Types.ObjectId[];
}

export const ApplicationModel = getModelForClass(Application);
