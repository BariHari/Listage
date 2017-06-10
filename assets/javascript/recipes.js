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

// IDS:
// ids suck so were sticking to classes

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



$(".searchForm").on("click", function(){

	event.preventDefault();

	var recipeSearch = $(".userInput").val();
	var queryURL = "https://cors-bcs.herokuapp.com/https://food2fork.com/api/search?key=404bedc61bdcf36a33ddcac7ad6058ae&q=" + recipeSearch;
	console.log(recipeSearch);
	console.log(queryURL);

	$.ajax({
		url: queryURL

	}).done(function (response) {
		console.log(response);

		$(".recipeOptions1").html("<img src=" + "'" + response.recipes["1"].image_url + "'" + ">" + "<br>" + response.recipes["1"].title);
		$(".recipeOptions2").html("<img src=" + "'" + response.recipes["2"].image_url + "'" + ">" + "<br>" + response.recipes["2"].title);
		$(".recipeOptions3").html("<img src=" + "'" + response.recipes["3"].image_url + "'" + ">" + "<br>" + response.recipes["3"].title);

	})

});


















