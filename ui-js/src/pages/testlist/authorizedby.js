const authorizedby = {
    StateHealth: 'NC Health',
    FederalHealth: 'CDC-DHS',
    HealthClinic: 'Local Health Clinic',

}
export default Object.keys(authorizedby).map(value => ({
    value,
    label: authorizedby[value]
}))
