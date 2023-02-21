
let rows = input.split("\n")
let sectionCount = rows.shift()
let sections = []

let swapped = []

let min, max

for (let i = 0; i < sectionCount; i++) {
    if(sectionCount > rows.length) break;
    const row = rows[i];

    const [id, salt, temp] = row.split(" ")
    let section = { id: id, salt: salt, temp: temp }

    const score = computeScore(section)

    section.score = score
    section.index = i



    sections.push(section)

};

while (sections.length > 1) {

    let numberArr = sections.map(section => section.score)

    let min = numberArr.reduce((a, b) => Math.min(a, b))
    let max = numberArr.reduce((a, b) => Math.max(a, b))
    let minIndex = sections.findIndex(section => section.score == min)
    let swap1 = sections[minIndex]
    sections.splice(minIndex, 1)

    let maxIndex = sections.findIndex(section => section.score == max)
    let swap2 = sections[maxIndex]
    sections.splice(maxIndex, 1)




    swapped.push([swap1, swap2])
    swapped.push([swap2, swap1])
    



}
swapped.push(...sections.map(section => [section, undefined]))

swapped.sort((a, b) => a[0].id - b[0].id)

swapped.forEach(element => {
    if (element[1] != undefined)
        console.log("Sekce " + element[0].id + " se prohodila se sekcí " + element[1].id + ".")
    else
        console.log("Sekce " + element[0].id + " zůstala na své pozici.")
});



function computeScore(section) {

    let score = 0
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


    return new Number(score)

}

