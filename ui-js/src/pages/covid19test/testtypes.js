const testtypes = {
  Covid: "Covid Test",
  AntiBody: "Anti-Body Test"
}
export default Object.keys(testtypes).map(value => ({
  value,
  label: testtypes[value]
}))
