let input = ""

let rows = input.split("\n")
let sections = []

let minId, maxId
rows.forEach((row, i) => {
    let [id, salt, temp] = row.split(" ")
    let section = { id: id, salt: salt, temp: temp }
    let score = computeScore(section)

    section.score = score

    if (i == 0) minId, maxId = section.id
    console.log(section)
    if (score > maxId) maxId = section.id
    else if (score < minId) minId = section.id

    sections.push(section)

});



function computeScore(section) {

    let score = 0
    let { salt, temp } = section

    if (salt >= 50)
        score += 0
    else if (salt > 10)
        score += 1 / (2 * salt)
    else if (salt > 2 && salt <= 10)
        score += 2 / (salt)
    else if (salt <= 2)
        score += 0

    if (temp >= 30)
        score += 0
    else if (temp > 26)
        score += 0.6 - 0.1 * (temp - 26)
    else if (temp > 22 && temp <= 26)
        score += 1
    else if (temp <= 22)
        score += 0.5 * (temp - 18) / 4
    else if (temp <= 18)
        score += 0


    return score

}

function swap(){


}
