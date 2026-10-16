var foldButtons = document.getElementsByClassName("fold-button");

for (var i = 0; i < foldButtons.length; i++) {
    foldButtons[i].addEventListener("click", function(event) {

        var post = event.target.parentElement;

        if (post.classList.contains("folded")) {
            post.classList.remove("folded");
            event.target.innerHTML = "свернуть";
        } else {
            post.classList.add("folded");
            event.target.innerHTML = "развернуть";
        }

    });
}