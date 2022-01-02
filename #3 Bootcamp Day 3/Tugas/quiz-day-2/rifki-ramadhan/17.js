function countValley(road) {
    const n = road.length;
    const finish = 2;
    let isLembah = false;
    let lembah = 0;
    road = (typeof road === "string") ? road.split('') : road;

    if (road.length >= finish && n === parseInt(n, 0) && n >= finish && n === road.length) {
        road.map(steps => ((steps === "U") ? 1 : -1)).reduce((prev, next) => {
            if (prev < 0 && !isLembah) {
                isLembah = true;
            }
            if ((prev + next) === 0 && isLembah) {
                lembah++;
                isLembah = false;
            }
            return prev + next;    
        });
    } 
    
    return lembah; 
}

console.log(countValley("UDDDUDUU"));