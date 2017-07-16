const fs = require('fs');

var searchFile = {

    runSearch: function(countrySearch) {
        fs.readFile('countries.json', function(err, data) {

            var countries = JSON.parse(data);
            countries.forEach(function(country) {

                if (countrySearch) {
                    while (countrySearch == country['name']) {
                        for (var key in country) {
                            console.log(`${'Database shows '}: ${country[key]}`);
                        }
                        countrySearch = null;
                    }
                }
            })

            if (err == null && isNaN(countrySearch)) {
                var searchError = '';
                searchError = new Error('Sorry, you did not enter a valid country. Try again');
                console.log(searchError);
            }
        })
    }
}

module.exports = searchFile;