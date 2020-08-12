const vaccinetypes = {
  Moderna: "Vacine Moderna",
  Pfyzer: "Vaccine Pfyzer"
}
export default Object.keys(vaccinetypes).map(value => ({
  value,
  label: vaccinetypes[value]
}))
