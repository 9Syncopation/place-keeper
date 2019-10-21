'use strict'

let gUserData = getFromStorage('userData')
console.log('gUserData',gUserData);

function userPref(){
    // debugger;
    var elUserPref= document.querySelector('.main-body')
    elUserPref.style.backgroundColor = gUserData.bcgColor;
    elUserPref.style.color = gUserData.fontColor;

}

function createUserData(bcgColor,fontColor,birthDate,birthTime){
    return{
        bcgColor,
        fontColor,
        birthDate,
        birthTime,
    }
}
