const idtypes = {
    SSN: 'Social Security Number',
    DID: 'Decentralized Identifier (DID)',
    DRLicence: 'Driver License',
    Passport: 'US Passport'
}

export default Object.keys(idtypes).map(value => ({
    value,
    label: idtypes[value]
}))
