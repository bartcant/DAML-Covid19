"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated from DA/Generics.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
var jtv = require("@mojotech/json-type-validation");
var daml = require("@daml/types");
exports.DecidedStrictness = {
    DecidedLazy: 'DecidedLazy',
    DecidedStrict: 'DecidedStrict',
    DecidedUnpack: 'DecidedUnpack',
    keys: ['DecidedLazy', 'DecidedStrict', 'DecidedUnpack',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.DecidedStrictness.DecidedLazy), jtv.constant(exports.DecidedStrictness.DecidedStrict), jtv.constant(exports.DecidedStrictness.DecidedUnpack)); },
};
exports.SourceStrictness = {
    NoSourceStrictness: 'NoSourceStrictness',
    SourceLazy: 'SourceLazy',
    SourceStrict: 'SourceStrict',
    keys: ['NoSourceStrictness', 'SourceLazy', 'SourceStrict',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.SourceStrictness.NoSourceStrictness), jtv.constant(exports.SourceStrictness.SourceLazy), jtv.constant(exports.SourceStrictness.SourceStrict)); },
};
exports.SourceUnpackedness = {
    NoSourceUnpackedness: 'NoSourceUnpackedness',
    SourceNoUnpack: 'SourceNoUnpack',
    SourceUnpack: 'SourceUnpack',
    keys: ['NoSourceUnpackedness', 'SourceNoUnpack', 'SourceUnpack',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.SourceUnpackedness.NoSourceUnpackedness), jtv.constant(exports.SourceUnpackedness.SourceNoUnpack), jtv.constant(exports.SourceUnpackedness.SourceUnpack)); },
};
exports.Associativity = {
    LeftAssociative: 'LeftAssociative',
    RightAssociative: 'RightAssociative',
    NotAssociative: 'NotAssociative',
    keys: ['LeftAssociative', 'RightAssociative', 'NotAssociative',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.Associativity.LeftAssociative), jtv.constant(exports.Associativity.RightAssociative), jtv.constant(exports.Associativity.NotAssociative)); },
};
exports.Infix0 = ({
    decoder: function () { return jtv.object({
        associativity: exports.Associativity.decoder(),
        fixity: daml.Int.decoder(),
    }); },
});
exports.Fixity = ({
    decoder: function () { return jtv.oneOf(jtv.object({ tag: jtv.constant('Prefix'), value: jtv.lazy(function () { return daml.Unit.decoder(); }) }), jtv.object({ tag: jtv.constant('Infix'), value: jtv.lazy(function () { return exports.Infix0.decoder(); }) })); },
});
exports.K1 = function (i_a2Fq, c_a2Fr, p_a2Fs) { return ({
    decoder: function () { return jtv.object({
        unK1: c_a2Fr.decoder(),
    }); },
}); };
exports.Par1 = function (p_a2Fv) { return ({
    decoder: function () { return jtv.object({
        unPar1: p_a2Fv.decoder(),
    }); },
}); };
exports.U1 = function (p_a2Fw) { return ({
    decoder: function () { return jtv.object({}); },
}); };
//# sourceMappingURL=module.js.map