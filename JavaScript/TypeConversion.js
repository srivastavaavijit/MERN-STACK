// Implicit Type Conversion:
result = '3'+null;
console.log(result);
console.log(typeof(result));

result2 = 2+true;
console.log(result2);
console.log(typeof(result2));

// Explicit Type Conversion:
a = '3';
a = Number(a);
console.log(a);

b = null;
b = String(b);
console.log(b);

c = 20.932;
c = parseInt(c);
console.log(c);