

let rows = input.split("\n")
let sectionCount = rows.shift()
let sections = []

let swapped = []

let min, max

for (let i = 0; i < sectionCount; i++) {
    if (sectionCount > rows.length) break;
    const row = rows[i];

    const [id, salt, temp] = row.split(" ")
    let section = { id: id, salt: salt, temp: temp }

    const score = computeScore(section)

    section.score = score
    section.index = i



    sections.push(section)

};
sections.sort((a, b) => {


    let n = b.score - a.score
    if (n !== 0) return n

    return b.index - a.index


})
sections.forEach((section, i) => {
    if (sections.length - 1 - i != i) {
        swapped.push([section, sections[sections.length - 1 - i]])

    }
    else {
        swapped.push([section, undefined])
    }

})

swapped.sort((a, b) => a[0].id - b[0].id)
swapped.forEach(element => {

    if (element[1] != undefined) {
        console.log("Sekce " + element[0].id + " se prohodila se sekcí " + element[1].id + ".")
    }
    else
        console.log("Sekce " + element[0].id + " zůstala na své pozici.")

}
)







function computeScore(section) {

    let score = new Number(0)
    let { salt, temp } = section
    salt = Number(salt)
    temp = Number(temp)

    if (salt > 10 && salt < 50)
        score += 1 / (2 * salt)
    else if (salt > 2 && salt <= 10)
        score += 2 / (salt)



    if (temp > 26 && temp < 30)
        score += 0.6 - 0.1 * (temp - 26)
    else if (temp > 22 && temp <= 26)
        score += 1
    else if (temp <= 22 && temp > 18)
        score += 0.5 * (temp - 18) / 4


    return score

}


