//Q1
console.log("Q1");

function power(a,b){
    let result = 1;
    let i = 0
    while(i<b) {
        result = result * a;
        i++;
    }
     return result;
}
console.log(power(4,3))

//Q2
console.log("Q2");

function isLeap(year){
    if (year % 4 === 0) {
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap Year"; 
            } else {
                return "Not a Leap Year";
            } 
        }else {
                return "Leap Year";
            }
        } else {
             return "Not a leap Year"
        }
     }

     console.log(isLeap(2008));
     console.log(isLeap(2000));
     console.log(isLeap(1900));
     console.log(isLeap(2023));

//Q3
console.log("Q3");
function semiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}
function triangleArea(a, b, c) {
    let S = semiPerimeter(a, b, c); 
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

console.log(triangleArea(5, 6, 7)); 
console.log(triangleArea(3, 4, 5)); 
console.log(triangleArea(10, 10, 10)); 

//4
console.log("Q4");

function calculateAverage(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}

function calculatePercentage(m1, m2, m3) {
    let total = m1 + m2 + m3;
    return (total / 300) * 100; 
}

function mainMarks(m1, m2, m3) {
    let avg = calculateAverage(m1, m2, m3);
    let perc = calculatePercentage(m1, m2, m3);
    console.log("Average:", avg.toFixed(2));
    console.log("Percentage:", perc.toFixed(2) + "%");
}

mainMarks(80, 90, 75);

//5
console.log("Q5");

function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}

console.log(customIndexOf("javascript", "a")); 
console.log(customIndexOf("javascript", "z"));

//6
console.log("Q6");

function removeVowels(sentence) {
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        if (!"aeiouAEIOU".includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

console.log(removeVowels("Hello World!")); 

//7
console.log("Q7");

function countDoubleVowels(line) {
    let count = 0;
    let found = [];
    for (let i = 0; i < line.length - 1; i++) {
        let pair = line[i].toLowerCase() + line[i + 1].toLowerCase();
        switch (pair) {
            case "aa": case "ae": case "ai": case "ao": case "au":
            case "ea": case "ee": case "ei": case "eo": case "eu":
            case "ia": case "ie": case "ii": case "io": case "iu":
            case "oa": case "oe": case "oi": case "oo": case "ou":
            case "ua": case "ue": case "ui": case "uo": case "uu":
                count++;
                found.push(pair);
        }
    }
    console.log("Double vowels count:", count);
    console.log("Pairs found:", found.join(", "));
}

countDoubleVowels("Pleases read this application and give me gratuity");

//8
console.log("Q8");

function toMeters(km) { return km * 1000; }
function toFeet(km) { return km * 3280.84; }
function toInches(km) { return km * 39370.1; }
function toCentimeters(km) { return km * 100000; }

function mainDistance(km) {
    console.log("Meters:", toMeters(km));
    console.log("Feet:", toFeet(km));
    console.log("Inches:", toInches(km));
    console.log("Centimeters:", toCentimeters(km));
}

mainDistance(5);

//9 
console.log("Q9");

function calculateOvertime(hours) {
    let overtimeHours = hours > 40 ? hours - 40 : 0;
    return overtimeHours * 12; 
}

console.log("Overtime pay:", calculateOvertime(45));

//10
console.log("Q10");

function calculateNotes(amount) {
    let hundreds = Math.floor(amount / 100);
    let fifties = Math.floor((amount % 100) / 50);
    let tens = Math.floor(((amount % 100) % 50) / 10);
    console.log(`100s: ${hundreds}, 50s: ${fifties}, 10s: ${tens}`);
}

calculateNotes(760);
