// Bai Tap 1

var n, s = 0 ;
n = prompt("Nhap gia tri n :");
if(n >= 0){
    for (var i = 1; i<=n; i++){
        s+=i;
    }
    console.log("S = " +s);
}
else {
    console.log('Khong the nhap n am dc !!!');
 }
//Bai tap 2

var n , s= 0;
n = prompt("Nhap gia tri n :");
if(n >= 0){
    for (var i = 1; i<=n; i++){
        s+=Math.pow(i,2);
    }
    console.log("S = " +s);
}
else {
    console.log('Khong the nhap n am dc !!!');
}
//Bai tap 3
var n , s= 0;
n = prompt("Nhap gia tri n :");
if(n >= 0){
    for (var i = 1; i<=n; i++){
        s+=1/i;
    }
    console.log("S = " +s);
}
else {
    console.log('Khong the nhap n am dc !!!');
}

//Bai tap 4 
 var x, n , s = 0;
 n = prompt("Nhap gia tri n :");
 x = prompt("Nhap gia tri cua x : ");
 if( n >= 0 && x >= 0 ){
     for(var i = 1; i <= n ; i++){
         s+=Math.pow(x, i);
     }
     console.log("S = " +s);
 }
 else {
    console.log('Khong the nhap n am dc !!!');
}

//Bai tap 5
var n , s = 1;
n = prompt("Nhap gia tri n :");
if(n >= 0){
    for (var i = 1; i<=n; i++){
        s*=i;
    }
    console.log("S = " +s);
}
else {
    console.log('Khong the nhap n am dc !!!');
}

//Bai tap 6
var n , nt=1;
function nguyento(x){
    if(x==1 || x==2) 
        nt=1;
    if(x >2 ){
        for(var i = 2; i <= Math.sqrt(x); i++){
            if(x%i == 0){
                nt = 0;
                break; 
            }
        }
    }
    return nt;
}

n = prompt("Nhap gia tri n :");
if(nguyento(n)==1){
    console.log(n + " la 1 so nguyen to");
}else{
    console.log(n + " khong la 1 so nguyen to");
}

//Bai tap 7 
var a, b, c;
function Max(x1,x2,x3){
    
    if(x1 > x2 && x1 > x3 ){
        console.log("Max la " +x1);
    } else if( x2 > x1 && x2 >x3){
        console.log("Max la " +x2);
    } else if(x3 > x1 && x3 > x2 ){
        console.log("Max la " +x3);
    } else if(x1 == x2 && x2 == x3){
        console.log("Ca 3 gia tri deu bang nhau va bang " +x1);
    }
}

a = prompt("Nhap gia tri a :");
b = prompt("Nhap gia tri b :");
c = prompt("Nhap gia tri c :");
Max(a,b,c);
