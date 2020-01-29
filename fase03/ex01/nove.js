function nove(num){
 var n1 = num.toString();
 var n2 = n1.substring(n1.length-1,n1.length);
 if(n2==="9")
 return true;
 else
 return false;
}
