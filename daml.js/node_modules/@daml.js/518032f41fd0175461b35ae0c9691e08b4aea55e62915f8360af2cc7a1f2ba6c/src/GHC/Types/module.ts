// Generated from GHC/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as daml from '@daml/types';

export type Ordering = 
  | 'LT'
  | 'EQ'
  | 'GT'
export const Ordering: daml.Serializable<Ordering> & { readonly keys: Ordering[] } & { readonly [e in Ordering]: e } = {
  LT: 'LT',
  EQ: 'EQ',
  GT: 'GT',
  keys: ['LT','EQ','GT',],
  decoder: () => jtv.oneOf<Ordering>(
      jtv.constant(Ordering.LT),
      jtv.constant(Ordering.EQ),
      jtv.constant(Ordering.GT),
  ),
};
