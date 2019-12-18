$(document).ready(function () {
    var dots = $('[data-line="dot"]');
    var breakpoint = 1000;

    function segments() {
        var segments = $('[data-segment]');
        var btns = $('[data-btn]');
        var textWrappers = $('.top-line__text-wrapper');
        var texts = $('.top-line__text');
        var last = $('.line__segment--top').last();
        var lastData = last.find('[data-btn]').data('btn');

        function clearSegments() {
            segments.css('transform', 'none');
            btns.css('transform', 'none');
            if ($(window).innerWidth() > breakpoint) {
                textWrappers.css('width', '1px');
            }
            texts.css('opacity', '0');
            $('.line__part-popup').removeClass('active');
            last.css('transform', 'none');
            $('.top-line__overlay').removeClass('active');
        }
        
        $(window).on('resize', function () {
            clearSegments();
            btns.removeClass('opened');
            $('.btn-popup').removeClass('opened');
            $('body').removeClass('blocked');
            $('.btn-popup__overlay').removeClass('active');
        })
        
        $('.top-line__overlay .btn-popup__close').on('click', function () {
            clearSegments();
            btns.removeClass('opened');
        });


        btns.on('click', function () {
            var clicked = $(this).data('btn');
            var textWrapper = $(this).find('.top-line__text-wrapper');
            var date = $(this).find('.top-line__date').html();
            var heading = $(this).find('.top-line__heading-text').html();
            var text = $(this).find('.top-line__text').html();
            var dateInput = $('.btn-popup__date');
            var dateHeading = $('.btn-popup__heading');
            var dateText = $('.btn-popup__text');
            var popup = $('.btn-popup');

            if ($(window).innerWidth() > breakpoint) {
                clearSegments();

                if ($(this).hasClass('opened')) {
                    btns.removeClass('opened');
                    return;
                }

                btns.removeClass('opened');
                $(this).addClass('opened');
                
                if (clicked == lastData) {
                    segments.each(function () {
                        if ($(this).data('segment') <= clicked) {
                            $(this).css('transform', 'translateX(-700px)');
                            
                        } else {
                            $(this).css('transform', 'translateX(0)');
                        }
                    });
                } else {
                    segments.each(function () {
                        if ($(this).data('segment') <= clicked) {
                            $(this).css('transform', 'translateX(-350px)');
                        } else {
                            $(this).css('transform', 'translateX(350px)');
                        }
                    });
                }

                if (clicked == lastData) {
                    btns.each(function () {
                        if ($(this).data('btn') < clicked) {
                            $(this).css('transform', 'translateX(-700px)');
                        } else if ($(this).data('btn') == clicked) {
                            $(this).css('transform', 'translateX(-350px)');
                        } else if ($(this).data('btn') > clicked) {
                            $(this).css('transform', 'translateX(0)');
                        } else {
                            $(this).css('transform', 'none');
                        }
                    })
                } else {
                    btns.each(function () {
                        if ($(this).data('btn') < clicked) {
                            $(this).css('transform', 'translateX(-350px)');
                        } else if ($(this).data('btn') > clicked) {
                            $(this).css('transform', 'translateX(350px)');
                        } else {
                            $(this).css('transform', 'none');
                        }
                    })
                }
                
                textWrapper.css('width', '700px');
                texts.css('opacity', '1');
                $('.top-line__overlay').addClass('active');
            } else {
                popup.addClass('opened');
                dateInput.html(date);
                dateHeading.html(heading);
                dateText.html(text);
                $('body').addClass('blocked');
                $('.btn-popup__overlay').addClass('active');
            }

            $('.btn-popup__cross').on('click', function () {
                popup.removeClass('opened');
                $('body').removeClass('blocked');
                $('.btn-popup__overlay').removeClass('active');
            })

        });
    }

    function toLeft() {
        var btns = $('[data-line="popupbtn"]');
        
        $(window).on('resize', function () {
            $('.overlay').removeClass('active');
            $('.right-panel').removeClass('opened');
            $('.wrapper__wrapper').removeClass('moved');
            $('body').removeClass('blocked');
        });

        btns.on('click', function () {
            var color = $(this).data('color');
            var part = $(this).data('part');
            var partRight = $('.right-panel--' + color).find('[data-panel="' + part + '"]')[0];
            
            setTimeout(function () {
                partRight.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100);
            
            $('.right-panel--' + color).addClass('opened');
            $('.wrapper__wrapper').addClass('moved');
            $('.overlay').addClass('active');


            if ($(window).innerWidth() > breakpoint) {

            } else {
                $('body').addClass('blocked');
            }
        });

        $('.right-panel__back').on('click', function () {
            $('.overlay').removeClass('active');
            $('.right-panel').removeClass('opened');
            $('.wrapper__wrapper').removeClass('moved');
            $('body').removeClass('blocked');
        });

        $('.overlay').on('click', function (e) {
            $('.overlay').removeClass('active');
            $('.right-panel').removeClass('opened');
            $('.wrapper__wrapper').removeClass('moved');
            $('body').removeClass('blocked');
        });
    }
    
    function bottomMore () {
        $('#bottom-more').on('click', function () {
            $('.more-info').addClass('opened');
            $('body').addClass('blocked');
        })
        
        $('.more-info__close').on('click', function () {
            $('.more-info').removeClass('opened');
            $('body').removeClass('blocked');
        });
    }

    segments();
    toLeft();
    bottomMore();
})