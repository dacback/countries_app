const fs = require('fs');

var searchFile = {

    runSearch: function() {
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
    }
}

module.exports = searchFile;