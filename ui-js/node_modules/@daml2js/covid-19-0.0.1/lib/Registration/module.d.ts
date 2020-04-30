import * as daml from '@daml/types';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';
export declare type Register = {
    newRegistrationCid: CitizenKey;
    newRegistrationData: CitizenInfo;
};
export declare const Register: daml.Serializable<Register>;
export declare type CitizenRegistration = {
    registrationCid: CitizenKey;
    registrationData: CitizenInfo;
};
export declare const CitizenRegistration: daml.Template<CitizenRegistration, CitizenRegistration.Key, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Registration:CitizenRegistration'> & {
    Archive: daml.Choice<CitizenRegistration, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, CitizenRegistration.Key>;
    Register: daml.Choice<CitizenRegistration, Register, daml.ContractId<CitizenRegistration>, CitizenRegistration.Key>;
};
export declare namespace CitizenRegistration {
    type Key = CitizenKey;
}
export declare type CitizenKey = {
    citizen: daml.Party;
    id: string;
};
export declare const CitizenKey: daml.Serializable<CitizenKey>;
export declare type CitizenInfo = {
    citizendetail1: string;
    citizendetail2: string;
    citizendetail3: string;
};
export declare const CitizenInfo: daml.Serializable<CitizenInfo>;
