//Ask for number between 1-9999
let num = prompt('Insert number here','1-9999')
//Ask again if number is out of bounds
while (isNaN(num)) {
    alert('LETTERS ARE NOT VALID!')
    num = prompt('Insert number here','1-9999')
}
while (num < 1 || num > 9999) {
alert('Please choose a number between 1 and 9999!!')
num = prompt('Insert number here','1-9999')
}
//Arrays
let units = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
let tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
let hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
let thousands = ["","M","MM","MMM","MV'","V'","V'M","V'MM","V'MMM","I'X'"];
//function
function convertToRoman(num) {
    digits = num.length
    if (digits==1) {
        document.write(num + ' = ' + units[num[0]])
    }
    else if (digits==2) {
        document.write(num + ' = ' + tens[num[0]] + units[num[1]])
    }
    else if (digits==3) {
        document.write(num + ' = ' + hundreds[num[0]] + tens[num[1]] + units[num[2]])
    }
    else {
        document.write(num + ' = ' + thousands[num[0]] + hundreds[num[1]] + tens[num[2]] + units[num[3]])
    }
}
convertToRoman(num)


    // numString = num.toString()
    // else if (digits==2 && num[1]== 0)  {
    //     document.write(num + ' = ' + tens[num[0]])
    // }

    // else if (digits==3 && num[2]!= 0) {
    //     document.write(num + ' = ' + hundreds[num[0]] + units[num[2]])
    // }

    // else if (digits==3 && num[2]== 0) {
    //         document.write(num + ' = ' + hundreds[num[0]])
    // }

    // alert('hello world from JS file')
// let partnerList=[];
// const trip = {
//     location: 'Italy',
//     partners: ['my family', 'my friends', 'my neighbours', 'my co-workers'],
//     numDays: 7,
//     places: ['Rome', 'Bari', 'Florence', 'Napoli'],
//     showTrip: function () {
//         document.write('My Dream Trip: '+this.location+' with '+ partnerList.join(', ')+' and '+ this.partners[this.partners.length]+' for '+this.numDays+ ' days.<br>'+this.places.length+' places to visit: <br>* '+this.places.join('<br>* '))
//     }
// }
// for (i=0;i<=trip.partners.length-2;i++) {
//     y = trip.partners.slice(i,i+1);
//     partnerList.push(y);
// }
// trip.showTrip()




