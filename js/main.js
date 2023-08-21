$(function(){
    var btn = $('.cart-btn');
    $('#check').on('click',function(){
        if(this.checked){
            btn.html('<a href="">カートに入れる</a>');
            $('.cart-btn').css('opacity','1');
        } else {
            btn.html('カートに入れる');
            $('.cart-btn').css('opacity','0.5');
        }
    })
})