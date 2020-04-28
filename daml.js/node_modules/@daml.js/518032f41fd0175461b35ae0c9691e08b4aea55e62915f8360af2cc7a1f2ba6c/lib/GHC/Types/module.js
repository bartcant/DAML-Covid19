"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated from GHC/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
var jtv = require("@mojotech/json-type-validation");
exports.Ordering = {
    LT: 'LT',
    EQ: 'EQ',
    GT: 'GT',
    keys: ['LT', 'EQ', 'GT',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.Ordering.LT), jtv.constant(exports.Ordering.EQ), jtv.constant(exports.Ordering.GT)); },
};
//# sourceMappingURL=module.js.map