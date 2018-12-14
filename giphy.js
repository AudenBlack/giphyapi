$(document).ready(function() {
    // Have starter buttons that allow the user to see example gifs.
    var topics = ["monkeys", "lions", "bears"]
    console.log(topics)
        $.each(topics, function(i){
            var newButton = $("<button>")
            newButton.text(topics[i])
            newButton.addClass("createdBtn")
        
            newButton.attr('value', topics[i])
            $("#btnLocation").append(newButton)
        })



    // go through the array and create buttons for each item in the array


$("#btn").on("click", function (event) {
    event.preventDefault()
    console.log('button pressed')
    if ($("#userinput").val() === "") {
        return false;
    }
    
    var newButton = $("<button>")
    newButton.text($("#userinput").val().trim())
    newButton.addClass("createdBtn")

    newButton.attr('value', $("#userinput").val().trim())

    $("#btnLocation").append(newButton)

    topics.push($("#userinput").val().trim())
    console.log(topics)
})

function api(e) {
    e.preventDefault();
    console.log('api trigger')
    var search = $(this).val()
    var query = "https://api.giphy.com/v1/gifs/search?api_key=DUMQV1pb5YJTYnCB0R6E963zFX9jXZS4&q=" + search + "&limit=10"

        $.ajax({
            url: query,
            method: "GET"
        }).then(function(response){
            console.log(response)
            $.each(response.data, function (i){
                var giphs = $("<div class='giphDiv'>")
                giphs.append($("<img>").attr({"src": response.data[i].images.original.url,
                                                "data-animate": response.data[i].images.original.url,
                                                "data-still": response.data[i].images.original_still.url,
                                                "data-state": "animate",
                                                "class":"animeChang"}))
                giphs.prepend($("<p class='label'>").html("Title: " + response.data[i].title + "<br>" + "Rating: " + response.data[i].rating.toUpperCase()))
                $("#giphyLocation").prepend(giphs)
            })
        })
}
$(document).on("click", ".createdBtn", api) 
$(document).on("click", ".animeChang", function(event) {
event.preventDefault()
var state = $(this).attr("data-state")
var stillImage = $(this).attr("data-still")
var animatedImage = $(this).attr("data-animate")
// to switch back and forth between still and animate. 
// find out which state that the giph is in. THEN switch it to the other
// if the state is equal to the other switch it
if (state === "animate") {
    $(this).attr("data-state", "still")
    $(this).attr("src", stillImage)
}
else {$(this).attr("data-state", "animate")
    $(this).attr("src", animatedImage)}
}) 
   // in order to switch to data-still I need to change the src from original since animate is what src is set to do originally.
   

//  Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.


   

});




