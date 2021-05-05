var massJoin = 50;
var massMark = 60;
console.log("MassMark :" , massMark);
console.log('MassJoin : ', massJoin);

var heighetMark = 1.7;
var heighetJoin = 1.8;

console.log('HeightMark : ',heighetMark);
console.log('HeightJoin : ',heighetJoin);

var bmiMark = massMark / (heighetMark*heighetMark);
var bmiJoin = massJoin / Math.pow(heighetJoin,2);
console.log('BMI Mark : ', bmiMark);
console.log('BMI Join : ', bmiJoin);

var isMarkHeight = bmiMark > bmiJoin;
console.log('BMI cua Mark lon hon cua Join ' + isMarkHeight);

//Change 2

var scoreJoin = (89 + 120 + 103) / 3;
var scoreMark = (89 + 120 + 103) / 3;
var scoreMary = (89 + 120 + 103) / 3;
// var scoreMark = (116 + 94 + 123) / 3;
// var scoreMary = ( 97+ 134 + 105) / 3;

console.log('Score Join ', scoreJoin);
console.log('Score Mark ', scoreMark);
console.log('Score Mary ', scoreMary);

if(scoreJoin > scoreMark && scoreJoin > scoreMary)
    console.log('Join co diem trung binh lon nhat ' + scoreJoin);
else if(scoreMark > scoreJoin && scoreMark > scoreMary)
    console.log('Mark co diem trung binh lon nhat ' + scoreMark);   
else if(scoreMary > scoreJoin && scoreMary > scoreMark)
    console.log('Mary co diem trung binh lon nhat ' + scoreMary); 
else if (scoreJoin == scoreMark && scoreJoin == scoreMary)
    console.log('Ba doi co diem trung binh bang nhau ');  
    
//Change 3

var bills =[124, 48, 268];
console.log('Bill '+ bills);
function calTip(bill){
    var phanTram;
    if(phanTram < 50){
        phanTram = 0.2;
    }else if( bill <=200){
        phanTram = 0.15;
    }else{
        phanTram = 0.1;
    }
    return phanTram*bill;
}

var tips = [
    calTip( bills[0] ),
    calTip( bills[1] ),
    calTip( bills[2] ),
]

console.log('Tip ' + tips);

var tips2 =[];
tips2.push(calTip(bills[0]));
tips2.push(calTip(bills[1]));
tips2.push(calTip(bills[2]));

console.log('Tip2 ' + tips2);

var tips3 = [];
tips3[tips3.length] = calTip(bills[0]);
tips3[tips3.length] = calTip(bills[1]);
tips3[tips3.length] = calTip(bills[2]);

console.log('Tips 3 ' + tips3);

// Change 4
function bmi(){
    console.log('this bmi ', this);
    return this.mass / ( this.height * this.height );
}

console.log("typeof bmi ", typeof bmi);
var Join = {
    fullName : 'Join',
    mass : 50,
    height : 1.77,
    bmiJoin : bmi
}

var Mark = {
    fullName : 'Mark',
    mass : 70,
    height : 2.77,
    bmiMark : bmi
}

console.log('BMI join la ' + Join.bmiJoin());
console.log('BMI Mark la ' + Mark.bmiMark());

if(Join.bmiJoin() > Mark.bmiMark()){
    console.log("BMI Join lon hon cua Mark ");
} else if (Join.bmiJoin() < Mark.bmiMark()){
    console.log("BMI Mark lon hon cua Join ");
} else{
    console.log("BMI Join va BMI Mark bang nhau");
}

