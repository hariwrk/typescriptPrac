function add(a, b) {
    return a + b;
}
function mult(a, b) {
    return a * b;
}
function diff(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}
function ph(a, b, operation) {
    var ans = operation(a, b);
    return ans;
}
console.log(ph(5, 10, add));
