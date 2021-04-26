// Open the Gallery
function openGallery() {
    document.getElementById("myGallery").style.display = "block";
}

// Close the Gallery
function closeGallery() {
    document.getElementById("myGallery").style.display = "none";
}

var pictureIndex = 1;
displayPicture(pictureIndex);

// Next/previous controls
function indexUpdate(n) {
    displayPicture(pictureIndex += n);
}

// Thumbnail image controls
function currentPicture(n) {
    displayPicture(pictureIndex = n);
}

function displayPicture(n) {
    var pictures = document.getElementsByClassName("picture");
    var thumbnails = document.getElementsByClassName("thumbnail");
    var index = document.getElementById("index");
    if (n > pictures.length) {
        pictureIndex = 1
    }
    if (n < 1) {
        pictureIndex = pictures.length
    }
    // Hidden the previous picture
    for (i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    pictures[pictureIndex - 1].style.display = "flex";
    thumbnails[pictureIndex - 1].className += " active";
    // Show the description
    index.innerHTML = thumbnails[pictureIndex - 1].alt;
}
