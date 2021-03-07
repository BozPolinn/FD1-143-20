$(document).ready(function () {
    $('#nav').on('click', 'a', function (e) {
        let li = $('.gallery li')
        li.each(function(index, elem){
            $(elem).css('display','block');
        });

        e.preventDefault();
        let id = e.currentTarget.id;
        li.each(function(index, elem){
            if (id === 'all'){
                $(elem).css('display','block');
            }
            else if(id !== elem.dataset.collection){
                $(elem).css('display','none');
            }
        });
    });
});
