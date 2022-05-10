let pronouns = ['the','our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger','racoon'];
let extens = ['.com','.net','.cl'];

for (let pronoun of pronouns) {
    for (let adj of adjs) {
        for (let noun of nouns) {
            for(let exten of extens ){           
            console.log(pronoun + adj + noun + exten)
        }
        }
    }
}
