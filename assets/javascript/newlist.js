
// Document ready function
$(document).ready (function() {
    console.log("ready");

    // Global Variables
    // Variable used for local Storage
    var $productSelected = $(".productSelected"), productSelected;
    var $savelist = $(".savelist"), savelist;


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

    var userval = $(".userInput").val();

    // On click function for the search button
    $(".searchForm").on("click", function(){

        //Animate scroll
        $('html,body').animate({
        scrollTop: $("#scrollmiddlesection").offset().top},
        'slow');

        // Prevent default browser settings
        event.preventDefault();
        //console.log("search button working");

        // Creating variables to pull the query url from the user-input class

        // Walmart API
        var queryURLWal = "https://cors-bcs.herokuapp.com/https://api.walmartlabs.com/v1/search?query=" + userval + "&format=json&apiKey=3xy3dz4kywkwwkkxtjsqv9fj"; //&lsPublisherId={Your LinkShare Publisher Id}"
        console.log(queryURLWal);

        // Wikipedia API
        var queryURLWiki = "https://cors-bcs.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&format=json&prop=images&titles=" + userval;
        console.log(queryURLWiki);


        console.log(queryURLWiki);
        var responses = [];
        var query = "groceries";
        var jsonparse = JSON.parse(localStorage.getItem("groceries"));


        // Pulling AJAX request from Walmart API
        $.ajax({
            url: queryURLWal
        }).done(function (response) {
            var categories = [];

            console.log("THISREPONSEHERE",response);

            if (jsonparse) {

                for (var i = 0; i < jsonparse.length; i++) {

                    categories.push(jsonparse[i].category);
                    responses.push(jsonparse[i]);
                }
            }

            // Only appending if there's a new item
            var reduced = Object.keys(categories.reduce((p,c) => (p[c] = true,p),{}));


            if (reduced.indexOf(userval) == -1) {

                for (var i = 0; i < response.items.length; i++) {

                        var temp = response.items[i];
                        var items = {
                            name: temp.name,
                            mediumImage: temp.mediumImage,
                            category: $(".userInput").val()
                        };

                    responses.push(items);
                    localStorage.setItem(query, JSON.stringify(responses));
                }
            }

            // Transferring content into HTML
            function createdivs(len) {

                var div = $("<div class='divproduct'>");

                var img = $("<img class='proImage'>");
                img.attr("src", response.items[len].mediumImage);
                div.append(img);

                var p = $("<p>");
                p.text(response.items[len].name);
                div.append(p);

                $(".productOptions").append(div);

            }

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

            /*// Transfer content to HTML
            $(".productOptions1").html("<img src=" + "'" + response.query.pages[7089].images["0"].title + "'"+ ">" + "<br>" + response.query.pages[7089].title);
            $(".productOptions2").html("<img src=" + "'" + response.query.pages[7089].images["1"].title + "'"+ ">" + "<br>" + response.query.pages[7089].title);
            $(".productOptions3").html("<img src=" + "'" + response.query.pages[7089].images["2"].title + "'"+ ">" + "<br>" + response.query.pages[7089].title);*/

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

            // if statement to determine if the browser has local storage
            // if (window.localStorage) {

            //     // show the product selected when the time runs out
            //     productSelected++;

            //     // set the item
            //     window.localStorage.setItem('productSelected', productSelected);

            //     // push it to html
            //     $productSelected.html(productSelected);

            //     /*productSelected = window.localStorage.getItem('productSelected');

            //      if (typeof productSelected === 'object') {

            //      productSelected = 0;

            //      }*/
            // }
                // if (window.localStorage) {
                //     window.localStorage.setItem('savelist', savelist);
                //     $savelist.html(savelist)
                //     }


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
                    // if statement where we get itemm when time left === 0
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