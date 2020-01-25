//Object berisi para seller minuman
//object ini disediakan

/**
 *  Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
 *  Semua sellers direpresentasikan dengan object bernama "sellers", yang memiliki properti berupa object juga.
 *  satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar 
 *  "discount" (40%).
 * 
 *  Implementasikan function beliTermurah yang akan menerima input berupa array berisi minuman yang ingin dibeli oleh user.
 *  Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan total harga 
 *  yang paling murah.
 */
function beliTermurah(toBuy) {
	var sellers = {
		BobaFett: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.15
		},
		BobaFest: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.35
		},
		ChatTime: {
			items: [
				{ name: 'Fett Drink', price: 18000 },
				{ name: 'Dragon Boba Juice', price: 24000 },
				{ name: 'Star Big Boba', price: 21000 }
			],
			discount: 0.1
		},
		Kokumi: {
			items: [
				{ name: 'Fett Drink', price: 32000 },
				{ name: 'Dragon Boba Juice', price: 42000 },
				{ name: 'Star Big Boba', price: 27000 }
			],
			discount: 0.4
		}
	};

	var termurah = [];
  	for (i = 0; i < toBuy.length; i++) {
		termurah.push({
			minuman : toBuy[i],
			harga   : 0,
			seller  : '',
		});
		for (j in sellers) {
			for (k = 0; k < sellers[j].items.length; k++) {
				if (sellers[j].items[k].name === termurah[i].minuman) {
					if (termurah[i].harga === 0) {
						termurah[i].harga = sellers[j].items[k].price - sellers[j].items[k].price * sellers[j].discount;
						termurah[i].seller = j;
					} else {
						if (termurah[i].harga > (sellers[j].items[k].price - sellers[j].items[k].price * sellers[j].discount)) {
						termurah[i].harga  = sellers[j].items[k].price - sellers[j].items[k].price * sellers[j].discount;
						termurah[i].seller = j;
						}
					}
				}
			}
		}
	}
	// return termurah;

	var rekomendasi = '';
	if (termurah.length) {
		for (i = 0; i < termurah.length; i++) {
			rekomendasi += `${termurah[i].minuman} bisa dibeli dengan harga paling murah ${termurah[i].harga} di ${termurah[i].seller}. \n`
		}
	} else {
	  return 'Pembeli tidak membeli apa-apa.\n';
	}
	return rekomendasi;
}

var tc1 = ['Star Big Boba', 'Dragon Boba Juice'];
var tc2 = ['Fett Drink'];
var tc3 = [];
var tc4 = ['Star Big Boba', 'Dragon Boba Juice', 'Fett Drink'];

console.log(beliTermurah(tc1));
/*
Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
*/
console.log(beliTermurah(tc2)); //Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime
console.log(beliTermurah(tc3)); //Pembeli Tidak Membeli Apa-Apa
console.log(beliTermurah(tc4));
/*
Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime
*/