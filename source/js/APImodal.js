import $ from 'jquery';

const degaultSuccesHandler = () => {
    $('.form-modal-wrapper').hide();
    $('.overlay--form-modal').addClass('overlay--show');
    $('.form-modal-done').show();
}

function submitHandler(formId, successHandler = degaultSuccesHandler, errorHandler) {
    $.ajax({
        url: "/send-mail.php", //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        data: $('#' + formId).serialize(),  // Сеарилизуем объект
        success: function (response) { //Данные отправлены успешно
            document.getElementById(formId).reset();
            successHandler(response);
        },
        error: function (response) { // Данные не отправлены
            if (errorHandler) {
                errorHandler()
            } else {
                throw new Error(response)
            }
        }
    });
}


function formSubmit(selector) {
    $(selector).on('submit', function(evt) {
        evt.preventDefault();
        submitHandler(this.id);
    })
}

const ajaxInit = () => {
    formSubmit('#contactForm');
	formSubmit('#simpleForm');
	// formSubmit('#modalOrderForm');
	formSubmit('#promoFeedbackForm');
	formSubmit('#promoOrderForm');
	formSubmit('#subscribesForm');
}

export {submitHandler, ajaxInit};