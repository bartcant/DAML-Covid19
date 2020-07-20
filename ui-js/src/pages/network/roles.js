const roles = {
    Citizen: 'Citizen',
    HealthClinic: 'Health Clinic',
    StateHealthAgency: 'State Health Agency',
    InsuranceCompany: 'Insurance Company'
}

export default Object.keys(roles).map(value => ({
    value,
    label: roles[value]
}))
