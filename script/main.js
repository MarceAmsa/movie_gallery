(function myMainFunction() {

    var movieGalleryInstance = new MovieGallery();


    var galleryContainer = document.getElementById('movieGalleryContainer');

    // Loads Gallery
    movieGalleryInstance.load(function stuffHasLoaded(jsonMovies) {

        // Browse all movies
        for (var i = 0; i < jsonMovies.Search.length; i++) {

            // Create 1 movie element
            var movieUIElement = createMovieElement(jsonMovies.Search[i]);

            // Append newly created element into the DOM
            galleryContainer.appendChild(movieUIElement)
        }
    });


    function createMovieElement(movieInfo) {



        // Create 1 movie container
        var containingElement = document.createElement('div');
        containingElement.className = 'movieContainer';

        var containingElement2 = document.createElement('div');

        containingElement2.className = 'posterContainer';
        containingElement.appendChild(containingElement2);


        var posterElement = document.createElement('img');
        posterElement.className = 'poster';
        // posterElement.src = movieInfo.Poster;
        containingElement2.appendChild(posterElement);



        var circleElement = document.createElement('div');
        circleElement.className = 'placeholder';
        containingElement2.appendChild(circleElement);



        // posterElement.onload = function hidePlaceholder () {
        //
        //     // var elem = document.getElementsByClassName('placeholder');
        //     var posterContainer= document.getElementsByClassName('posterContainer');
        //     circleElement.parentNode.removeChild(circleElement);
        //
        //     posterContainer.removeAttribute("style");
        //
        //
        //
        // };


        // Create element containing the movie title
        var titleElement = document.createElement('h2');
        titleElement.className = 'titleContainer';
        // Insert the movie title
        titleElement.innerHTML = movieInfo.Title;
        // Add the movie title to the 1 movie container
        containingElement.appendChild(titleElement);

        var yearElement = document.createElement('h1');
        yearElement.className = 'yearContainer';
        yearElement.innerHTML = movieInfo.Year;
        containingElement.appendChild(yearElement);


        // Send back the 1 Movie container
        return containingElement;


    }









})();
