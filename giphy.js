$("#btn").on("click", function () {
    if ($("#userinput").val() === "") {
        return false;
    }

    var newButton = $("<button>")
    newButton.html($("#userinput").val().trim())
    newButton.addClass("createdBtn")

    $("#btnLocation").append(newButton)
})

function api() {
    var search = $(this).html()
    var query = "https://api.giphy.com/v1/gifs/search?api_key=DUMQV1pb5YJTYnCB0R6E963zFX9jXZS4&q=" + search + "&limit=10"

    $.ajax({
        url: query,
        method: "GET"
    }).then(function(response){
        console.log(response)
        $("#giphyLocation").empty()
    })
}
$(document).on("click", ".createdBtn", api)


