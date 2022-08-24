import {getModelForClass, prop} from '@typegoose/typegoose';
import {TimeStamps} from '@typegoose/typegoose/lib/defaultClasses';

class User extends TimeStamps {
  @prop({required: true})
  public username!: string;
  @prop({required: true})
  public password!: string;
}

export const UserModel = getModelForClass(User);
