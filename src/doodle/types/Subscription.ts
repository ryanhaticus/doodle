import { IPlan } from './Plan';

export interface ISubscription {
  created: number;
  current_period_end: number;
  current_period_start: number;
  id: string;
  status: string;
  name: string;
  cancelled: boolean;
  plan: IPlan;
}
