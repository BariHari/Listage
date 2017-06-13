
// Document ready function
$(document).ready (function() {
    console.log("ready");


    $("#download-button").on("click", function(){

            // Prevent default browser settings
            event.preventDefault();
            console.log(this);

            // Showing the #listbody ID
            $('#listbody').removeClass('hide');

            //Animate scroll
            $('html,body').animate({
            scrollTop: $(".searchbarscroll").offset().top},
            'slow');

    });

    // On click function for the search button
    $(".searchForm").on("click", function(){

        //Animate scroll
        $('html,body').animate({
        scrollTop: $("#scrollmiddlesection").offset().top},
        'slow');

        // Prevent default browser settings
        event.preventDefault();

        // Creating variables to pull the query url from the user-input class

        // Walmart API
        var productOptionsWal = $(".userInput").val();
        var queryURLWal = "https://cors-bcs.herokuapp.com/https://api.walmartlabs.com/v1/search?query=" + productOptionsWal + "&format=json&apiKey=3xy3dz4kywkwwkkxtjsqv9fj"; //&lsPublisherId={Your LinkShare Publisher Id}"
        console.log(queryURLWal);

        // Wikipedia API
        var productOptionsWiki = $(".userInput").val();
        var queryURLWiki = "https://cors-bcs.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=" + productOptionsWiki;
        console.log(queryURLWiki);

        // Variables

        // Empty array to push the response objects into
        var responses = [];
        var query = "groceries";
        var userval = $(".userInput").val();
        var jsonparse = JSON.parse(localStorage.getItem("groceries"));


        // Pulling AJAX request from Walmart API
        $.ajax({
            url: queryURLWal
        }).done(function (response) {

            // Empty array to push the categories into for seperation
            var categories = [];

            console.log("THISREPONSEHERE",response);

            // If statement where if the browser has local storage it will:
            if (jsonparse) {

                // for loop through the jsonparse variable
                for (var i = 0; i < jsonparse.length; i++) {

                    // push it into the emoty arrays
                    categories.push(jsonparse[i].category);
                    responses.push(jsonparse[i]);
                }
            }

            // Only appending if there's a new item
            var reduced = Object.keys(categories.reduce((p,c) => (p[c] = true,p),{}));

            // Filters out the same items
            if (reduced.indexOf(userval) == -1) {

                // For loop to go through the response array
                for (var i = 0; i < response.items.length; i++) {

                        // Creating variables and objects to create the response output
                        var temp = response.items[i];
                        var items = {
                            name: temp.name,
                            mediumImage: temp.mediumImage,
                            category: $(".userInput").val()
                        };

                    // pushing responses into the 'items' variable
                    responses.push(items);

                    // setting and stringifying the response
                    localStorage.setItem(query, JSON.stringify(responses));
                }
            }

            // Transferring content into HTML
            function createdivs(len) {

                // Creating the div in html
                var div = $("<div class='divproduct'>");

                // Creating the img and class in html
                var img = $("<img class='proImage'>");
                // Giving the img an attribute
                img.attr("src", response.items[len].mediumImage);
                // appending the img to the div
                div.append(img);

                // Creating a p tag for the title of the product
                var p = $("<p>");
                p.text(response.items[len].name);
                div.append(p);

                // Appending the productoptions class to the div
                $(".productOptions").append(div);
            }

            // Calling out the function
            createdivs("0");
            createdivs("1");
            createdivs("2");
        });



        // Show Product Options Title
        $('#productsOptionTitle').removeClass('hideOptions');

        // Pulling AJAX request from Wikipedia API
        
        $.ajax({
            url: queryURLWiki
        }).done(function (response) {
            //console.log(response);

        });
    });

    // When the user clicks on a product options 1, it will append to the productSelected class
    $(document).on("click", ".divproduct", function(){


        //Animate scroll
        $('html,body').animate({
        scrollTop: $(".scrollsection").offset().top},
        'slow');
        
        //The drop down buttons with the times will appear
        $('#dropdownbuttondisplay').removeClass('dropdownbuttonhide');

        //The product that was selected will append to the section where the user picks the time
        //"this" is referring to the .divproduct/the picture that was
        $(".productSelected").append(this);

        //"What do you need?" title will appear
        $('#selectedOptionTitle').removeClass('hideSelected');

        // variable to store 'this'
        var that = this;
        //console.log(this);

        // Countdown timer on click function from the drop down choice #1
        $("#timer1").on("click", function(){
            var timeLeft = 3;
            var timerId = setInterval(countdown, 1000);

            function countdown() {
                    if (timeLeft === 0) {
                        clearTimeout(timerId);
                        $("#listItems").append(that);
                        $('#addedGroceryTitle').removeClass('hideGrocery');
                        //console.log(this);

                        //});

                    } else {
                        span = document.getElementById("timer");
                        timeLeft--;
                        span.innerHTML = timeLeft;
                        console.log(timeLeft);
                    }
            }
        });

        // Countdown timer on click function from the drop down choice #2
        $("#timer2").on("click", function(){
            var timeLeft = 7;
            var timerId = setInterval(countdown, 1000);

            function countdown() {
                if (timeLeft === 0) {
                    
                    clearTimeout(timerId);
                    $("#listItems").append(that);
                    $('#addedGroceryTitle').removeClass('hideGrocery');
                    //console.log(this);


                } else {
                    span = document.getElementById("timer");
                    timeLeft--;
                    span.innerHTML = timeLeft;
                    console.log(timeLeft);
                }
            }
        });


        // Countdown timer on click function from the drop down choice #3
        $("#timer3").on("click", function(){
            var timeLeft = 10;
            var timerId = setInterval(countdown, 1000);

            function countdown() {
                if (timeLeft === 0) {
                    
                    clearTimeout(timerId);
                    $("#listItems").append(that);
                    $('#addedGroceryTitle').removeClass('hideGrocery');
                    //console.log(this);
                    

                } else {
                    span = document.getElementById("timer");
                    timeLeft--;
                    span.innerHTML = timeLeft;
                    console.log(timeLeft);
                }
            }
        })


    });


});