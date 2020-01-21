/**
 * Elementalist Battle.
 * 
 * Function akan menerima input berupa object player dan array berisi serangan yang akan dihadapi player tersebut. 
 * Seorang player memiliki nama, health, dan element. 
 * -health : merupakan nyawa dari pemain, dari  0 - 100
 * -element: merupakan elemen dari pemain
 * 
 * Terdapat 3 jenis element: wind, fire, dan water.
 * Tiap elemen memiliki DAMAGE yang sama yaitu 25
 * Berikut ini aturan untuk elemen tersebut:
 * 
 * -fire bisa memberikan damage kepada wind    fire > wind
 * -water bisa memberikan damage fire          water > fire
 * -wind bisa memberikan damage water          wind > water
 * 
 * 
 * Selain 3 itu, tidak ada efeknya, misal untuk kasus water:
 * water tidak bisa memberikan damage kepada wind
 * water tidak bisa memberikan damage kepada water
 * 
 * -Jika health player sudah 0, maka keluarkan output "Player `name` meninggal"
 * -Jika health player masih ada, maka output object player tersebut
 * 
 * RULES:
 *  - Tuliskan Pseudocode kalian, No pseudocode = 0 !!!
 *  - Dilarang menggunakan .filter .reduce .in
 */

//// PSEUDOCODE
// DECLARE el containing all elements + 1 initial element
// DECLARE stats template 
// FOR each element in attacks
//   FOR each element in el excluding first element
//     IF element in stats EQUALS element in el AND element in attacks EQUALS previous element in el
//       SUBSTRACT 25 from stats health
//     ENDIF
//   ENDFOR
// ENDFOR
// 
// IF stats health is 0 or less
//   PRINT player {name} is dead
// ELSE
//   PRINT stats
// ENDIF


function elementBattle(player, attacks) {
  // your code here
  
  var el = ['fire','wind','water','fire'];

  var stats = {
    name: player.name,
    health: player.health,
    element: player.element,
  };

  for (i = 0; i < attacks.length; i++) {
    for (j = 1; j < el.length; j++) {
      if (stats.element === el[j] && attacks[i] === el[j-1]) {
        stats.health -= 25;
      }
    }
  } 
  return (stats.health <= 0) ? `Player ${stats.name} meninggal.` : stats;
}

console.log(elementBattle({
  name: "Aang",
  health: 100,
  element: "wind"
}, ["water", "fire", "fire", "wind"]));
//{ name: 'Aang', health: 50, element: 'wind' }

console.log(elementBattle({
  name: 'Zuko', 
  element: "fire",
  health: 100
}, ['water','water','water','water','water']))
// Player Zuko meninggal

console.log(elementBattle({
  name: 'Katara', 
  element: "water", 
  health: 35
}, ['water','fire', 'wind', 'wind', 'wind']))
// Player Katara meninggal