const vcschemas = {
  IMVC: 'Immunity_Proof',
  BusinessVC : 'Business_Card'
}
export default Object.keys(vcschemas).map(value => ({
  value, 
  label: vcschemas[value]
}))
