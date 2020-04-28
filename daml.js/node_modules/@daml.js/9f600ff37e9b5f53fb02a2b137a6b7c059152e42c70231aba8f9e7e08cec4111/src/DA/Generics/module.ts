// Generated from DA/Generics.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as daml from '@daml/types';

export type DecidedStrictness = 
  | 'DecidedLazy'
  | 'DecidedStrict'
  | 'DecidedUnpack'
export const DecidedStrictness: daml.Serializable<DecidedStrictness> & { readonly keys: DecidedStrictness[] } & { readonly [e in DecidedStrictness]: e } = {
  DecidedLazy: 'DecidedLazy',
  DecidedStrict: 'DecidedStrict',
  DecidedUnpack: 'DecidedUnpack',
  keys: ['DecidedLazy','DecidedStrict','DecidedUnpack',],
  decoder: () => jtv.oneOf<DecidedStrictness>(
      jtv.constant(DecidedStrictness.DecidedLazy),
      jtv.constant(DecidedStrictness.DecidedStrict),
      jtv.constant(DecidedStrictness.DecidedUnpack),
  ),
};

export type SourceStrictness = 
  | 'NoSourceStrictness'
  | 'SourceLazy'
  | 'SourceStrict'
export const SourceStrictness: daml.Serializable<SourceStrictness> & { readonly keys: SourceStrictness[] } & { readonly [e in SourceStrictness]: e } = {
  NoSourceStrictness: 'NoSourceStrictness',
  SourceLazy: 'SourceLazy',
  SourceStrict: 'SourceStrict',
  keys: ['NoSourceStrictness','SourceLazy','SourceStrict',],
  decoder: () => jtv.oneOf<SourceStrictness>(
      jtv.constant(SourceStrictness.NoSourceStrictness),
      jtv.constant(SourceStrictness.SourceLazy),
      jtv.constant(SourceStrictness.SourceStrict),
  ),
};

export type SourceUnpackedness = 
  | 'NoSourceUnpackedness'
  | 'SourceNoUnpack'
  | 'SourceUnpack'
export const SourceUnpackedness: daml.Serializable<SourceUnpackedness> & { readonly keys: SourceUnpackedness[] } & { readonly [e in SourceUnpackedness]: e } = {
  NoSourceUnpackedness: 'NoSourceUnpackedness',
  SourceNoUnpack: 'SourceNoUnpack',
  SourceUnpack: 'SourceUnpack',
  keys: ['NoSourceUnpackedness','SourceNoUnpack','SourceUnpack',],
  decoder: () => jtv.oneOf<SourceUnpackedness>(
      jtv.constant(SourceUnpackedness.NoSourceUnpackedness),
      jtv.constant(SourceUnpackedness.SourceNoUnpack),
      jtv.constant(SourceUnpackedness.SourceUnpack),
  ),
};

export type Associativity = 
  | 'LeftAssociative'
  | 'RightAssociative'
  | 'NotAssociative'
export const Associativity: daml.Serializable<Associativity> & { readonly keys: Associativity[] } & { readonly [e in Associativity]: e } = {
  LeftAssociative: 'LeftAssociative',
  RightAssociative: 'RightAssociative',
  NotAssociative: 'NotAssociative',
  keys: ['LeftAssociative','RightAssociative','NotAssociative',],
  decoder: () => jtv.oneOf<Associativity>(
      jtv.constant(Associativity.LeftAssociative),
      jtv.constant(Associativity.RightAssociative),
      jtv.constant(Associativity.NotAssociative),
  ),
};

export type Infix0 = {
  associativity: Associativity;
  fixity: daml.Int;
}
export const Infix0: daml.Serializable<Infix0> = ({
  decoder: () => jtv.object({
    associativity: Associativity.decoder(),
    fixity: daml.Int.decoder(),
  }),
})

export type Fixity = 
  |  { tag: 'Prefix'; value: {} }
  |  { tag: 'Infix'; value: Infix0 }
export const Fixity:
  daml.Serializable<Fixity> & {
  } = ({
  decoder: () => jtv.oneOf<Fixity>(
    jtv.object({tag: jtv.constant('Prefix'), value: jtv.lazy(() => daml.Unit.decoder())}),
    jtv.object({tag: jtv.constant('Infix'), value: jtv.lazy(() => Infix0.decoder())}),
  ),
});

export type K1<i_a2Fq, c_a2Fr, p_a2Fs> = {
  unK1: c_a2Fr;
}
export const K1 = <i_a2Fq, c_a2Fr, p_a2Fs>(i_a2Fq: daml.Serializable<i_a2Fq>, c_a2Fr: daml.Serializable<c_a2Fr>, p_a2Fs: daml.Serializable<p_a2Fs>): daml.Serializable<K1<i_a2Fq, c_a2Fr, p_a2Fs>> => ({
  decoder: () => jtv.object({
    unK1: c_a2Fr.decoder(),
  }),
})

export type Par1<p_a2Fv> = {
  unPar1: p_a2Fv;
}
export const Par1 = <p_a2Fv>(p_a2Fv: daml.Serializable<p_a2Fv>): daml.Serializable<Par1<p_a2Fv>> => ({
  decoder: () => jtv.object({
    unPar1: p_a2Fv.decoder(),
  }),
})

export type U1<p_a2Fw> = {
}
export const U1 = <p_a2Fw>(p_a2Fw: daml.Serializable<p_a2Fw>): daml.Serializable<U1<p_a2Fw>> => ({
  decoder: () => jtv.object({
  }),
})
