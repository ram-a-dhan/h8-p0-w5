/**
Participants Summary
--------------------
Diberikan data dalam bentuk array multidimensi yang berisi
orang-orang yang akan ikut dalam Hackathon yang
diselenggarakan bulan depan.
Implementasikan function `participantsSummary` untuk
mengeluarkan laporan negara mana saja yang mengikuti,
ada berapa orang yang mewakili negara tersebut dan
nama peserta dari negara tersebut
Contoh ada di test cases
*/

function participantsSummary(data) {
  // code goes here

  if (!data.length) {return 'no participants';}
  
  var info = {};
  for (i = 0; i < data.length; i++) {
    var exists = false;
    for (j in info) {
      if (data[i][1] === j) {
        exists = true;
        info[j].total++;
        info[j].names.push(data[i][0]);
      }
    }
    if (!exists) {
      info[data[i][1]] = {
        total: 1,
        names: [data[i][0]],
      };
    }
  }
  return info;

}

// Test cases
console.log(
  participantsSummary([
    ["Dimitri", "Russia"],
    ["Heihachi", "Japan"],
    ["Sergei", "Russia"],
    ["Kazuya", "Japan"],
    ["Hwoarang", "South Korea"],
    ["Jin", "Japan"]
  ])
);
/*
{
  Russia: {
    total: 2,
    names: [ 'Dimitri', 'Sergei' ]
  },
  Japan: {
    total: 3,
    names: [ 'Heihachi', 'Kazuya', 'Jin' ]
  },
  'South Korea': {
    total: 1,
    names: [ 'Hwoarang' ]
  }
}
*/

console.log(
  participantsSummary([
    ["Suzuka", "Japan"],
    ["Steve", "United Kingdom"],
    ["Paul", "USA"]
  ])
);
/*
{
  Japan: {
    total: 1,
    names: [ 'Suzuka' ]
  },
  'United Kingdom': {
    total: 1,
    names: [ 'Steve' ]
  },
  USA: {
    total: 1,
    names: [ 'Paul' ]
  }
}
*/

console.log(participantsSummary([]));
// No participants
