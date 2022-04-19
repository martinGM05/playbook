const repo = {
    name: "LaunchX",
    author: "martinGonzalez",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const Issue = {
    title: "PruebaIssue",
    repositoryNameAssociated: "LaunchX",
    status: "Closed",
    numberOfComments: 10,
    labels: ["bug", "feature"],
    author: "martinGonzalez",
    dateCreated: "2020-04-18",
    lastUpdated: "2020-04-18",
    getTitleAndAuthor: function() {
        return `This issue ${this.title} was created bt ${this.author}`
    },
    getGeneralInfo: function() {
        return `This issue ${this.title} is ${this.status} and was created on ${this.dateCreated}`
    }
}

console.log("Título del issue:" + Issue.title)
console.log("Estado del issue:" + Issue.getTitleAndAuthor())
console.log(Issue.getGeneralInfo())

const PullRequest = {
    title: "PruebaPullRequest",
    branchName: "master",
    dateCreated: "2020-04-18",
    status: "Closed",
    repositoryNameAssociated: "LaunchX",
    getStatus: function() {
        return `This pull request ${this.title} is ${this.status}`
    },
    getTitleAndAuthor: function() {
        return `This pull request ${this.title} was created bt ${this.author}`
    }
}

console.log("Título del pull request:" + PullRequest.title)
console.log("Estado del pull request:" + PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())

const Twitter = {
    user: {
        user: "Martin Gonzalez",
        username: "martinGonzalez",
        bio: "Software Engineer",
        age: 21,
    },
    trending_topic: {
        topic: "#ReactJs",
        tweets: 300,
        link: "https://twitter.com/ReactJs",
    },
    hashtag: {
        signal: "#",
        text: "ReactJs",
        group: "ReactJs",
    }
}

const Facebook = {
    user: {
        name: "Martin Gonzalez",
        email: "mtn.gm05@gmail.com",
        bio: "Software Engineer",
        age: 21,
        gender: 'male'
    },
    post: {
        title: "ReactJs",
        description: "ReactJs es una biblioteca de JavaScript",
        link: "https://facebook.com/ReactJs",
        reactions: {
            like: 300,
            love: 200,
            haha: 100,
            wow: 50,
            sad: 10,
            angry: 5,
        },
        listComments: [
            {
                idUser: "000DAW056D1AW",
                comment: "ReactJs es una biblioteca de JavaScript",
            },
            {
                idUser: "000DAW056D1AB",
                comment: "Angular es una biblioteca de JavaScript",
            }
        ],
    },
    biography: {
        user: {
            idUser: "000DAW056D1AW",
            name: "Martin Gonzalez",
            username: "martinGonzalez",
            bio: "Software Engineer",
            age: 21,
            friends: 200,
        }
    }
}

const uber = {
    profile: {
        name: "Martin Gonzalez",
        history: {
            rides: {
                total: 100,
            }
        }
    },
    travel: {
        rides: {
            total: 100,

        }
    }
}

export {
    Facebook,
    uber,
    Twitter
}