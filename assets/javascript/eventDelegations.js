// Event Delegation

$(".row").on("click", "proImage", function(){
    $(".proImage").html(".productSelected");
    console.log(".row");
});