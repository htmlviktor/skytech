import $ from 'jquery';

export default class DeliveryPage {
    init() {
        this._initialDom();
    }

    _initialDom() {
        $('.main-delivery__more-text')
            .click(function () {
                if ($(this).text() === 'Подробнее') {
                    $(this).text('Скрыть');
                    $(this)
                        .prev()
                        .css('max-height', '200px');
                } else {
                    $(this).text('Подробнее');
                    $(this)
                        .prev()
                        .css('max-height', '90px');
                }

            })
    }
}