(function myMainFunction () {

    /* TEST */
    // var req = new XMLHttpRequest();
    // req.open('GET', 'http://localhost/movie_gallery/movie_data/movies.json', false);
    // req.send (null);
    // if (req.status == 0)
    //     dump(req.responseText);


    var ajaxhttp = new XMLHttpRequest();
    var ajaxUrl = "http://localhost:63342/movie_gallery/movie_data/movies.json";

    ajaxhttp.open("GET", ajaxUrl, true);

    ajaxhttp.onreadystatechange = function () {

        if (ajaxhttp.readyState === 4 && ajaxhttp.status === 200) {
            var resText = JSON.parse(ajaxhttp.responseText);
            // var randQuoteNr = Math.floor(Math.random() * resText.collection.length);

            document.getElementById('galleryData').innerHTML = ajaxhttp.responseText;
            console.log(resText.Search[2].Title);
        }
    };

    ajaxhttp.send(null);

}) ();
