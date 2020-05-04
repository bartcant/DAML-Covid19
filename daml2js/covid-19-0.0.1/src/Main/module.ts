// Generated from Main.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as daml from '@daml/types';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export type InitiateCitizenRegistration = {
}
export const InitiateCitizenRegistration: daml.Serializable<InitiateCitizenRegistration> = ({
  decoder: () => jtv.object({
  }),
})

export type CitizenRegistration = {
  citizen: daml.Party;
  citizenSSID: string;
  citizenVC: string;
  citizenfirstname: string;
  citizenlastname: string;
  citizenSSN: string;
  citizeninsuranceid: string;
  citizeninsurance: daml.Party;
  citizenlocationid: string;
}
export const CitizenRegistration: daml.Template<CitizenRegistration, CitizenRegistration.Key, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenRegistration'> & {
  Archive: daml.Choice<CitizenRegistration, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, CitizenRegistration.Key>;
  InitiateCitizenRegistration: daml.Choice<CitizenRegistration, InitiateCitizenRegistration, daml.ContractId<CitizenRegistration>, CitizenRegistration.Key>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenRegistration',
  keyDecoder: () => pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(daml.Party, daml.Text).decoder(),
  decoder: () => jtv.object({
    citizen: daml.Party.decoder(),
    citizenSSID: daml.Text.decoder(),
    citizenVC: daml.Text.decoder(),
    citizenfirstname: daml.Text.decoder(),
    citizenlastname: daml.Text.decoder(),
    citizenSSN: daml.Text.decoder(),
    citizeninsuranceid: daml.Text.decoder(),
    citizeninsurance: daml.Party.decoder(),
    citizenlocationid: daml.Text.decoder(),
  }),
  Archive: {
    template: () => CitizenRegistration,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
  InitiateCitizenRegistration: {
    template: () => CitizenRegistration,
    choiceName: 'InitiateCitizenRegistration',
    argumentDecoder: InitiateCitizenRegistration.decoder,
    resultDecoder: () => daml.ContractId(CitizenRegistration).decoder(),
  },
};
export namespace CitizenRegistration {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<daml.Party, string>
}
daml.registerTemplate(CitizenRegistration);

export type InitiateQuarantine = {
}
export const InitiateQuarantine: daml.Serializable<InitiateQuarantine> = ({
  decoder: () => jtv.object({
  }),
})

export type Quarantine = {
  quarantineordernumber: daml.Int;
  quarantinetype: QuarantineType;
  issuedate: daml.Date;
  statehealth: daml.Party;
  citizen: daml.Party;
  enddate: daml.Date;
  reason: string;
  location: Locationstate;
  trackingID: string;
}
export const Quarantine: daml.Template<Quarantine, Quarantine.Key, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Quarantine'> & {
  InitiateQuarantine: daml.Choice<Quarantine, InitiateQuarantine, daml.ContractId<Quarantine>, Quarantine.Key>;
  Archive: daml.Choice<Quarantine, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Quarantine.Key>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Quarantine',
  keyDecoder: () => pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(daml.Party, daml.Party, daml.Int).decoder(),
  decoder: () => jtv.object({
    quarantineordernumber: daml.Int.decoder(),
    quarantinetype: QuarantineType.decoder(),
    issuedate: daml.Date.decoder(),
    statehealth: daml.Party.decoder(),
    citizen: daml.Party.decoder(),
    enddate: daml.Date.decoder(),
    reason: daml.Text.decoder(),
    location: Locationstate.decoder(),
    trackingID: daml.Text.decoder(),
  }),
  InitiateQuarantine: {
    template: () => Quarantine,
    choiceName: 'InitiateQuarantine',
    argumentDecoder: InitiateQuarantine.decoder,
    resultDecoder: () => daml.ContractId(Quarantine).decoder(),
  },
  Archive: {
    template: () => Quarantine,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
export namespace Quarantine {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<daml.Party, daml.Party, daml.Int>
}
daml.registerTemplate(Quarantine);

export type QuarantineType = 
  | 'Mandatory'
  | 'Optional'
export const QuarantineType: daml.Serializable<QuarantineType> & { readonly keys: QuarantineType[] } & { readonly [e in QuarantineType]: e } = {
  Mandatory: 'Mandatory',
  Optional: 'Optional',
  keys: ['Mandatory','Optional',],
  decoder: () => jtv.oneOf<QuarantineType>(
      jtv.constant(QuarantineType.Mandatory),
      jtv.constant(QuarantineType.Optional),
  ),
};

export type InitiateImmunityProof = {
}
export const InitiateImmunityProof: daml.Serializable<InitiateImmunityProof> = ({
  decoder: () => jtv.object({
  }),
})

export type ImmunityProof = {
  immunityproofid: daml.Int;
  citizen: daml.Party;
  covidtest19: Covid19Test[];
  statehealth: daml.Party;
  proofvaliduntil: daml.Date;
  location: Locationstate;
  qrcode: string;
  revokestatus: string;
  revokestatusdate: daml.Date;
}
export const ImmunityProof: daml.Template<ImmunityProof, ImmunityProof.Key, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:ImmunityProof'> & {
  InitiateImmunityProof: daml.Choice<ImmunityProof, InitiateImmunityProof, daml.ContractId<ImmunityProof>, ImmunityProof.Key>;
  Archive: daml.Choice<ImmunityProof, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ImmunityProof.Key>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:ImmunityProof',
  keyDecoder: () => pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(daml.Party, daml.Party, daml.Int).decoder(),
  decoder: () => jtv.object({
    immunityproofid: daml.Int.decoder(),
    citizen: daml.Party.decoder(),
    covidtest19: daml.List(Covid19Test).decoder(),
    statehealth: daml.Party.decoder(),
    proofvaliduntil: daml.Date.decoder(),
    location: Locationstate.decoder(),
    qrcode: daml.Text.decoder(),
    revokestatus: daml.Text.decoder(),
    revokestatusdate: daml.Date.decoder(),
  }),
  InitiateImmunityProof: {
    template: () => ImmunityProof,
    choiceName: 'InitiateImmunityProof',
    argumentDecoder: InitiateImmunityProof.decoder,
    resultDecoder: () => daml.ContractId(ImmunityProof).decoder(),
  },
  Archive: {
    template: () => ImmunityProof,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
export namespace ImmunityProof {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<daml.Party, daml.Party, daml.Int>
}
daml.registerTemplate(ImmunityProof);

export type Covid19Test = {
  Covid19testdata: Covid19TestData;
  healthclinic: daml.Party;
}
export const Covid19Test: daml.Template<Covid19Test, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Covid19Test'> & {
  Archive: daml.Choice<Covid19Test, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Covid19Test',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    Covid19testdata: Covid19TestData.decoder(),
    healthclinic: daml.Party.decoder(),
  }),
  Archive: {
    template: () => Covid19Test,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(Covid19Test);

export type Covid19TestAppointment = {
  Covid19testdata: Covid19TestData;
}
export const Covid19TestAppointment: daml.Serializable<Covid19TestAppointment> = ({
  decoder: () => jtv.object({
    Covid19testdata: Covid19TestData.decoder(),
  }),
})

export type TestAppointment = {
  healthclinic: daml.Party;
  citizen: daml.Party;
  appointmentdate: daml.Date;
}
export const TestAppointment: daml.Template<TestAppointment, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:TestAppointment'> & {
  Covid19TestAppointment: daml.Choice<TestAppointment, Covid19TestAppointment, daml.ContractId<Covid19Test>, undefined>;
  Archive: daml.Choice<TestAppointment, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:TestAppointment',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    healthclinic: daml.Party.decoder(),
    citizen: daml.Party.decoder(),
    appointmentdate: daml.Date.decoder(),
  }),
  Covid19TestAppointment: {
    template: () => TestAppointment,
    choiceName: 'Covid19TestAppointment',
    argumentDecoder: Covid19TestAppointment.decoder,
    resultDecoder: () => daml.ContractId(Covid19Test).decoder(),
  },
  Archive: {
    template: () => TestAppointment,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(TestAppointment);

export type Covid19TestData = {
  testdate: daml.Date;
  healthclinic: daml.Party;
  citizen: daml.Party;
  testtype: string;
  testnumber: daml.Int;
  testresult: Testresult;
  locationstate: Locationstate;
  testupdatedata: daml.Date;
}
export const Covid19TestData: daml.Serializable<Covid19TestData> = ({
  decoder: () => jtv.object({
    testdate: daml.Date.decoder(),
    healthclinic: daml.Party.decoder(),
    citizen: daml.Party.decoder(),
    testtype: daml.Text.decoder(),
    testnumber: daml.Int.decoder(),
    testresult: Testresult.decoder(),
    locationstate: Locationstate.decoder(),
    testupdatedata: daml.Date.decoder(),
  }),
})

export type ConfirmTestAppointment = {
  appointmentdate: daml.Date;
}
export const ConfirmTestAppointment: daml.Serializable<ConfirmTestAppointment> = ({
  decoder: () => jtv.object({
    appointmentdate: daml.Date.decoder(),
  }),
})

export type TestRequest = {
  healthclinic: daml.Party;
  citizen: daml.Party;
}
export const TestRequest: daml.Template<TestRequest, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:TestRequest'> & {
  ConfirmTestAppointment: daml.Choice<TestRequest, ConfirmTestAppointment, daml.ContractId<TestAppointment>, undefined>;
  Archive: daml.Choice<TestRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:TestRequest',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    healthclinic: daml.Party.decoder(),
    citizen: daml.Party.decoder(),
  }),
  ConfirmTestAppointment: {
    template: () => TestRequest,
    choiceName: 'ConfirmTestAppointment',
    argumentDecoder: ConfirmTestAppointment.decoder,
    resultDecoder: () => daml.ContractId(TestAppointment).decoder(),
  },
  Archive: {
    template: () => TestRequest,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(TestRequest);

export type RequestTest = {
  healthclinic: daml.Party;
}
export const RequestTest: daml.Serializable<RequestTest> = ({
  decoder: () => jtv.object({
    healthclinic: daml.Party.decoder(),
  }),
})

export type CitizenRole = {
  operator: daml.Party;
  citizen: daml.Party;
}
export const CitizenRole: daml.Template<CitizenRole, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenRole'> & {
  RequestTest: daml.Choice<CitizenRole, RequestTest, daml.ContractId<TestRequest>, undefined>;
  Archive: daml.Choice<CitizenRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenRole',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    operator: daml.Party.decoder(),
    citizen: daml.Party.decoder(),
  }),
  RequestTest: {
    template: () => CitizenRole,
    choiceName: 'RequestTest',
    argumentDecoder: RequestTest.decoder,
    resultDecoder: () => daml.ContractId(TestRequest).decoder(),
  },
  Archive: {
    template: () => CitizenRole,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(CitizenRole);

export type AcceptCitizenInvitation = {
}
export const AcceptCitizenInvitation: daml.Serializable<AcceptCitizenInvitation> = ({
  decoder: () => jtv.object({
  }),
})

export type CitizenInvitation = {
  operator: daml.Party;
  citizen: daml.Party;
}
export const CitizenInvitation: daml.Template<CitizenInvitation, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenInvitation'> & {
  AcceptCitizenInvitation: daml.Choice<CitizenInvitation, AcceptCitizenInvitation, daml.ContractId<CitizenRole>, undefined>;
  Archive: daml.Choice<CitizenInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenInvitation',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    operator: daml.Party.decoder(),
    citizen: daml.Party.decoder(),
  }),
  AcceptCitizenInvitation: {
    template: () => CitizenInvitation,
    choiceName: 'AcceptCitizenInvitation',
    argumentDecoder: AcceptCitizenInvitation.decoder,
    resultDecoder: () => daml.ContractId(CitizenRole).decoder(),
  },
  Archive: {
    template: () => CitizenInvitation,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(CitizenInvitation);

export type HealthClinicRole = {
  operator: daml.Party;
  healthClinic: daml.Party;
}
export const HealthClinicRole: daml.Template<HealthClinicRole, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:HealthClinicRole'> & {
  Archive: daml.Choice<HealthClinicRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:HealthClinicRole',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    operator: daml.Party.decoder(),
    healthClinic: daml.Party.decoder(),
  }),
  Archive: {
    template: () => HealthClinicRole,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(HealthClinicRole);

export type AcceptInvitation = {
}
export const AcceptInvitation: daml.Serializable<AcceptInvitation> = ({
  decoder: () => jtv.object({
  }),
})

export type HealthClinicInvitation = {
  operator: daml.Party;
  healthClinic: daml.Party;
}
export const HealthClinicInvitation: daml.Template<HealthClinicInvitation, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:HealthClinicInvitation'> & {
  AcceptInvitation: daml.Choice<HealthClinicInvitation, AcceptInvitation, daml.ContractId<HealthClinicRole>, undefined>;
  Archive: daml.Choice<HealthClinicInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:HealthClinicInvitation',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    operator: daml.Party.decoder(),
    healthClinic: daml.Party.decoder(),
  }),
  AcceptInvitation: {
    template: () => HealthClinicInvitation,
    choiceName: 'AcceptInvitation',
    argumentDecoder: AcceptInvitation.decoder,
    resultDecoder: () => daml.ContractId(HealthClinicRole).decoder(),
  },
  Archive: {
    template: () => HealthClinicInvitation,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(HealthClinicInvitation);

export type InviteCitizen = {
  citizen: daml.Party;
}
export const InviteCitizen: daml.Serializable<InviteCitizen> = ({
  decoder: () => jtv.object({
    citizen: daml.Party.decoder(),
  }),
})

export type InviteHealthClinic = {
  healthClinic: daml.Party;
}
export const InviteHealthClinic: daml.Serializable<InviteHealthClinic> = ({
  decoder: () => jtv.object({
    healthClinic: daml.Party.decoder(),
  }),
})

export type Network = {
  operator: daml.Party;
}
export const Network: daml.Template<Network, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Network'> & {
  InviteHealthClinic: daml.Choice<Network, InviteHealthClinic, daml.ContractId<HealthClinicInvitation>, undefined>;
  InviteCitizen: daml.Choice<Network, InviteCitizen, daml.ContractId<CitizenInvitation>, undefined>;
  Archive: daml.Choice<Network, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Network',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    operator: daml.Party.decoder(),
  }),
  InviteHealthClinic: {
    template: () => Network,
    choiceName: 'InviteHealthClinic',
    argumentDecoder: InviteHealthClinic.decoder,
    resultDecoder: () => daml.ContractId(HealthClinicInvitation).decoder(),
  },
  InviteCitizen: {
    template: () => Network,
    choiceName: 'InviteCitizen',
    argumentDecoder: InviteCitizen.decoder,
    resultDecoder: () => daml.ContractId(CitizenInvitation).decoder(),
  },
  Archive: {
    template: () => Network,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(Network);

export type Testresult = 
  | 'Positive'
  | 'Negative'
  | 'Pending'
export const Testresult: daml.Serializable<Testresult> & { readonly keys: Testresult[] } & { readonly [e in Testresult]: e } = {
  Positive: 'Positive',
  Negative: 'Negative',
  Pending: 'Pending',
  keys: ['Positive','Negative','Pending',],
  decoder: () => jtv.oneOf<Testresult>(
      jtv.constant(Testresult.Positive),
      jtv.constant(Testresult.Negative),
      jtv.constant(Testresult.Pending),
  ),
};

export type Locationstate = 
  | 'NC'
  | 'SC'
  | 'GA'
  | 'FL'
export const Locationstate: daml.Serializable<Locationstate> & { readonly keys: Locationstate[] } & { readonly [e in Locationstate]: e } = {
  NC: 'NC',
  SC: 'SC',
  GA: 'GA',
  FL: 'FL',
  keys: ['NC','SC','GA','FL',],
  decoder: () => jtv.oneOf<Locationstate>(
      jtv.constant(Locationstate.NC),
      jtv.constant(Locationstate.SC),
      jtv.constant(Locationstate.GA),
      jtv.constant(Locationstate.FL),
  ),
};
