"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated from DA/Validation/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
var jtv = require("@mojotech/json-type-validation");
var pkge22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c = require("@daml.js/e22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c");
exports.Validation = function (errs, a) { return ({
    decoder: function () { return jtv.oneOf(jtv.object({ tag: jtv.constant('Errors'), value: jtv.lazy(function () { return pkge22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c.DA.NonEmpty.Types.NonEmpty(errs).decoder(); }) }), jtv.object({ tag: jtv.constant('Success'), value: jtv.lazy(function () { return a.decoder(); }) })); },
}); };
//# sourceMappingURL=module.js.map