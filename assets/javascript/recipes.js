

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

    		$(".recipeOptions").html("<img src=" + "'" + response.recipes.image_url + "'" + ">" + "<br>" + response.recipes.title);
    		$(".recipeOptions").html("<img src=" + "'" + response.recipes.image_url + "'" + ">" + "<br>" + response.recipes.title);
    		$(".recipeOptions").html("<img src=" + "'" + response.recipes.image_url + "'" + ">" + "<br>" + response.recipes.title);

    	})

    })



















