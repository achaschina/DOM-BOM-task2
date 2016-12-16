
var onClickLeft = function (event) {
    var $el = event.target;
    alert('CLICK! Target: ' + $el.id + '. Елемент до якого дійшло всплиття події і на ньому виконується обробник this: ' + this.id);
};

box1.onclick = onClickLeft;
box2.onclick = onClickLeft;
box3.onclick = onClickLeft;


var onClickRight = function (event) {
    var $el = event.target;
    event.stopPropagation();
    alert('CLICK! Target: ' + $el.id);
};

box11.onclick = onClickRight;
box21.onclick = onClickRight;
box31.onclick = onClickRight;

var onClickLink1 = function (event) {
    var elem = event.target;
    event.preventDefault();
    alert('preventDefault() включено! Ти не перейшов по ссилкі.');
};

link1.onclick = onClickLink1;