import * as daml from '@daml/types';
export declare type DecidedStrictness = 'DecidedLazy' | 'DecidedStrict' | 'DecidedUnpack';
export declare const DecidedStrictness: daml.Serializable<DecidedStrictness> & {
    readonly keys: DecidedStrictness[];
} & {
    readonly [e in DecidedStrictness]: e;
};
export declare type SourceStrictness = 'NoSourceStrictness' | 'SourceLazy' | 'SourceStrict';
export declare const SourceStrictness: daml.Serializable<SourceStrictness> & {
    readonly keys: SourceStrictness[];
} & {
    readonly [e in SourceStrictness]: e;
};
export declare type SourceUnpackedness = 'NoSourceUnpackedness' | 'SourceNoUnpack' | 'SourceUnpack';
export declare const SourceUnpackedness: daml.Serializable<SourceUnpackedness> & {
    readonly keys: SourceUnpackedness[];
} & {
    readonly [e in SourceUnpackedness]: e;
};
export declare type Associativity = 'LeftAssociative' | 'RightAssociative' | 'NotAssociative';
export declare const Associativity: daml.Serializable<Associativity> & {
    readonly keys: Associativity[];
} & {
    readonly [e in Associativity]: e;
};
export declare type Infix0 = {
    associativity: Associativity;
    fixity: daml.Int;
};
export declare const Infix0: daml.Serializable<Infix0>;
export declare type Fixity = {
    tag: 'Prefix';
    value: {};
} | {
    tag: 'Infix';
    value: Infix0;
};
export declare const Fixity: daml.Serializable<Fixity> & {};
export declare type K1<i_a2Fq, c_a2Fr, p_a2Fs> = {
    unK1: c_a2Fr;
};
export declare const K1: <i_a2Fq, c_a2Fr, p_a2Fs>(i_a2Fq: daml.Serializable<i_a2Fq>, c_a2Fr: daml.Serializable<c_a2Fr>, p_a2Fs: daml.Serializable<p_a2Fs>) => daml.Serializable<K1<i_a2Fq, c_a2Fr, p_a2Fs>>;
export declare type Par1<p_a2Fv> = {
    unPar1: p_a2Fv;
};
export declare const Par1: <p_a2Fv>(p_a2Fv: daml.Serializable<p_a2Fv>) => daml.Serializable<Par1<p_a2Fv>>;
export declare type U1<p_a2Fw> = {};
export declare const U1: <p_a2Fw>(p_a2Fw: daml.Serializable<p_a2Fw>) => daml.Serializable<U1<p_a2Fw>>;
