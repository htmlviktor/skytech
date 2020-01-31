import $ from 'jquery';
import {submitHandler} from './APImodal';

export default class Modals {
    constructor() {
        this._onFormSubmit = this._onFormSubmit.bind(this);
        this._onModalRemove = this._onModalRemove.bind(this);
    }
    init() {
        this._initializeModalForBuy();
    }

    _initializeModalForBuy() {
        const susscb = this._onFormSubmit;

        $('.card--buy-js').click(this._onModalShow);
        $('.form-modal__close--main').click(this._onModalRemove);
        $('.form-modal').on('submit', function(evt) {
            evt.preventDefault();
            submitHandler(this.id, susscb);
        })
        $('.form-modal__close--done').click(this._onModalRemove);
    }

    modalRemove() {
        $('.form-modal-wrapper').fadeOut(500, () => {
            $('.form-modal-done').show();
        });
    }

    _onModalRemove() {
        $('.overlay--form-modal').removeClass('overlay--show');
        $('.form-modal-wrapper').fadeOut();
        $('.form-modal-done').fadeOut();
    }
    _onModalShow(evt) {
        evt.preventDefault();
        $('.overlay--form-modal').addClass('overlay--show');
        $('.form-modal-wrapper').fadeIn();
    }
    
    _onFormSubmit() {
        this.modalRemove();
    }
}