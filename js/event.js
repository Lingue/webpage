function menu_open(){

    var menu = $('#hidden_setting_menu');
    var setting = menu.css('display');
    if(setting === 'none'){
        menu.css('display', 'block');
    }else{
        menu.css('display', 'none');
    }

    // var menu = document.getElementById("hidden_setting_menu");
    // var setting = menu.getAttribute('style');
    // console.log(setting);


    // if(menu.getAttribute('display')){
    //
    // }
}