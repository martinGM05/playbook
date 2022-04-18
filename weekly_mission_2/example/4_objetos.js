const myObjetc2 = (Usuario) => {
    return {
        name: Usuario.name,
        age: Usuario.age,
        mission: Usuario.mission,
        skills: Usuario.skills,
        blog: {
            title: Usuario.name,
            description: Usuario.mission,
        },
        print: function () {
            console.log("Hola soy " + this.name + " y mi edad es " + this.age)
        }
    }
}

myObjetc2("Martin", 21, "NodeJs", ["NodeJs", "ReactJs", "Flutter"], {
    title: "Blog de Martin",
    description: "Blog de Martin",
})

console.log("Ejemplo 4: Crear un objeto con métodos")
console.log(myObjetc2.blog)