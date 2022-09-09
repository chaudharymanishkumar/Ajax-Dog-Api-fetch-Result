/* the ajax call has been made with three different approach for the same task */

function fetchRandomDogImage(){
    //basic implementation of ajax 
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;
        $('#dog-image').attr('src',imageUrl);
    }

    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhrRequest.send('')
}

function fetchRandomDogImageUsingjQuery(){
    //using jQuery method
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function(data) {
            var imageUrl = data.message;
            $('#dog-image').attr('src',imageUrl);
        }
    })
}

function fetchRandomDogImageUsingjQueryGet(){
    //using get method of jQuery
    $.get('https://dog.ceo/api/breeds/image/random',function(data){
        var imageUrl = data.message;
        $('#dog-image').attr('src',imageUrl);
    })
}

// $('#fetch-dog-image-btn').click(fetchRandomDogImage);
// $('#fetch-dog-image-btn').click(fetchRandomDogImageUsingjQuery);
$('#fetch-dog-image-btn').click(fetchRandomDogImageUsingjQueryGet);