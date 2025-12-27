function fact(a){
   if (a<=0)
   {
    return 1;
   }
   return a*fact(a-1)
}

s= fact(3)
console.log("Factorial is =",s);
z=fact(-9)
console.log("factorial is",z);
