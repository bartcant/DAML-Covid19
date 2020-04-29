// Generated from DA/Date/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as daml from '@daml/types';

export type DayOfWeek = 
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'
export const DayOfWeek: daml.Serializable<DayOfWeek> & { readonly keys: DayOfWeek[] } & { readonly [e in DayOfWeek]: e } = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
  keys: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday',],
  decoder: () => jtv.oneOf<DayOfWeek>(
      jtv.constant(DayOfWeek.Monday),
      jtv.constant(DayOfWeek.Tuesday),
      jtv.constant(DayOfWeek.Wednesday),
      jtv.constant(DayOfWeek.Thursday),
      jtv.constant(DayOfWeek.Friday),
      jtv.constant(DayOfWeek.Saturday),
      jtv.constant(DayOfWeek.Sunday),
  ),
};

export type Month = 
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec'
export const Month: daml.Serializable<Month> & { readonly keys: Month[] } & { readonly [e in Month]: e } = {
  Jan: 'Jan',
  Feb: 'Feb',
  Mar: 'Mar',
  Apr: 'Apr',
  May: 'May',
  Jun: 'Jun',
  Jul: 'Jul',
  Aug: 'Aug',
  Sep: 'Sep',
  Oct: 'Oct',
  Nov: 'Nov',
  Dec: 'Dec',
  keys: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',],
  decoder: () => jtv.oneOf<Month>(
      jtv.constant(Month.Jan),
      jtv.constant(Month.Feb),
      jtv.constant(Month.Mar),
      jtv.constant(Month.Apr),
      jtv.constant(Month.May),
      jtv.constant(Month.Jun),
      jtv.constant(Month.Jul),
      jtv.constant(Month.Aug),
      jtv.constant(Month.Sep),
      jtv.constant(Month.Oct),
      jtv.constant(Month.Nov),
      jtv.constant(Month.Dec),
  ),
};
