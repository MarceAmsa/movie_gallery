/**
 * Created by marcela_salas on 06/02/17.
 */
var MovieGallery = function () {

    function loadJSONMoviesDescription(onMovieListReceived) {
        var ajaxhttp = new XMLHttpRequest();
        var ajaxUrl = "./movie_data/movies.json";

        ajaxhttp.open("GET", ajaxUrl, true);

        ajaxhttp.onreadystatechange = function () {

            if (ajaxhttp.readyState === 4 && ajaxhttp.status === 200) {
                var JSONMovies = JSON.parse(ajaxhttp.responseText);
                // var randQuoteNr = Math.floor(Math.random() * resText.collection.length);
                // document.getElementById('galleryData').innerHTML = ajaxhttp.responseText;


                onMovieListReceived(JSONMovies);


                // for (i = 0; i < resText.Search.length; i++) {
                //     console.log(resText.Search[i].Title);
                //     // gallery.innerHTML = resText.Search[i].Title;
                //
                // }

            }
        };
        ajaxhttp.send(null);
    }

    return {
        load: function (onDataLoaded) {
            console.log('Calling load function');
            loadJSONMoviesDescription(onDataLoaded)
        }
    }

};



(function () {

    function sayHello(name, callbackFunction, furtherText){

        callbackFunction('Hello '+name+' '+furtherText, 2, 3);
    }


    var someStringValue = 'oh nein';

    sayHello(
        'Simon',
        function someFct() {


            console.log(someStringValue);
        },
        'How are you ?'
    )



})();