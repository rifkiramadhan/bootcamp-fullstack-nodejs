/**
 * ARLOJI COLLECTION
 * 
 * A punya koleksi arloji yang dia banggakan, dan teman-teman nya ingin bertanya koleksi arloji apa saja yang dia punya.
 * 
 * let watches = ["Swiss Army","Daniel Wellington","Dublot"]
 * Hasil yang di harapkan : Saya punya Swiss Army, Daniel Wellington, dan Dublot.
 * 
 * Hasil harus sama persis seperti yang di contohkan, dimana :
 * 1. Result di print dalam 1 string 
 * 2. Tanda ',' (koma) dan '.' (titik) harus sesuai
 * 
 * Contoh lain :
 * let arloji = ['A', 'B', 'C', 'D','E']
 * Hasil yang di harapkan : Saya punya A, B, C, D, dan E.
 * 
 * Rules : Tidak boleh menggunakan built in function apapun!
 */

let watches = ["Swiss Army", "Daniel Wallington", "Dublot"];
let arloji = ['A', 'B', 'C', 'D', 'E'];

const mentionWatch = (watches) => {
    // your code here
    if(watches){
        console.log('Saya punya ' + watches)
    }
};

console.log(mentionWatch(watches["Swiss Army", "Daniel Wellington", "Dublot"]))
// Saya punya Swiss Army, Daniel Wellington, dan Dublot.
console.log(mentionWatch(["A", "B", "C", "D", "E"]))
// Saya punya A, B, C, D, dan E.
console.log(mentionWatch([]))
// Saya tidak punya arloji, trims.
console.log(mentionWatch())
// Saya tidak punya arloji, trims.
