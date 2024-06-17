window.onload = function() {
    var btns = document.getElementsByClassName('btn'),
        imgs = document.getElementsByClassName('box')[0].getElementsByTagName('img');

    var index = 2,
        front = 0,
        back = 0,
        offset = false,
        timer = setInterval(timerFunc, 5000);

    function timerFunc() {
        if (offset) {
            return;
        } else {
            click(1);
        }
    }

    for (var i = 0; i < btns.length; i++) {
        (function(i) {
            btns[i].onclick = function() { click(i); };
        })(i);

        btns[i].onmouseover = function() {
            offset = true;
        };
        btns[i].onmouseout = function() {
            offset = false;
        };
    }

    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onmouseover = function() {
            offset = true;
        };
        imgs[i].onmouseout = function() {
            offset = false;
        };
    }

    function click(x) {
        imgs[index].classList.remove('active');
        if (x === 0) {
            if (--index < 0) index = imgs.length - 1;
            front = back = index;
            if (++front >= imgs.length) front = 0;
            if (--back < 0) back = imgs.length - 1;
            imgs[front].classList.add('front');
            imgs[back].classList.add('back');
        } else {
            if (++index >= imgs.length) index = 0;
            front = back = index;
            if (++front >= imgs.length) front = 0;
            if (--back < 0) back = imgs.length - 1;
            imgs[front].classList.remove('front');
            imgs[back].classList.remove('back');
        }
        imgs[index].classList.add('active');
    }
};