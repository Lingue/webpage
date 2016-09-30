/**
 * Created by whcks on 2016-09-24.
 */

var par = document.getElementById('main-first-inner');


function createItem(dex){
    var con = document.createElement('img');
    con.src = "./image/mong.jpg";
    con.className = "main-first-image";

    var wid = 100 + (dex * 60) + 'px';
    con.setAttribute("width",wid);

    con.setAttribute('style', 'border:solid 2px gold')

    return con;
}
var start = (function (){
    var count = 3;
    while(count){
        if(count == 3){
            var top = createItem(count);
            top.id = "center";
            top.style.zIndex = "1000";
            par.appendChild(top);
        }
        else if(count == 2){
            var orn1 = createItem(count);
            orn1.style.right = "80px";
            orn1.style.zIndex = "995";
            par.appendChild(orn1);

            var wen1 = createItem(count);
            wen1.style.left = "80px";
            wen1.style.zIndex = "995";
            par.insertBefore(wen1, par.firstElementChild);
        }
        else{
            var orn2 =  createItem(count);
            orn2.style.right = "120px";
            orn2.style.zIndex = "900";
            par.appendChild(orn2);

            var wen2 = createItem(count);
            wen2.style.left = "120px";
            wen2.style.zIndex = "900";
            par.insertBefore(wen2, par.firstElementChild);
        }
        count--;
    }
})();

var moveRight = (function () {

})();

var moveLeft = (function () {

})();