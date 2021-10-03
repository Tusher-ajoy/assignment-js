// 1. Convert kilometer to meter
function kilometerToMeter(kilometer){
    //1km = 1000m
    if(kilometer<0){
        return "ERROR : kilometer value cannot be negative";
    }
    return kilometer*1000;
}
let kilometer = 5;
let result1 = kilometerToMeter(kilometer);
console.log(result1);


// 2. Budget Calculator
function budgetCalculator(watch, phone, laptop){
    //watch price = 50, phone price = 100, laptop price = 500
    if(watch<0 || phone<0 || laptop<0){
        return "ERROR : This value cannot be negative";
    }
    let totalBudget = watch*50 + phone*100 + laptop*500;
    return totalBudget;
} 
let result2 = budgetCalculator(1,1,1);
console.log(result2);


// 3.Hotel cost
function hotelCost(day){
    if(day<0){
        return "ERROR : Day value cannot be negative";
    }
    
    if(day <= 10){
        return day*100;
    }
    else if(day <= 20){
        let withoutDiscount = 10*100;
        let afterDiscount = (day-10)*80;
        return withoutDiscount+afterDiscount;
    }
    else{
        let withoutDiscount = 10*100;
        let firstDiscount = 10*80;
        let secondDiscount = (day-20)*50;
        return withoutDiscount+firstDiscount+secondDiscount;
    }
}
let result3 = hotelCost(21);
console.log(result3);


// 4. Mega Friend
function megaFriend(friendsName){
    let bigName = '';
    for(let i=0;i<friendsName.length;i++){
        if(friendsName[i].length > bigName.length){
            bigName = friendsName[i];
        }
    }
    return bigName;
}
let friendsName = ['Niloy', 'Shakil', 'Fahim', 'Pawan', 'Kamran', 'Ifty', 'Piarul'];
let result4 = megaFriend(friendsName);
console.log(result4);