$(document).ready(function () {
    $(document.body).on('click', '.menu_icon', function() {
        $('#menu').css('display', 'block');
        $(this).css('display', 'none');
        $('.close_menu').css('display', 'block');
    });
    
    $(document.body).on('click', '.close_menu', function (){
        $('#menu').css('display', 'none');
        $(this).css('display', 'none');
        $('.menu_icon').css('display', 'block');
    });
});
