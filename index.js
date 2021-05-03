function findMatching(drivers ,string) {
return drivers.filter(s => s==string);
}

function fuzzyMatch(drivers ,string) {
return drivers.filter(s => s===string[0])
}
function matchName(drivers ,string) {
return drivers.filter(s => s.name===string)
}
