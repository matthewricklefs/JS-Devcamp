$(document).ready(function() {

    $('div_1').slideDown(2000, function(){
        $('Section').fadeIn(1000);
        $('.wrapper').fadeIn(1000);
        $('.btn_1').fadeIn(1000);
    });

    $('btn_1').click(function(){
        $('.div_1').slideUp(2500);
        $('.Box').fadeIn(4000);
        $('.wrapper').fadeOut(2000);
    });

    var click = 1;

    $('.btn').click(function(){
        var images = [ "url('1.jpg')", "url('2.jpg')", "url('3.jpg')" ],
            title = ["Beef Burger", "Beef Grills", "Seafood"],
            main_course = ['1 burger 200g', 'grills 250g', '2 fish 200g'  ],
            content_1 = ['1 medium fries', '1 salad', '1 medium fries'],
            content_2 = ['1 pepsi', '1 coconut lemonade', '1 sweet tea'],
            content_3 = ['1 salad', '', ''],
            price = ['$10', '12$', '$15'];
    if (click > images.length - 1) {
        click = 0;
    }

    });


};