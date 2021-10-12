// 1. suma



//2 convertir la suma en una funcion
 const sumar=(num1,num2)=>{
    let suma=num1+num2;
    //interpolacion ${}
    console.log(`la suma entre ${num1} y ${num2} es ${suma}`);
 }
 const restar=(num1,num2)=>{
    let suma=num1-num2;
    console.log(`la resta entre ${num1} y ${num2} es ${suma}`);
 }
 sumar(2,3);

 //exports.sumar=sumar
 //exports.restar=restar

 //3 objeto

 const operaciones={}
 //4.asignar propiedades y funciones 
 operaciones.sumar=sumar
 operaciones.restar=restar
//5.exportar todo el objeto 
 module.exports=operaciones