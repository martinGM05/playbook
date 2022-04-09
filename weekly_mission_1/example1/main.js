// 1. Create an object with properties

let myCar = new Object(); // Create an object
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;

console.log(myCar) // Printing Object

// 2. Declaration of an object with locale and public variables

const myModule = (() => {

    // Local context variables
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1, 2, 3, 4]
    const baz = "Soy un valor que va a ser expuesto"

    // Variable for save the locale variables
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
        publicBaz: baz
    }

    // Exposure of locale variables
    return exported
})()

console.log(myModule)