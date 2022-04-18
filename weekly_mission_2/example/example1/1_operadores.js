const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "CDMX",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

console.log('Ejercicios 1 -- 3')
explorers.forEach(explorer => console.log(explorer.name))

explorers.forEach(explorer => console.log(explorer.name + " " + explorer.stack))

explorers.forEach(explorer => console.log(explorer.name + " " + explorer.city))

console.log('Ejercicios 4 -- 6')
explorers.map(item => console.log(item.name))
explorers.map(item => console.log(item.name  + ' ' + item.stack))
explorers.map(item => console.log(item.name + ' ' + item.city))

console.log('Ejercicios 7 -- 8')
// explorers.filter(item => item.rate > 10).map(item => console.log(item.name))
const explorerWithJs = explorers.filter(item => item.stack.includes('js'))
console.log(explorerWithJs.map(item => item.name))

console.log('Ejercicios 9')
const all_exercises = explorers.reduce((acc, item) => acc + item.exercises_completed, 0)
console.log(all_exercises)

console.log('Ejercicios 10')

// Every
const all_exercises_finished = explorers.every(item => item.stack.length > 0)
console.log(all_exercises_finished)

console.log('Ejercicios 11 - 12')

// Find
const explorer_with_js = explorers.find(item => item.stack.includes('js'))
console.log(explorer_with_js.name + ' have js')

const explorerCity = explorers.find(item => item.city === 'CDMX')
console.log(explorerCity.name + ' is in CDMX')


console.log('Ejercicios 13')

// FindIndex
const explorer_with_js_index = explorers.findIndex(item => item.stack.includes('js'))
console.log(explorer_with_js_index + ' in this position have js')

console.log('Ejercicios 14')
// Some
const some_exercises_finished = explorers.some(item => item.stack.length > 0)
console.log(some_exercises_finished)

console.log('Ejercicios 15')
// Sort
const sort_by_rate = explorers.sort((a, b) => a.rate - b.rate)
// console.log(sort_by_rate)
console.log(sort_by_rate.map(item => item.name))


const sort_by_exercises = explorers.sort((a, b) => b.exercises_completed - a.exercises_completed)
console.log(sort_by_exercises.map(item => item.name))