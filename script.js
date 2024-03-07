document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.getElementsByClassName('toggle-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            var targetId = this.getAttribute('data-target');
            var target = document.getElementById(targetId);
            if (target.style.display === "none" || target.style.display === "") {
                target.style.display = "block";
                this.innerText = "Hide Details";
            } else {
                target.style.display = "none";
                this.innerText = "Show Details";
            }
        });
    }
});
