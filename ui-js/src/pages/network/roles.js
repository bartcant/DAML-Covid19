const roles = {
    Citizen: 'Citizen',
    HealthClinic: 'HealthClinic',
    StateHealthAgency: 'State Health Agency',
    InsuranceCompany: 'Insurance Company'
}

export default Object.keys(roles).map(value => ({
    value,
    label: roles[value]
}))
