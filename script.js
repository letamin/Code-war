function myLanguages(r) {
    return Object.keys(r).filter(k => r[k] >= 60).sort((a, b) => r[b] - r[a])
}

console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }))