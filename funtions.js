$(document).ready(() => {
    $(".ratingNumber").each(() => {
        $(this).on('click', function() {
            const isActive = $(this).find('.active');
            if (isActive.length === 0) {
                $(this).addClass(".active");
            } else {
                $(this).removeClass(".active");
            }
        }.bind(this))
    })
})