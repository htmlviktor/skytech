import $ from 'jquery';

export default class PaymentsPage {
    init() {
        this._initialDom();
    }

    _initialDom() {
        $('.payments__item-description-more')
            .click(function() {
                if ($(this).text() === 'Подробнее') {
                    $(this).text('Скрыть');
                } else {
                    $(this).text('Подробнее');
                }
                $(this)
                .prev()
                .toggle(400);
            });
    }
}