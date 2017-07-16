const fs = require('fs');
var len = process.argv.length;
// code below allows for coutries with two name (like united states) to be searched without quotes 
var output = (len <= 3) ? process.argv[len - 1] : (process.argv[len - 2] + ' ' + process.argv[len - 1]);


// the checkEntry function checks to make sure an entry is capitalized
var capitalizeEntry = function(search) {

    // code below uses a promise instead of callback to integrate capitalize inside of searchCountries function below.
    return new Promise(function(resolve, reject) {

        if (search === null) {
            throw new Error(' you did not make an entry');
            //      code below checks to see if search query is a single non-capitalized word (like danada) 
        } else if (search.indexOf(' ') > 0 === false) {
            //          code below converts first character of text to Upper case
            search = search.charAt(0).toUpperCase() + search.slice(1);
            resolve(search);
            //      code below resolves by calling the capitalizeFirstLetter function if search query is two or more words (e.g. united states)
        } else if (search.indexOf(' ') > 0 === true) {
            resolve(capitalizeFirstLetter(search));

        } else {
            reject(console.log('oops, sorry there was an error'))

        }
    });
}

// the searchCountries function is the primary executable function that will use the fs.readFile method
// to query countries.json for country data.
function searchCountries(search) {

    // code below invokes capitalizeEntry function to capitalize 1st letter of search query
    var searchQuery = search;
    capitalizeEntry(searchQuery).then(function(searchData) {

        try {
            if (!isNaN(searchData)) {
                throw new Error('Sorry, you must enter a valid text search');

            }
        } catch (error) {
            console.log(error);

        }

        fs.readFile('countries.json', function(err, data) {

            var countries = JSON.parse(data);
            countries.forEach(function(country) {

                if (searchData) {
                    while (searchData == country['name']) {
                        for (var key in country) {
                            console.log(`${'Database shows '}: ${country[key]}`);
                        }
                        searchData = null;
                    }
                }
            })
            
            if (err == null && isNaN(searchData)) {
                var searchError = '';
                searchError = new Error('Sorry, you did not enter a valid country. Try again');
                console.log(searchError);
            }
        })

    }, function(error) {
        console.log(error);
    })

};

searchCountries(output);


// the capitalizeFirstLetter function capitalizes the 1st character of every word
function capitalizeFirstLetter(str) {

    return str.replace(/\w\S*/g, function(text) {
        return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
    });
}