import * as daml from '@daml/types';
export declare type DayOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
export declare const DayOfWeek: daml.Serializable<DayOfWeek> & {
    readonly keys: DayOfWeek[];
} & {
    readonly [e in DayOfWeek]: e;
};
export declare type Month = 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
export declare const Month: daml.Serializable<Month> & {
    readonly keys: Month[];
} & {
    readonly [e in Month]: e;
};
