number(2);
function number(n) {
    if (1 <= n && n <= 99) {
        let xx="";
        for(let i = 0; i < n; i++){
            xx += 9;
        }
        console.log(xx);
    } else {
        console.log("false")
    }
    
}
  