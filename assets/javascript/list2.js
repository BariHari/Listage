// Pseudo Code

// Basic HTML
// Document.ready

// on click of search button on user input form
// Get user input
// Display searched items in "Aopend: Products"
// Enable scroll arrows


// on click of appended product search item
// Append to middle section/row

// Questions to calculate form
// user input on how long until they want it back on their list
// Maybe have an "ADD NOW" button(?) and a "1 TIME ONLY ADD" button (?)


// on click function when user adds products
// Wait for the selected amount of time to pass
// Append product to Grocery List row
// + button to add grocery item to list

// If the users search gives no results
// Append word to list

//----------------------------------------------------------------------------------------------------------------------

// List of variables and classes/Ids so we all use the same ones

// VARIABLES:
// var user-input (the users search)
// var queryURL (the API url)
// var productOptions (the first row of search results)
// var p (p tag to store the item names)
// var productSelected (second row where the users chosen product shows up)
// var groceryList (when time is up, the product appends to grocery list div)
// var timeOptions (the options of time the user has)
// var time (time user has chosen until it appends to the list)
// var timesUp (when the time is up)
// var coupons (the coupons we find)

// CLASSES:
// class = searchForm
// class = productOptions (img class)
// class = productSelected (img class)
// class = addTime (the amount of time the user selected)
// class = newProduct (when a new product is added, we prepend it to the list)


//----------------------------------------------------------------------------------------------------------------------

// THINGS TO REMEMBER:

// TEST EVERYTHING
// CONSOLE LOG EVERYTHING

//----------------------------------------------------------------------------------------------------------------------

// WALMART API DOCS

/* PARAMETERS
 apiKey	Your API access key.
 format	Type of response required, allowed values [json, xml]. Default is json.
 ids	Comma separated list of item ids

 API KEY: 3xy3dz4kywkwwkkxtjsqv9fj*/


// WIKIPEDIA API DOCS

// PARAMETERS

// GOOGLE MAPS API

// PARAMETERS AND RATE LIMIT

/* RATE LIMIT: 25,000 map loads per 24 hours */


//----------------------------------------------------------------------------------------------------------------------


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
                //$(".productOptions").append(div);
            }

            // Calling out the function
            createdivs;
        });

        // Show Product Options Title
        $('#productsOptionTitle').removeClass('hideOptions');



});



