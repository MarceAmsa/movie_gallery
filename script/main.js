(function myMainFunction() {

    var movieGalleryInstance = new MovieGallery();


    var galleryContainer = document.getElementById('movieGalleryContainer');

    // Loads Gallery
    movieGalleryInstance.load(function stuffHasLoaded(jsonMovies) {

        // Browse all movies
        for (var i = 0; i < jsonMovies.Search.length; i++) {

            // Create 1 movie element
            var movieUIElement = createMovieElement(jsonMovies.Search[i], i);

            // Append newly created element into the DOM
            galleryContainer.appendChild(movieUIElement)
        }
    });


    function createMovieElement(movieInfo, movieElementIndex) {



        // Create 1 movie container
        var containingElement = document.createElement('div');
        containingElement.className = 'movieContainer';

        var containingPoster = document.createElement('div');

        containingPoster.className = 'posterContainer';
        containingElement.appendChild(containingPoster);


        var posterElement = document.createElement('img');
        posterElement.className = 'poster';
        posterElement.src = movieInfo.Poster;
        containingPoster.appendChild(posterElement);



        var circleElement = document.createElement('div');
        circleElement.className = 'placeholder';
        containingPoster.appendChild(circleElement);




        posterElement.onload = function hidePlaceholder () {
            circleElement.className += ' hidden';


            containingPoster.className += ' loaded';
        };


        var containingText = document.createElement('div');

        containingText.className = 'textContainer';
        containingElement.appendChild(containingText);


        // Create element containing the movie title
        var titleElement = document.createElement('h2');
        titleElement.className = 'titleContainer';
        // Insert the movie title
        titleElement.innerHTML = movieInfo.Title;
        // Add the movie title to the 1 movie container
        containingText.appendChild(titleElement);

        var yearElement = document.createElement('h1');
        yearElement.className = 'yearContainer';
        yearElement.innerHTML = movieInfo.Year;
        containingText.appendChild(yearElement);


        containingElement.style['animationDelay'] = (movieElementIndex * 0.4)+'s';


        // Send back the 1 Movie container
        return containingElement;


    }









})();
