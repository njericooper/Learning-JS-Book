//date and Time

//Dates, Time Zones, Timestamps, snd the Unix Epoch
/*const d = new Date();
console.log(d);
console.log(d.valueOf());

//constructing Date Objects

console.log(new Date());
console.log(new Date(2015, 0));
console.log(new Date(2015, 1));
console.log(new Date(2015, 1, 14));
console.log(new Date(2015, 1, 14, 13));
console.log(new Date(2015, 1, 14, 13, 30));
console.log(new Date(2015, 1, 14, 13, 30, 5));
console.log(new Date(2015, 1, 14, 13, 30, 5, 500));

console.log(new Date(0));
console.log(new Date(1000));
console.log(new Date(1463443200000));

console.log(new Date(-365*24*60*60*1000));

console.log(new Date('June 14, 1903'));
console.log(new Date('June 14, 1903 GMT-0000'));*/

//moment.js

//<script src="//cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.4.0/ ↩ moment-timezone.min.js"></script>
const moment = require('moment-timezone');

//constructing dates
//on the server
/*const d = new Date(Date.UTC(2016, 4, 27));
console.log(d);
const e = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
console.log(e);*/

//in the borwser
//transmitting Dates
/*const before = { d: new Date() };
console.log(before.d instanceof Date);
const json = JSON.stringify(before);
const after = JSON.parse(json);
console.log(after.d instanceof Date);
console.log(typeof after.d);
after.d = new Date(after.d);
console.log(after.d instanceof Date);*/

//Displaying Dates

/*const d = new Date(Date.UTC(1930, 4, 10));

console.log(d.toLocaleDateString());
console.log(new Intl.DateTimeFormat('en-US').format(d)); //toLocaleFormat depreciated
console.log(d.toLocaleDateString());
console.log(d.toTimeString());
console.log(d.toUTCString());

console.log(moment(d).format("YYYY-MM-DD"));
console.log(moment(d).format("YYYY-MM-DD HH:mm"));
console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));
console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));

console.log(moment(d).format("ddd, MMMM [the] Do, YYYY"));

console.log(moment(d).format("h:mm a"));*/

//Date Components

/*const d = new Date(Date.UTC(18, 9, 10));
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());

console.log(d.getUTCFullYear());
console.log(d.getUTCMonth());
console.log(d.getUTCDate());*/

//Comparing Dates

//const d1 = new Date(1996, 2, 1);
//const d2 = new Date(2009, 4, 27);

//console.log(d1 > d2);
//console.log( d1 < d2);


//Date Arithmetic

/*const msDiff = d2 - d1;
const daysDiff = msDiff/1000/60/60/24;

const dates = [];
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;
for(let i=0; i<10; i++)
    dates.push(new Date(min + delta*Math.random()));

console.log(dates.sort((a, b) => b - a));
console.log(dates.sort((a, b) => a - b));

const m = moment();
console.log(m.add(3, 'days'));
console.log(m.subtract(2, 'years'));
console.log(m.startOf('year'));
console.log(m.endOf('month'));

const n = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');

console.log(n);    */

//User-Friendly

console.log(moment().subtract(10, 'seconds').fromNow());
console.log(moment().subtract(44, 'seconds').fromNow());
console.log(moment().subtract(45, 'seconds').fromNow());
console.log(moment().subtract(5, 'minutes').fromNow());
console.log(moment().subtract(44, 'minutes').fromNow());
console.log(moment().subtract(45, 'minutes').fromNow());
console.log(moment().subtract(5, 'hours').fromNow());
console.log(moment().subtract(21, 'hours').fromNow());
console.log(moment().subtract(22, 'hours').fromNow());
console.log(moment().subtract(344, 'days').fromNow());
console.log(moment().subtract(345, 'days').fromNow());






