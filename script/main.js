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


        var posterElement = document.createElement('img');
        posterElement.className = 'posterContainer';
        posterElement.src = movieInfo.Poster;
        containingElement.appendChild(posterElement);


        // Create element containg the movie title
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
