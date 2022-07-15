import { ISubscription } from './Subscription';

export interface IUser {
  uid: string;
  subscriptions: ISubscription[];
}
