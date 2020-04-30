"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated from Main.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
var jtv = require("@mojotech/json-type-validation");
var daml = require("@daml/types");
var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require("@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7");
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require("@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662");
exports.InitiateCitizenRegistration = ({
    decoder: function () { return jtv.object({}); },
});
exports.CitizenRegistration = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenRegistration',
    keyDecoder: function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(daml.Party, daml.Text).decoder(); },
    decoder: function () { return jtv.object({
        citizen: daml.Party.decoder(),
        citizenSSID: daml.Text.decoder(),
        citizenVC: daml.Text.decoder(),
        citizenfirstname: daml.Text.decoder(),
        citizenlastname: daml.Text.decoder(),
        citizenSSN: daml.Text.decoder(),
        citizeninsuranceid: daml.Text.decoder(),
        citizeninsurance: daml.Party.decoder(),
        citizenlocationid: daml.Text.decoder(),
    }); },
    Archive: {
        template: function () { return exports.CitizenRegistration; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
    InitiateCitizenRegistration: {
        template: function () { return exports.CitizenRegistration; },
        choiceName: 'InitiateCitizenRegistration',
        argumentDecoder: exports.InitiateCitizenRegistration.decoder,
        resultDecoder: function () { return daml.ContractId(exports.CitizenRegistration).decoder(); },
    },
};
daml.registerTemplate(exports.CitizenRegistration);
exports.InitiateQuarantine = ({
    decoder: function () { return jtv.object({}); },
});
exports.Quarantine = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Quarantine',
    keyDecoder: function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(daml.Party, daml.Party, daml.Int).decoder(); },
    decoder: function () { return jtv.object({
        quarantineordernumber: daml.Int.decoder(),
        quarantinetype: exports.QuarantineType.decoder(),
        issuedate: daml.Date.decoder(),
        statehealth: daml.Party.decoder(),
        citizen: daml.Party.decoder(),
        enddate: daml.Date.decoder(),
        reason: daml.Text.decoder(),
        location: exports.Locationstate.decoder(),
        trackingID: daml.Text.decoder(),
    }); },
    InitiateQuarantine: {
        template: function () { return exports.Quarantine; },
        choiceName: 'InitiateQuarantine',
        argumentDecoder: exports.InitiateQuarantine.decoder,
        resultDecoder: function () { return daml.ContractId(exports.Quarantine).decoder(); },
    },
    Archive: {
        template: function () { return exports.Quarantine; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.Quarantine);
exports.QuarantineType = {
    Mandatory: 'Mandatory',
    Optional: 'Optional',
    keys: ['Mandatory', 'Optional',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.QuarantineType.Mandatory), jtv.constant(exports.QuarantineType.Optional)); },
};
exports.InitiateImmunityProof = ({
    decoder: function () { return jtv.object({}); },
});
exports.ImmunityProof = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:ImmunityProof',
    keyDecoder: function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(daml.Party, daml.Party, daml.Int).decoder(); },
    decoder: function () { return jtv.object({
        immunityproofid: daml.Int.decoder(),
        citizen: daml.Party.decoder(),
        covidtest19: daml.List(exports.Covid19Test).decoder(),
        statehealth: daml.Party.decoder(),
        proofvaliduntil: daml.Date.decoder(),
        location: exports.Locationstate.decoder(),
        qrcode: daml.Text.decoder(),
        revokestatus: daml.Text.decoder(),
        revokestatusdate: daml.Date.decoder(),
    }); },
    InitiateImmunityProof: {
        template: function () { return exports.ImmunityProof; },
        choiceName: 'InitiateImmunityProof',
        argumentDecoder: exports.InitiateImmunityProof.decoder,
        resultDecoder: function () { return daml.ContractId(exports.ImmunityProof).decoder(); },
    },
    Archive: {
        template: function () { return exports.ImmunityProof; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.ImmunityProof);
exports.Covid19Test = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Covid19Test',
    keyDecoder: function () { return jtv.constant(undefined); },
    decoder: function () { return jtv.object({
        covid19testdata: exports.Covid19TestData.decoder(),
        healthclinic: daml.Party.decoder(),
    }); },
    Archive: {
        template: function () { return exports.Covid19Test; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.Covid19Test);
exports.Covid19TestAppointment = ({
    decoder: function () { return jtv.object({
        covid19testdata: exports.Covid19TestData.decoder(),
    }); },
});
exports.TestAppointment = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:TestAppointment',
    keyDecoder: function () { return jtv.constant(undefined); },
    decoder: function () { return jtv.object({
        healthclinic: daml.Party.decoder(),
        citizen: daml.Party.decoder(),
        appointmentdate: daml.Date.decoder(),
    }); },
    Covid19TestAppointment: {
        template: function () { return exports.TestAppointment; },
        choiceName: 'Covid19TestAppointment',
        argumentDecoder: exports.Covid19TestAppointment.decoder,
        resultDecoder: function () { return daml.ContractId(exports.Covid19Test).decoder(); },
    },
    Archive: {
        template: function () { return exports.TestAppointment; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.TestAppointment);
exports.Covid19TestData = ({
    decoder: function () { return jtv.object({
        testdate: daml.Date.decoder(),
        healthclinic: daml.Party.decoder(),
        citizen: daml.Party.decoder(),
        testtype: daml.Text.decoder(),
        testnumber: daml.Int.decoder(),
        testresult: exports.Testresult.decoder(),
        locationstate: exports.Locationstate.decoder(),
        testupdatedata: daml.Date.decoder(),
    }); },
});
exports.ConfirmTestAppointment = ({
    decoder: function () { return jtv.object({
        appointmentdate: daml.Date.decoder(),
    }); },
});
exports.TestRequest = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:TestRequest',
    keyDecoder: function () { return jtv.constant(undefined); },
    decoder: function () { return jtv.object({
        healthclinic: daml.Party.decoder(),
        citizen: daml.Party.decoder(),
    }); },
    ConfirmTestAppointment: {
        template: function () { return exports.TestRequest; },
        choiceName: 'ConfirmTestAppointment',
        argumentDecoder: exports.ConfirmTestAppointment.decoder,
        resultDecoder: function () { return daml.ContractId(exports.TestAppointment).decoder(); },
    },
    Archive: {
        template: function () { return exports.TestRequest; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.TestRequest);
exports.RequestTest = ({
    decoder: function () { return jtv.object({
        healthclinic: daml.Party.decoder(),
    }); },
});
exports.CitizenRole = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenRole',
    keyDecoder: function () { return jtv.constant(undefined); },
    decoder: function () { return jtv.object({
        operator: daml.Party.decoder(),
        citizen: daml.Party.decoder(),
    }); },
    RequestTest: {
        template: function () { return exports.CitizenRole; },
        choiceName: 'RequestTest',
        argumentDecoder: exports.RequestTest.decoder,
        resultDecoder: function () { return daml.ContractId(exports.TestRequest).decoder(); },
    },
    Archive: {
        template: function () { return exports.CitizenRole; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.CitizenRole);
exports.AcceptCitizenInvitation = ({
    decoder: function () { return jtv.object({}); },
});
exports.CitizenInvitation = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenInvitation',
    keyDecoder: function () { return jtv.constant(undefined); },
    decoder: function () { return jtv.object({
        operator: daml.Party.decoder(),
        citizen: daml.Party.decoder(),
    }); },
    AcceptCitizenInvitation: {
        template: function () { return exports.CitizenInvitation; },
        choiceName: 'AcceptCitizenInvitation',
        argumentDecoder: exports.AcceptCitizenInvitation.decoder,
        resultDecoder: function () { return daml.ContractId(exports.CitizenRole).decoder(); },
    },
    Archive: {
        template: function () { return exports.CitizenInvitation; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.CitizenInvitation);
exports.HealthClinicRole = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:HealthClinicRole',
    keyDecoder: function () { return jtv.constant(undefined); },
    decoder: function () { return jtv.object({
        operator: daml.Party.decoder(),
        healthClinic: daml.Party.decoder(),
    }); },
    Archive: {
        template: function () { return exports.HealthClinicRole; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.HealthClinicRole);
exports.AcceptInvitation = ({
    decoder: function () { return jtv.object({}); },
});
exports.HealthClinicInvitation = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:HealthClinicInvitation',
    keyDecoder: function () { return jtv.constant(undefined); },
    decoder: function () { return jtv.object({
        operator: daml.Party.decoder(),
        healthClinic: daml.Party.decoder(),
    }); },
    AcceptInvitation: {
        template: function () { return exports.HealthClinicInvitation; },
        choiceName: 'AcceptInvitation',
        argumentDecoder: exports.AcceptInvitation.decoder,
        resultDecoder: function () { return daml.ContractId(exports.HealthClinicRole).decoder(); },
    },
    Archive: {
        template: function () { return exports.HealthClinicInvitation; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.HealthClinicInvitation);
exports.InviteCitizen = ({
    decoder: function () { return jtv.object({
        citizen: daml.Party.decoder(),
    }); },
});
exports.InviteHealthClinic = ({
    decoder: function () { return jtv.object({
        healthClinic: daml.Party.decoder(),
    }); },
});
exports.Network = {
    templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Network',
    keyDecoder: function () { return jtv.constant(undefined); },
    decoder: function () { return jtv.object({
        operator: daml.Party.decoder(),
    }); },
    InviteHealthClinic: {
        template: function () { return exports.Network; },
        choiceName: 'InviteHealthClinic',
        argumentDecoder: exports.InviteHealthClinic.decoder,
        resultDecoder: function () { return daml.ContractId(exports.HealthClinicInvitation).decoder(); },
    },
    InviteCitizen: {
        template: function () { return exports.Network; },
        choiceName: 'InviteCitizen',
        argumentDecoder: exports.InviteCitizen.decoder,
        resultDecoder: function () { return daml.ContractId(exports.CitizenInvitation).decoder(); },
    },
    Archive: {
        template: function () { return exports.Network; },
        choiceName: 'Archive',
        argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
        resultDecoder: function () { return daml.Unit.decoder(); },
    },
};
daml.registerTemplate(exports.Network);
exports.Testresult = {
    Positive: 'Positive',
    Negative: 'Negative',
    Pending: 'Pending',
    keys: ['Positive', 'Negative', 'Pending',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.Testresult.Positive), jtv.constant(exports.Testresult.Negative), jtv.constant(exports.Testresult.Pending)); },
};
exports.Locationstate = {
    NC: 'NC',
    SC: 'SC',
    GA: 'GA',
    FL: 'FL',
    keys: ['NC', 'SC', 'GA', 'FL',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.Locationstate.NC), jtv.constant(exports.Locationstate.SC), jtv.constant(exports.Locationstate.GA), jtv.constant(exports.Locationstate.FL)); },
};
//# sourceMappingURL=module.js.map