const testresults = {
    Pending: "Pending",
    Positive: "Positive",
    Negative: "Negative"
}
export default Object.keys(testresults).map(value => ({
    value,
    label: testresults[value]
}))
