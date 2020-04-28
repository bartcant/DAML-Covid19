"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated from Registration.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
var jtv = require("@mojotech/json-type-validation");
var daml = require("@daml/types");
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require("@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662");
exports.Register = ({
    decoder: function () { return jtv.object({
        newRegistrationCid: exports.CitizenKey.decoder(),
        newRegistrationData: exports.CitizenInfo.decoder(),
    }); },
});
exports.CitizenRegistration = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Registration:CitizenRegistration',
    keyDecoder: function () { return exports.CitizenKey.decoder(); },
    decoder: function () { return jtv.object({
        registrationCid: exports.CitizenKey.decoder(),
        registrationData: exports.CitizenInfo.decoder(),
    }); },
    Archive: {
        template: function () { return exports.CitizenRegistration; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
    Register: {
        template: function () { return exports.CitizenRegistration; },
        choiceName: 'Register',
        argumentDecoder: exports.Register.decoder,
        resultDecoder: function () { return daml.ContractId(exports.CitizenRegistration).decoder(); },
    },
};
daml.registerTemplate(exports.CitizenRegistration);
exports.CitizenKey = ({
    decoder: function () { return jtv.object({
        citizen: daml.Party.decoder(),
        id: daml.Text.decoder(),
    }); },
});
exports.CitizenInfo = ({
    decoder: function () { return jtv.object({
        citizendetail1: daml.Text.decoder(),
        citizendetail2: daml.Text.decoder(),
        citizendetail3: daml.Text.decoder(),
    }); },
});
//# sourceMappingURL=module.js.map