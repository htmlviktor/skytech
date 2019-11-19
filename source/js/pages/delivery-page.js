import $ from 'jquery';

export default class DeliveryPage {
    init() {
        this._initialDom();
    }

    _initialDom() {
        $('.main-delivery__more-text')
            .click(function() {
                if ($(this).text() === 'Подробнее') {
                    $(this).text('Скрыть');
                } else {
                    $(this).text('Подробнее');
                }
                $(this)
                .prev()
                .find('.main-delivery__item-text-hidden')
                .slideToggle(400);
            })
    }
}