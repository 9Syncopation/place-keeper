'use strict'


function onSubmit() {
    event.preventDefault()
    let elBckgColor = document.getElementById("bckg-color").value;
    let elFontColor = document.getElementById("font-color").value;
    let elBirthDate = document.getElementById("user-dob").value;
    let elBirthTime = document.getElementById("user-birth-time").value;

    let userData = createUserData(elBckgColor, elFontColor, elBirthDate, elBirthTime);

    saveToStorage('userData', userData)
    console.log('userdata', userData);
    showHorscope();
    
    }

function init() {
    userPref();
}

function showHorscope() {
    let elModal = document.querySelector('.astrology')
    elModal.innerText = getHoroscope();
    elModal.style.display = 'block'
}

function getHoroscope() {
    let astrology = [
        'Your intense energy makes you a great candidate for a leadership position right now, so if you are ready to take on more power, grab it today! ',
        'Youll get along best with people who appeal to your more analytical side, today. Surprisingly, all of the folks who are trying to tug at your heartstrings will get little if any sympathy from you.',
        'Communication is very important today—written, spoken, and even nonverbal body language will all convey potent meanings. The people youll be dealing with right now are tuned into you very closely',
    ]
    return randomItem(astrology)
}

function randomItem(items) {

    return items[Math.floor(Math.random() * items.length)];

}