/*Running Javascript Programs with Node

'use strict';
const sentences = [
    {subject: 'Javascript', verb: 'is', object: 'great' },
    {subject: 'Elefants', verb: 'are', object: 'large' },
];

// object destructuring
function say({ subject, verb, object }) {
    //template strings
    console.log(`${subject} ${verb} ${object} `);
}

for(let s of sentences){
    say(s);
}*/

//Package Management: npm

'use strict';
const sentences = [
    {subject: 'Javascript', verb: 'is', object: 'great' },
    {subject: 'Elefants', verb: 'are', object: 'large' },
];

const verbs = _.pluck(sentences, 'verb')
for(let verb of verbs) {
    console.log(`found verb: ${verb}`);
}