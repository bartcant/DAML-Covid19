// Generated from Registration.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as daml from '@daml/types';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export type Register = {
  newRegistrationCid: CitizenKey;
  newRegistrationData: CitizenInfo;
}
export const Register: daml.Serializable<Register> = ({
  decoder: () => jtv.object({
    newRegistrationCid: CitizenKey.decoder(),
    newRegistrationData: CitizenInfo.decoder(),
  }),
})

export type CitizenRegistration = {
  registrationCid: CitizenKey;
  registrationData: CitizenInfo;
}
export const CitizenRegistration: daml.Template<CitizenRegistration, CitizenRegistration.Key, 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Registration:CitizenRegistration'> & {
  Archive: daml.Choice<CitizenRegistration, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, CitizenRegistration.Key>;
  Register: daml.Choice<CitizenRegistration, Register, daml.ContractId<CitizenRegistration>, CitizenRegistration.Key>;
} = {
  templateId: 'ff65aa954b2720477198c267a0fa785f403d52fad5be2a9c917790033fa141dd:Registration:CitizenRegistration',
  keyDecoder: () => CitizenKey.decoder(),
  decoder: () => jtv.object({
    registrationCid: CitizenKey.decoder(),
    registrationData: CitizenInfo.decoder(),
  }),
  Archive: {
    template: () => CitizenRegistration,
    choiceName: 'Archive',
    argumentDecoder: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
  Register: {
    template: () => CitizenRegistration,
    choiceName: 'Register',
    argumentDecoder: Register.decoder,
    resultDecoder: () => daml.ContractId(CitizenRegistration).decoder(),
  },
};
export namespace CitizenRegistration {
  export type Key = CitizenKey
}
daml.registerTemplate(CitizenRegistration);

export type CitizenKey = {
  citizen: daml.Party;
  id: string;
}
export const CitizenKey: daml.Serializable<CitizenKey> = ({
  decoder: () => jtv.object({
    citizen: daml.Party.decoder(),
    id: daml.Text.decoder(),
  }),
})

export type CitizenInfo = {
  citizendetail1: string;
  citizendetail2: string;
  citizendetail3: string;
}
export const CitizenInfo: daml.Serializable<CitizenInfo> = ({
  decoder: () => jtv.object({
    citizendetail1: daml.Text.decoder(),
    citizendetail2: daml.Text.decoder(),
    citizendetail3: daml.Text.decoder(),
  }),
})
