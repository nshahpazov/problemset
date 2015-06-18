var str =
 [
 "Boko | Bulgaria",
 "Gero | Spain   ",
 "  A |Angola",
  " B|Angola",
  " Mike     Ivanov|England ",
  "Steve|England",
  " Pesho    Ivanov |   Bulgaria   "
];

var hm = {};

var plays = str.map(function (line) {
  var split = line.split('|');
  return {
    player: split[0].trim().replace(/\s+/g, ' '),
    country: split[1].trim().replace(/\s+/g, ' ')
  };
});

// console.log(plays);

 var hashmap = {};
 plays.forEach(function (play) {
  hashmap[play.country] = hashmap[play.country] || {wins: 0, players: {}};
  hashmap[play.country].players[play.player] = hashmap[play.country].players[play.player] || 0;
  hashmap[play.country].players[play.player]++;
  hashmap[play.country].wins++;
 });

 Object.keys(hashmap).sort(function (f, s) {
  return hashmap[f].wins < hashmap[s].wins;
 }).forEach(function (e) {

  var playersCount = Object.keys(hashmap[e].players).length;

  console.log(e, '(' + playersCount + ' participants): ' + hashmap[e].wins + ' wins');
 });

// console.log( JSON.stringify(hashmap) );