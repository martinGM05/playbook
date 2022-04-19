// Example with excersice 1 Facebook Object to Class

class User { 
    constructor(name, email, bio, age, gender){
        this.name = name;
        this.email = email;
        this.bio = bio;
        this.age = age;
        this.gender = age;
    }
    getNameAndBirthday(){
        return `${this.name} has like email: ${this.email}`
    }
    getGeneralInfo(){
        return `${this.name} is ${this.age} years old `
    }
}

class Post {
    constructor(title, description, link, reactions, listComments){
        this.title = title;
        this.description = description;
        this.link = link;
        this.reactions = reactions;
        this.listComments = listComments;
    }
    getPostInfo(){
        return `${this.title} has ${this.description}`
    }
    getReactions(){
        return `${this.title} has ${this.reactions}`
    }
}

class Biography extends User {
    constructor(name, email, bio, age, gender, idBiography) {
        super(name, email, bio, age, gender)
        this.idBiography = idBiography
    }
    getUserInfo(){
        let userInfo = this.getGeneralInfo()
        return `${userInfo} with Biography number ${this.idBiography}`
    }
}

console.log('Clase User')
const user = new User('Martin Gonzalez', 'mtn.gm05@gmail.com', 'Software Engineer', 21, 'male')
console.log(`Nombre del usuario : ${user.name}`)
console.log(user.getGeneralInfo())

console.log('Clase Post')
const post = new Post('React JS', 'React is a library of JavaScript', 'https://facebook.com/ReactJs', {
    like: 300, love: 200, haha: 100, wow: 50, sad: 10, angry: 5
}, [
    {
        idUser: "000DAW056D1AW",
        comment: "ReactJs es una biblioteca de JavaScript",
    },
    {
        idUser: "000DAW056D1AB",
        comment: "Angular es una biblioteca de JavaScript",
    }
])
console.log(post.title)
console.log(post.getPostInfo())


console.log('Clase Biography')
const biography = new Biography('Martin Gonzalez', 'mtn.gm05@gmail.com', 'Software Engineer', 21, 'male', 11626)
console.log(`Nombre: ${biography.name} Email: ${biography.email}`);
console.log(biography.getUserInfo())