// Número de likes

let num = parseFloat(prompt("Dame el número"))

const likes = (num) => {

    if (num < 1000) {
        return num.toString();
    } 
    else if (num < 1000000) {
        let k = Math.floor(num / 1000);
        return k.toString() + "K";
    } 
    else {
        let m = Math.floor(num / 1000000);
        return m.toString() + "M";
    }
}

let res = likes(num);
alert(res)
