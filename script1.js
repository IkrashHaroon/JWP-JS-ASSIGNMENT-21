// 1
document.getElementById("alertLink").onclick = function () {
    alert("Link clicked");
};

// 2
var mobiles = document.getElementsByClassName("mobile-img");
for (var i = 0; i < mobiles.length; i++) {
    mobiles[i].onclick = function () {
        alert("You clicked mobile image");
    };
}

// 3
var deleteBtns = document.getElementsByClassName("deleteBtn");
for (var i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].onclick = function () {
        this.parentNode.parentNode.style.display = "none";
    };
}

// 4 ✅ FIXED ID
var img = document.getElementById("image-hover");

img.onmouseover = function () {
    img.src = "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg";
};

img.onmouseout = function () {
    img.src = "https://bunny-wp-pullzone-3xue3q6yzy.b-cdn.net/wp-content/uploads/2024/11/EM-BLOG-what-does-a-data-scientist-do-2054965214.png";
};

// 5 ✅ FIXED BUTTON IDs
var count = 0;

document.getElementById("increaseBtn").onclick = function () {
    count = count + 1;
    document.getElementById("counter").innerHTML = count;
};

document.getElementById("decreaseBtn").onclick = function () {
    count = count - 1;
    document.getElementById("counter").innerHTML = count;
};
