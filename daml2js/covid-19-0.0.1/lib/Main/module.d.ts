import * as daml from '@daml/types';
import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';
export declare type InitiateCitizenRegistration = {};
export declare const InitiateCitizenRegistration: daml.Serializable<InitiateCitizenRegistration>;
export declare type CitizenRegistration = {
    citizen: daml.Party;
    citizenSSID: string;
    citizenVC: string;
    citizenfirstname: string;
    citizenlastname: string;
    citizenSSN: string;
    citizeninsuranceid: string;
    citizeninsurance: daml.Party;
    citizenlocationid: string;
};
export declare const CitizenRegistration: daml.Template<CitizenRegistration, CitizenRegistration.Key, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenRegistration'> & {
    Archive: daml.Choice<CitizenRegistration, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, CitizenRegistration.Key>;
    InitiateCitizenRegistration: daml.Choice<CitizenRegistration, InitiateCitizenRegistration, daml.ContractId<CitizenRegistration>, CitizenRegistration.Key>;
};
export declare namespace CitizenRegistration {
    type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<daml.Party, string>;
}
export declare type InitiateQuarantine = {};
export declare const InitiateQuarantine: daml.Serializable<InitiateQuarantine>;
export declare type Quarantine = {
    quarantineordernumber: daml.Int;
    quarantinetype: QuarantineType;
    issuedate: daml.Date;
    statehealth: daml.Party;
    citizen: daml.Party;
    enddate: daml.Date;
    reason: string;
    location: Locationstate;
    trackingID: string;
};
export declare const Quarantine: daml.Template<Quarantine, Quarantine.Key, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Quarantine'> & {
    InitiateQuarantine: daml.Choice<Quarantine, InitiateQuarantine, daml.ContractId<Quarantine>, Quarantine.Key>;
    Archive: daml.Choice<Quarantine, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, Quarantine.Key>;
};
export declare namespace Quarantine {
    type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<daml.Party, daml.Party, daml.Int>;
}
export declare type QuarantineType = 'Mandatory' | 'Optional';
export declare const QuarantineType: daml.Serializable<QuarantineType> & {
    readonly keys: QuarantineType[];
} & {
    readonly [e in QuarantineType]: e;
};
export declare type InitiateImmunityProof = {};
export declare const InitiateImmunityProof: daml.Serializable<InitiateImmunityProof>;
export declare type ImmunityProof = {
    immunityproofid: daml.Int;
    citizen: daml.Party;
    covidtest19: Covid19Test[];
    statehealth: daml.Party;
    proofvaliduntil: daml.Date;
    location: Locationstate;
    qrcode: string;
    revokestatus: string;
    revokestatusdate: daml.Date;
};
export declare const ImmunityProof: daml.Template<ImmunityProof, ImmunityProof.Key, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:ImmunityProof'> & {
    InitiateImmunityProof: daml.Choice<ImmunityProof, InitiateImmunityProof, daml.ContractId<ImmunityProof>, ImmunityProof.Key>;
    Archive: daml.Choice<ImmunityProof, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, ImmunityProof.Key>;
};
export declare namespace ImmunityProof {
    type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<daml.Party, daml.Party, daml.Int>;
}
export declare type Covid19Test = {
    Covid19testdata: Covid19TestData;
    healthclinic: daml.Party;
};
export declare const Covid19Test: daml.Template<Covid19Test, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Covid19Test'> & {
    Archive: daml.Choice<Covid19Test, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};
export declare type Covid19TestAppointment = {
    Covid19testdata: Covid19TestData;
};
export declare const Covid19TestAppointment: daml.Serializable<Covid19TestAppointment>;
export declare type TestAppointment = {
    healthclinic: daml.Party;
    citizen: daml.Party;
    appointmentdate: daml.Date;
};
export declare const TestAppointment: daml.Template<TestAppointment, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:TestAppointment'> & {
    Covid19TestAppointment: daml.Choice<TestAppointment, Covid19TestAppointment, daml.ContractId<Covid19Test>, undefined>;
    Archive: daml.Choice<TestAppointment, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};
export declare type Covid19TestData = {
    testdate: daml.Date;
    healthclinic: daml.Party;
    citizen: daml.Party;
    testtype: string;
    testnumber: daml.Int;
    testresult: Testresult;
    locationstate: Locationstate;
    testupdatedata: daml.Date;
};
export declare const Covid19TestData: daml.Serializable<Covid19TestData>;
export declare type ConfirmTestAppointment = {
    appointmentdate: daml.Date;
};
export declare const ConfirmTestAppointment: daml.Serializable<ConfirmTestAppointment>;
export declare type TestRequest = {
    healthclinic: daml.Party;
    citizen: daml.Party;
};
export declare const TestRequest: daml.Template<TestRequest, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:TestRequest'> & {
    ConfirmTestAppointment: daml.Choice<TestRequest, ConfirmTestAppointment, daml.ContractId<TestAppointment>, undefined>;
    Archive: daml.Choice<TestRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};
export declare type RequestTest = {
    healthclinic: daml.Party;
};
export declare const RequestTest: daml.Serializable<RequestTest>;
export declare type CitizenRole = {
    operator: daml.Party;
    citizen: daml.Party;
};
export declare const CitizenRole: daml.Template<CitizenRole, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenRole'> & {
    RequestTest: daml.Choice<CitizenRole, RequestTest, daml.ContractId<TestRequest>, undefined>;
    Archive: daml.Choice<CitizenRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};
export declare type AcceptCitizenInvitation = {};
export declare const AcceptCitizenInvitation: daml.Serializable<AcceptCitizenInvitation>;
export declare type CitizenInvitation = {
    operator: daml.Party;
    citizen: daml.Party;
};
export declare const CitizenInvitation: daml.Template<CitizenInvitation, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:CitizenInvitation'> & {
    AcceptCitizenInvitation: daml.Choice<CitizenInvitation, AcceptCitizenInvitation, daml.ContractId<CitizenRole>, undefined>;
    Archive: daml.Choice<CitizenInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};
export declare type HealthClinicRole = {
    operator: daml.Party;
    healthClinic: daml.Party;
};
export declare const HealthClinicRole: daml.Template<HealthClinicRole, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:HealthClinicRole'> & {
    Archive: daml.Choice<HealthClinicRole, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};
export declare type AcceptInvitation = {};
export declare const AcceptInvitation: daml.Serializable<AcceptInvitation>;
export declare type HealthClinicInvitation = {
    operator: daml.Party;
    healthClinic: daml.Party;
};
export declare const HealthClinicInvitation: daml.Template<HealthClinicInvitation, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:HealthClinicInvitation'> & {
    AcceptInvitation: daml.Choice<HealthClinicInvitation, AcceptInvitation, daml.ContractId<HealthClinicRole>, undefined>;
    Archive: daml.Choice<HealthClinicInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};
export declare type InviteCitizen = {
    citizen: daml.Party;
};
export declare const InviteCitizen: daml.Serializable<InviteCitizen>;
export declare type InviteHealthClinic = {
    healthClinic: daml.Party;
};
export declare const InviteHealthClinic: daml.Serializable<InviteHealthClinic>;
export declare type Network = {
    operator: daml.Party;
};
export declare const Network: daml.Template<Network, undefined, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Main:Network'> & {
    InviteHealthClinic: daml.Choice<Network, InviteHealthClinic, daml.ContractId<HealthClinicInvitation>, undefined>;
    InviteCitizen: daml.Choice<Network, InviteCitizen, daml.ContractId<CitizenInvitation>, undefined>;
    Archive: daml.Choice<Network, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};
export declare type Testresult = 'Positive' | 'Negative' | 'Pending';
export declare const Testresult: daml.Serializable<Testresult> & {
    readonly keys: Testresult[];
} & {
    readonly [e in Testresult]: e;
};
export declare type Locationstate = 'NC' | 'SC' | 'GA' | 'FL';
export declare const Locationstate: daml.Serializable<Locationstate> & {
    readonly keys: Locationstate[];
} & {
    readonly [e in Locationstate]: e;
};
