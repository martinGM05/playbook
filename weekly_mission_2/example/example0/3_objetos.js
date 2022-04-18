const myObjetc2 = {
    name: "Martin",
    age: 21,
    mission: "NodeJs",
    skills: ["NodeJs", "ReactJs", "Flutter"],
    blog: {
        title: "Blog de Martin",
        description: "Blog de Martin",
    },
    saludo: function () {
        console.log("Hola soy " + this.name + " y mi edad es " + this.age)
    }
}
console.log("Ejemplo 3: Crear un objeto con métodos")
myObjetc2.saludo()