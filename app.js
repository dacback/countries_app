var output = process.argv[2];
var countries = require('./countries');

console.log(typeof countries);

function checkCountry(countryArr, q){

    // console.log(countryArr);

    var search = q;
    var len ;

    // if(search){
    //    len = countryArr.length;
    //    console.log(len + ' this is a big array');

    //     for (var i = 0; i <= len; i++){
    //         if(search == countryArr[i].name) {
    //             console.log('Excellent! You found ' + countries[i].name ); 
    //         } else if(search == countryArr[i].tld) {
    //             console.log('Excellent! You found ' + countries[i].tld );
    //         } else {
    //             console.log('Oops ' + output + ' is not a valid selection');
    //         }

    //     }
    // }   

}

if(output != undefined || output != null){
    checkCountry(countries, output);
} else{
    console.log('sorry, nothing searched');
}


