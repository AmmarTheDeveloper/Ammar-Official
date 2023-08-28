const calculate = document.querySelector('.btn');
const month = [01 , 02 , 03 , 04 , 05 , 06 , 07 , 08 , 09 , 10 , 11 ,12];
const monthDay = [31 , 28 , 31 , 30 , 31 , 30 , 31 ,31 , 30 , 31 , 30 , 31];
calculate.onclick = () => {
    let today = new Date(),
        tYear = today.getFullYear(),
        tMonth = today.getMonth() + 1,
        tDate = today.getDate();
    const input = new Date(document.querySelector('.input').value);
        let birthYear = input.getFullYear(),
            birthMonth = input.getMonth() + 1,
            birthDate = input.getDate();
    // for leap year 
        if(birthYear % 4 == 0){
            monthDay[1] = 29;
        }else {
            monthDay[1] = 28;
        }
    // if date is not valid then we say you not born yet
    if (input == "Invalid Date") {
        tYear = "Not";
        tMonth = "born";
        tDate = "yet";
        return insertValues(tYear, tMonth, tDate);
    }
    // if user input greater then todays date then we say you not born yet
    if (birthYear > tYear || (tYear == birthYear && birthMonth > tMonth) || (tYear == birthYear && tMonth == birthMonth && birthDate > tDate)) {
        tYear = "Not";
        tMonth = "born";
        tDate = "yet";
        return insertValues(tYear, tMonth, tDate);
    } else if (tYear == birthYear && tMonth == birthMonth && tDate == birthDate) { //if user is born today
        return window.location.assign('https://youtu.be/nl62hhiBMOM');
    }
    //actual calculation starts
    if (tYear > birthYear) {
        tYear = tYear - birthYear;
    }
    if (tMonth > birthMonth) {
        tMonth = tMonth - birthMonth;
    } else if (tMonth < birthMonth) {
        tYear = tYear - 1;
    }
    if (tDate > birthDate) {
        tDate = tDate - birthDate;
    } else if (birthDate > tDate) {
        tMonth = tMonth - 1;
        tempDate = monthDay[tMonth - 1] - birthDate;
        tDate = tempDate + today.getDate();
    }else if(birthDate == tDate){
        tMonth = tMonth - 1;
        tDate = today.getDate();
    }
    insertValues(tYear, tMonth, tDate);
}
//inserting values in html
function insertValues(year, month, date) {
    let Youtput = document.querySelector('span.year'),
        Moutput = document.querySelector('span.month'),
        Doutput = document.querySelector('span.day');
    Youtput.innerHTML = year;
    Moutput.innerHTML = month;
    Doutput.innerHTML = date;
}