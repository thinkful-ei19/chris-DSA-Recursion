/*
Write a recursive function that prints the following organization chart.
Your output should be as shown below with proper indentation to show the hierarchy.

Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes
*/
// const Kelley = {Kelly: ['Eric', 'Ana', 'Wes']}, Moissinac ={Moissinac: ['Amy', 'Chuck', 'Vinni']}, Hernandez = {Hernandez: ['Rowi', 'Inga', 'Morgan']}, Goler = {Goler: ['Eddie', 'Julie', 'Annie']}
// const Swain = {Swain: ['Blanch', 'Tom', 'Joe']}, VanDyck = {VanDyck: ['Sabrina', 'Michelle', 'Josh']}
// const Zhao = {Zhao: ['Richie', 'Sofia', 'Jen']}, Bosworth = {Bosworth: ['Steve', 'Kyle', 'Andra']}

// const Sandberg = {Sandberg: [Goler, Hernandez, Moissinac, Kelley]}
// const Schrage = {Schrage: [VanDyck, Swain]}
// const Schroepfer = {Schroepfer: [Bosworth, Zhao]}

// const Zuckerberg = [Schroepfer, Schrage, Sandberg]

// function organizationChart(top, current = top[0]) {

    

// }

// organizationChart(Zuckerberg)

const list = 
`Zuckerberg
    Schroepfer
        Bosworth
            Steve
            Kyle
            Andra
        Zhao
            Richie
            Sofia
            Jen
    Schrage
        VanDyck
            Sabrina
            Michelle
            Josh
        Swain
            Blanch
            Tom
            Joe
    Sandberg
        Goler
            Eddie
            Julie
            Annie
       Hernandez
            Rowi
            Inga
            Morgan
       Moissinac
            Amy
            Chuck
            Vinni
       Kelley
            Eric
            Ana
            Wes`

function organizationChart(string, index = 0) {
    const arr = string.split('\n')

    if (index < arr.length-1) {
        console.log(arr[index])
        index ++
        organizationChart(string, index)
    } else {
        return;
    }

}

organizationChart(list);

function organizationChartAlt(string, index = 0) {
    const arr = string.split('\n')

    for (let i=0; i<arr.length; i++) {
        console.log(arr[i])
    }

    return;
}