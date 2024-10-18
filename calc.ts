function add(a: number, b: number): number{
    return a+b;
}

function mult(a: number, b:number): number{
    return a*b;
}

function diff(a : number, b:number): number {
    return a-b;
}

function div(a:number, b:number):number{
    return a/b;
}

function ph(a: number, b:number, operation: (x:number,y:number) => number): number{
    const ans = operation(a,b);
    return ans;
}

console.log(ph(5,10,add));
