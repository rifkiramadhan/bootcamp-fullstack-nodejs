/**
 * =================================================================
 * ELECTION DAY
 * =================================================================
 * 
 * Tibalah hari dimana para warga "Code Village " untuk memilih wali kota yang baru.
 * Dari hasil pemilihan suara hitunglah siapa yang menang dan dapat berapa suara.
 * 
 * Contoh :
 * let votes = ["vincent","ncent","vincent","james","ncent","james","vincent"]
 * 
 * Result :
 * {
 *      vincent: 3,
 *      ncent: 2,
 *      james: 2
 * }
 * Pemenang adalah Vincent dengan 3 suara.
 * 
 * Buat function untuk menjawab permasalahan di atas.
 * 
 * DILARANG : Menggunakan built in function kecuali .push
 */

 const countVote = votes => {
    // code here
    let result = {}

    if(votes.length === 0){
        return `Tak ada suara.`
    } else {
        for(i = 0; i < votes.length; i++) {
            if(result[votes[i]] === undefined){
                result[votes[i]] = 1;
            }else{
                result[votes[i]] += 1;
            }
        }
    } 
    
    let winner = 0;
    let winnerKey = '';
    for(key in result){
        if(winner < result[key]){
            winner = result[key];
            winnerKey = key
        } else {
            // console.log(result[key]);
        }
    }

    return `Pemenang adalah ${winnerKey} dengan ${winner} suara.`;
}

// Test case
console.log(countVote(["rif","ki","rifki","rama","dhan","ramadhan","rifki"]))
// Pemenang adalah Vincent dengan 3 suara.

console.log(countVote([]))
// Tak ada suara.