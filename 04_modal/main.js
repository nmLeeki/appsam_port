$(() => {
    $('#modal_btn').on('click', function () {
        $('.modal').addClass('active');
    });
    $('.close_btn').on('click', function () {
        $('.modal').removeClass('active');
    });
});
