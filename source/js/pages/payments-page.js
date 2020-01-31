import $ from 'jquery';

export default class PaymentsPage {
    init() {
        this._initialDom();
    }

    _initialDom() {
        $('.payments__item-description-more')
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
                        .css('max-height', '70px');
                }

            })
    }
}