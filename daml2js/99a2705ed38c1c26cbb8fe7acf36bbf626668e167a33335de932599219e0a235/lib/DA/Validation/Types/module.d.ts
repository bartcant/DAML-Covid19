import * as daml from '@daml/types';
import * as pkge22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c from '@daml.js/e22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c';
export declare type Validation<errs, a> = {
    tag: 'Errors';
    value: pkge22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c.DA.NonEmpty.Types.NonEmpty<errs>;
} | {
    tag: 'Success';
    value: a;
};
export declare const Validation: <errs, a>(errs: daml.Serializable<errs>, a: daml.Serializable<a>) => daml.Serializable<Validation<errs, a>>;