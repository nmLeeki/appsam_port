$(() => {
    $('.tabMenu > div').on('click', function () {
        console.log('asd');
        var idx = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().next().children().eq(idx).addClass('active').siblings().removeClass('active');
    });
});
