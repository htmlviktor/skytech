import $ from 'jquery';

const degaultSuccesHandler = () => {
    $('.form-modal-wrapper').hide();
    $('.overlay--form-modal').addClass('overlay--show');
    $('.form-modal-done').show();
}

function submitHandler(formId, successHandler = degaultSuccesHandler, errorHandler) {

    let form = document.getElementById(formId.slice(1));

    let formData = new FormData(form);

    $.ajax({
        url: "/send-mail.php", //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        data: formData, // Сеарилизуем объект
        contentType: false,
        processData: false,
        cache: false,
        success: function (response) { //Данные отправлены успешно
            $(formId)[0].reset();
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
    $(selector).on('submit', function (evt) {
        evt.preventDefault();
        submitHandler(selector);
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

export {
    submitHandler,
    ajaxInit
};