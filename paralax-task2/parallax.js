window.addEventListener('scroll', function (e) {
    var topDistance = document.body.scrollTop;
    var layers = document.querySelectorAll("[data-type='parallax']");
    for (var i = 0; i < layers.length; i++) {
        var depth = layers[i].getAttribute("data-depth");
        var movement = -(topDistance * depth);
        var translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layers[i].style.transform = translate3d;
    }
})