let input = `54
479003452 77.52 35.2
56235871 76.77 -0.35
465795108 21.65 26.16
511679874 3.88 -3.56
97811468 90.41 25.08
221853800 83.91 83.1
668579788 87.36 24.18
943061649 4.99 47.69
66296746 24.93 90.73
361715158 7.43 101.03
192230344 4.12 53.58
249222840 82.93 84.53
542294727 77.39 50.75
292211778 23.95 50.44
757222234 75.37 75.03
894710724 66.04 23.15
347006987 98.25 46.6
877316641 12.84 104.04
797187335 89.64 -18.4
595525086 54.11 -18.88
567767871 13.42 79.09
222292029 60.48 74.35
857417218 55.42 -6.83
922932444 80.33 85.02
776201820 87.28 89.01
782815315 15.27 51.44
538785836 98.6 -15.48
562390028 75.5 65.87
595941874 36.35 85.98
386990190 31.09 112.4
691828615 35.21 88.91
383086443 4.32 94.25
375862448 84.9 73.74
575204955 78.65 96.17
591940587 41.78 79.16
296754072 93.36 41.28
469780076 36.45 -3.9
365573544 35.33 68.93
972113968 34.56 98.16
892040538 93.86 110.1
722767788 97.6 48.55
433209887 17.58 46.12
612929796 55.72 21.33
922387024 98.94 40.07
75323405 95.11 41.84
862212703 7.03 25.81
267531875 21.83 -16.14
963877771 76.98 79.82
659267171 30.28 8.19
61662966 42.73 110.63
481412527 94.09 10
915822527 64.94 4.89
952516970 57.54 57.8
673488700 44.8 6.7`

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

    return b.id - a.id


})
sections.forEach(section => {

    swapped.push([section, sections[sections.length - 1]])
    console.log([section, sections[sections.length - 1]])
    sections.pop()


})
swapped.sort((a, b) => a[0].index - b[0].index)
console.log(swapped.map(element => element[0].id + " " + element[1].id).join("\n"))


// s
// while (sections.length > 1) {
//     console.log()
//     let numberArr = sections.map(section => section.score)

//     let min = numberArr.reduce((a, b) => Math.min(a, b))
//     let max = numberArr.reduce((a, b) => Math.max(a, b))
//     let minIndex = sections.findIndex(section => section.score == min)
//     let swap1 = sections[minIndex]
//     sections.splice(minIndex, 1)

//     let maxIndex = sections.findIndex(section => section.score == max)
//     let swap2 = sections[maxIndex]
//     sections.splice(maxIndex, 1)




//     swapped.push([swap1, swap2])
//     swapped.push([swap2, swap1])




// }
// swapped.push(...sections.map(section => [section, undefined]))

// swapped.sort((a, b) => a[0].id - b[0].id)

// swapped.forEach(element => {
//     if (element[1] != undefined) {
//         console.log("Sekce " + element[0].id + " se prohodila se sekcí " + element[1].id + ".")
//         console.log(element[0].score, element[1].score)
//     }
//     else
//         console.log("Sekce " + element[0].id + " zůstala na své pozici.")
// });



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

// function swap(arr, i, j) {

//     let swap1 = arr[i]
//     let swap2 = arr[j]
//     console.log("Sekce " + swap1.id + " se prohodila se sekcí " + swap2.id)
//     console.log("Sekce " + swap2.id + " se prohodila se sekcí " + swap1.id)


//     sections.forEach((section, index) => {

//         if (index != i && index != j) console.log("Sekce " + section.id + " zůstala na své pozici")

//     });
// }
