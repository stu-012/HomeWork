addTwoDigits(72);
function addTwoDigits(n) {
    let number = n.toString();
    if (10 <= n && n <= 99){
        let x =map(number[0] + number[1])
        console.log(x)
    }
    else{
        console.log("false")
    }
}
