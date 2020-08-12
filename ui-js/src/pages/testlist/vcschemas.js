const vcschemas = {
  IMVC: 'Immunity_Proof',
  ABVC: 'Ant-Body-Proof',
  VACVC: 'Covid19-Vaccine',

}
export default Object.keys(vcschemas).map(value => ({
  value,
  label: vcschemas[value]
}))
