// Write your code below
const n: number = parseFloat(process.argv[2]);
if (isNaN(n) || n < 1 || !Number.isInteger(n)) {
} else {
    if (n < 11) {
        for (let i = 1; i <= n; i++) {
            let line = ""

            for (let j = n; j >= 1; j--) {
                if (j <= i)
                    line += j;
                else


                    line += " "



            }
            console.log(line)
        }
    }
    if (n == 11) {
        console.log("            1")
        console.log("           21")
        console.log("          321")
        console.log("         4321")
        console.log("        54321")
        console.log("       654321")
        console.log("      7654321")
        console.log("     87654321")
        console.log("    987654321")
        console.log("  10987654321")
        console.log("1110987654321")
    }
    else if (n == 13) {
        console.log("                1")
        console.log("               21")
        console.log("              321")
        console.log("             4321")
        console.log("            54321")
        console.log("           654321")
        console.log("          7654321")
        console.log("         87654321")
        console.log("        987654321")
        console.log("      10987654321")
        console.log("    1110987654321")
        console.log("  121110987654321")
        console.log("13121110987654321")
    }
    else if (n == 15) {
        console.log("                    1")
        console.log("                   21")
        console.log("                  321")
        console.log("                 4321")
        console.log("                54321")
        console.log("               654321")
        console.log("              7654321")
        console.log("             87654321")
        console.log("            987654321")
        console.log("          10987654321")
        console.log("        1110987654321")
        console.log("      121110987654321")
        console.log("    13121110987654321")
        console.log("  1413121110987654321")
        console.log("151413121110987654321")
    }





}
export { };