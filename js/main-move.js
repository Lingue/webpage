/**
 * Created by whcks on 2016-09-24.
 */

function moveRight() {
    var center = document.getElementById('center');

    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
            elem.style.width = 50 + pos/5 + 'px';
        }
    }
}

function moveLeft() {
    var center = document.getElementById('center')
}
