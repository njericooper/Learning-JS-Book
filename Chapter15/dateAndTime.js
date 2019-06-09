// Dates, Time Zones, Timestamps, and the Unix Epoch
const d = new Date();
console.log(d);
console.log(d.valueOf());

//constructing Date Objects
new Date(2015, 0);
new Date(2015, 1);
new Date(2015, 1, 14);
new Date(2015, 1, 14, 13);
new Date(2015, 1, 14, 13, 30);
new Date(2015, 1, 14, 13, 30, 5);
new Date(2015, 1), 14, 13, 30, 5, 500;

new Date(0);
new Date(1000);
new Date(1463443200000);
new Date(-365*24*60*60*1000);
new Date('June 14, 1903');
new Date('June 14, 1903 GMY-0000');

//Cconstructing Dates on the Server
const d = new Date(Date.UTC(2016, 4, 27));

//Transmitting Dates

const before = { d: new Date() };
before.d instanceof Date
const json = JSON.stringify(before);
const after = JSON.parse(json);
after.d instanceof Date
typeofafter.d
after.d = new Date(after.d);
after.d instanceof date 

const before = { d: new Date().valueOf() };
typeof before.d
const json = JSON.stringify(before);
const after = JSON.parse(json);
typeof after.d
const d = new Date(after.d);

//Displaying Dates
const d = new Date(Date.UTC(1930, 4, 10));
d.toLocaleDateString();
d.toLocaleTimeString()
d.toTimeString()
d.toUTCString()

moment(d).format("YYYY-MM-DD");
moment(d).format("YYYY-MM-DD HH:mm");
moment(d).format("YYYY-MM-DD HH:mm Z");
moment(d).format("YYYY-MM-DD HH:mm [UTC]Z");
moment(d).format("dddd, MMM [the] Do, YYYY");
moment(d).format("h:mm a");

//Date Components
const d = new Date(Date.UTC(1815, 9, 10));
d.getFullYear()
d.getMonth()
d.getDate()
d.getDay()
d.getHours()
d.getMinutes()
d.getSeconds()
d.getMilliseconds()
d.getUTCFullYear()
d.getUTCMonth()

//Comparing Dates

const d1 = new Date(1996, 2, 1);
const d2 = new Date(2009, 4, 27);

d1 > d2 //false
d1 < d2 //true

//Date Arithmatic

const msDiff = d2 - d1;
const daysDiff = msDiff/1000/60/60/24;

const dates = [];
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for(let i=0; i<10; i++)
    dates.push(new Date(min + delta*Math.random()));
dates.sort((a, b) => b -a);
dates.sort((a, b) => a - b);

//User-Friendly Relative Dates
moment().subtract(10, 'seconds').fromNow(); //minutes, hours, and days
