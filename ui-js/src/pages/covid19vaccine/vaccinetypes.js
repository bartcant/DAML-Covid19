const vaccinetypes = {
  TypeA: "Vacine Moderna",
  TypeB: "Vaccine Pfyzer"
}
export default Object.keys(vaccinetypes).map(value => ({
  value,
  label: vaccinetypes[value]
}))
