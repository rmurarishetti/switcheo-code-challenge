var sum_to_n_a = function(n) {
    // Algorithmic Complexity: O(1)
    let sum = n*(n+1)/2;
    return sum;
};

var sum_to_n_b = function(n) {
    //Algorithmic Complexity: O(log(n))
    let sum = 0;
    while(n>0){
        let m = Math.floor(n/2);
        if(n%2==0){
            sum += 2*sum_to_n_b(m) + m*m;
        }
        else{
            sum += 2*sum_to_n_b(m) + m*m + n;
        }
        break;
    }
    return sum;
};

var sum_to_n_c = function(n) {
    //Algorithmic Complexity: O(n)
    const arr = [];
    for(let i=1; i<=n; i++){
        arr.push(i);
    }
    let sum = arr.reduce((a,b)=>a+b);
    return sum;
};

console.log(sum_to_n_a(440));
console.log(sum_to_n_b(882));
console.log(sum_to_n_c(882));