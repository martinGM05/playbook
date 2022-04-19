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
        city: "Veracruz",
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

console.log('Ejercicio 1: Obtener los nombres')
explorers.forEach(explorer => console.log(explorer.name))

console.log('Ejercicio 2: Imprimir el stack de cada explorer')
explorers.forEach(explorer => console.log(explorer.name + ' - ' + explorer.stack))

console.log('Ejercicio 3: Crea una nueva lista con las listas de stacks de cada explorer')
const stackList = explorers.map(explorer => explorer.stack)
console.log(stackList)

console.log('Ejercicio 4: Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)')
const explorersWithJS = explorers.filter(explorer => explorer.stack.includes('js'))
console.log(explorersWithJS.map(explorer => explorer.name))

console.log('Ejercicio 5: Busca el primer explorer que sea de la CDMX, usa FIND')
const explorerCDM = explorers.find(explorer => explorer.city === 'CDMX')
console.log(explorerCDM.name);

console.log('Ejercicio 6: Obtén la suma de todos los exercises_completed, usa REDUCE')
const sumaExercise_Completed = explorers.reduce((acc, item) => acc + item.exercises_completed, 0)
console.log(sumaExercise_Completed)

console.log('Ejercicio 7: Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME')
const explorerValidateSome = explorers.some(item => item.missions.frontend.exercisesFinished === true)
console.log(explorerValidateSome)

console.log('Ejercicio 8: Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY')
const validateFinished = explorers.every(explorer => explorer.missions.onboarding.isFinished === true)
console.log(validateFinished)