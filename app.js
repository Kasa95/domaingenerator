let pronoun = ["the","our"]
let adj = ["great","tremendous","spectacular"]
let noun = ["jogger","runner","person","leones"]
let dom = [".com",".es",".net"]
let websites = []


for (let i = 0; i < pronoun.length; i++) {
    for (let x = 0; x < adj.length; x++) {
        for (let y = 0; y < noun.length; y++) {
            for (let z = 0; z < dom.length; z++) {
                websites.push(pronoun[i]+adj[x]+noun[y]+dom[z])
            }
        }
    }
}

//comprobar si hay duplicados y que numero
let findDuplicates = websites => websites.filter((item, index) => websites.indexOf(item) != index)
if (findDuplicates(websites).length === 0) {
    console.log(websites)
    console.log("Congratulations, there are "+ websites.length +" different domains and no duplicates.")
}
else {
    console.log("Sorry, you have " + findDuplicates.length + " duplicate/s.")
}