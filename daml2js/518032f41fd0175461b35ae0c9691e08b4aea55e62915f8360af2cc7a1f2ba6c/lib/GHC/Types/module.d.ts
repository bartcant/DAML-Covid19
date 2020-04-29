import * as daml from '@daml/types';
export declare type Ordering = 'LT' | 'EQ' | 'GT';
export declare const Ordering: daml.Serializable<Ordering> & {
    readonly keys: Ordering[];
} & {
    readonly [e in Ordering]: e;
};
