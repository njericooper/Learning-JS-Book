const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map ();

userRoles.set(u1, 'User');
userRoles.set(u2, 'User');
userRoles.set(u3, 'Admin');

userRoles
    .set(u1, 'User')
    .set(u2, 'User')
    .set(u3, 'Admin');

const userRoles = new Map([
    [u1, 'User'],
    [u2, 'User'],
    [u3, 'Admin'],
]);

userRoles.get(u2);

//setting a key that had already been refined will replace its value

userRoles.get(u1);
userRoles.set(u1, 'Admin');

userRoles.size;

for(let u of userRoles.keys())
    console.log(u.name);
for(let u of userRoles.values())
    console.log(r);    
for(let u of userRoles.entries())
    console.log(`${ur[0].name}: ${ur[1]}`);    

for(let [u, r] of userRoles.entries())
    console.log(`${u.name}: ${r}`);    

for(let [u, r] of userRoles)
    console.log(`${u.name}: ${r}`); 

[...userRoles.values()];

userRoles.delete(u2);
userRoles.size;

userRoles.clear();
userRoles.size;

//Weak Maps    

const SecretHolder = (function() {
    const secrets = new WeakMap();
    return class {
        setSecret(secret) {
            secrets.set(this, secret);
        }
        getSecret() {
            return secrets.get(this);
        }
    }
})();

const a = new SecretHolder();
const b = new SecretHolder();

a.setSecret('secret A');
b.setSecret('secret B');

a.getSecret();
b.getSecret();

//Sets
//Make an instance
const roles = new Set();
//use add method
roles.add("User");
//to make user admin, add again
roles.add("Admin");
// set a size property
roles.size;
//to delete
roles.delete("Admin");

//Weak Sets

const naughty = new WeakSet();
const children = [
    { name: "Suzy" },
    { name: "Derek" },
];
naughty.add(children[1]);

for(let child of children) {
    if(naughty.has(child))
        console.log(`Coal for ${child.name}!`);
    else
        console.log(`Presents for ${child.name}!`);    
} 