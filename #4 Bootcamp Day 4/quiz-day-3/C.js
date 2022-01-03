/**
 * ===============================
 * Pair Programming
 * =
 * 
 * Istilah Pair Programming merupakan definisi dari 2 programmer yang saling ber kontribusi dalam pembuatan program atau membuat solusi dari problem.
 * 
 * Diberikan sebuah kelas (array) yang berisi peserta untuk di pasangkan dengan ketentuan berikut :
 * 1. Peserta di pasangkan hanya ber 2
 * 2. Peserta di pasangkan dengan initial nama yang berbeda
 * 3. Jumlah peserta harus Genap
 * 
 * Contoh : 
 * 
 * let students = ["Accio","Benny","John","Jim","Iota","Scott"]
 * 
 * Result : ["Accio - Benny","John - Iota","Jim - Scott"]
 * 
 * DILARANG :
 * - Menggunakan built in function, kecuali .push()
 */

// Accio - Benny - John - Jim - Iota - Scott
// false - false - John - Jim - Iota - Scott   ["Accio-Benny"]
// false - false - false - Jim - false - Scott ["Accio-Benny","John-Iota"]
// false - false -false - false - false - false ["Accio-Benny","John-Iota","Jim-Scott"]

const pairStudent = students => {
    // code here
    let result = [];
    let temp = '';

    if (students.length % 2 === 1) {
        return `Harus genap.`
    } else {
        for (let i = 0; i < students.length; i++) {
            if (students[i] !== false) {
                for (let j = i; j < students.length; j++) {
                    if (students[j] !== false) {
                        if (students[i][0] !== students[j][0]) {
                            temp = `${students[i]} - ${students[j]}`;
                            students[i] = false;
                            students[j] = false;
                            break
                        }
                    }
                }
                result.push(temp);
                temp = '';
            }
        }
        return result;

    }

}

// Test case
console.log(pairStudent(["Cena", "Charice", "Bertha", "George", "Accio", "Abe", "Ann", "Chuck", "Danish", "Eugene"]))
/**
 * [
 *   "Cena - Bertha",
 *   "Charice - George",
 *   "Accio - Chuck",
 *   "Abe - Danish",
 *   "Ann - Eugene"
 * ]
 */

console.log(pairStudent(["Cena", "Charice", "Bertha", "George", "Accio"]))
// Harus genap