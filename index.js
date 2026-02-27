//1. egy "terv", ami meghatározza, hogy milyen tulajdonságai és metódusai legyenek az adott kódnak
//2. mikor létrehozunk objektumokat egy metódussal
//3. a példány az osztályon belül megírt kód alapján működik
//4. mikor a parameternek fuggvenyt adunk meg vagy fuggvenyt kapunk vissza
//5. mikor egy fuggveny callbacckel ter vissza majd lefuttatja azt
//6. 121
//7.
/*
const foo = (a,b, callback) => {
 const c = 1;
 const result = callback(a,b)+1;
 return { result }
}
const result = foo("1", "2", (szam1, szam2) => {return szam1+szam2});
console.log(result.result);
console.log(result)
*/

//8.


//9.
/*
const foo = (a,b, callback) => {
 const elso = Number(a);
 const masodik = Number(b);
 let result = 0;
 if(elso>10 && masodik>10){
    return 0;
 }
 else{
    result = callback(elso,masodik)
 }
 return result
}
const result = foo("1", "2", (szam1, szam2) => {return szam1+szam2});
console.log(result)
*/

//10.
/*
const foo = (a,b, callback) => {
 const elso = Number(a);
 const masodik = Number(b);
 let result = 0;
 if( 0<elso<10 && 0<masodik<10){
    result =callback(elso, masodik);
 }
 
 return result
}
const result = foo("1", "2", (szam1, szam2) => {return szam1+szam2});
console.log(result)
*/