/**
 * ============ 
 * ACCESS LEVEL
 * ============
 * 
 * Jika access kosong, maka tampilkan "Input access"
 * Access public, jika level di bawah 5 maka tampilkan "Public di bawah 5"
 * Access public, jika level di atas 5 maka tampilkan "Public di atas 5"
 * Access public, jika level sama dengan 5 maka tampilkan "Public five"
 *
 * Access private, jika level di bawah 5 maka tampilkan "Private di bawah 5"
 * Access private, jika level di atas 5 maka tampilkan "Private di atas 5"
 * Access private, jika level sama dengan 5 maka tampilkan "Private five"
 *
 * Access protected, jika level di bawah 5 maka tampilkan "Protected di bawah 5"
 * Access protected, jika level di atas 5 maka tampilkan "Protected di atas 5"
 * Access protected, jika level sama dengan 5 maka tampilkan "Protected five"
 *
 * Jika access salah, tampilkan "Access is not defined"
 *
 * Buat Algoritma, Pseudocode dan Codingan
 */

/**
 * - Algoritma Access Level
 * 1. Mendeklarasikan variable accessStatus
 * 2. Mendeklarasikan variable accessLevel
 * 3. Jika accessStatus sama dengan public atau private atau protected maka no 4-6 jika lainnya maka Access is not defined
 * 4. Jika accessLevel lebih dari 5 maka "accessStatus di atas 5"
 * 5. Jika accessLevel kurang dari 5 maka "accessStatus di bawah 5"
 * 6. Jika accessLevel sama dengan 5 maka "accessStatus five"
 */

/**
 * - Pseudocode Access Level
 * 1. SET variable accessStatus WITH STRING
 * 2. SET variable accessLevel WITH NUMERIC
 * 3. IF accessStatus EQUAL 'public' OR accessStatus EQUAL 'private' OR accessStatus EQUAL 'protected' THEN NESTED IF,
 * 4. IF accessLevel MORE THAN 5 THEN DISPLAY accessStatus+" di atas 5"
 * 5. IF accessLevel LESS THAN 5 THEN DISPLAY accessStatus+" di bawah 5"
 * 6. IF accessLevel EQUAL 5 THEN DISPLAY accessStatus+" five"
 * 7. END NESTED, ELSE DISPLAY "Access is not defined"
 */

var accessStatus = "protected";
var accessLevel = 5;

if (accessStatus === "public" || accessStatus === "private" || accessStatus === "protected") {
    if (accessLevel > 5) {
        console.log(accessStatus + " di atas 5");
    } else if (accessLevel < 5) {
        console.log(accessStatus + " di bawah 5");
    } else {
        console.log(accessStatus + " five");
    }
} else {
    console.log("Access is not defined");
}