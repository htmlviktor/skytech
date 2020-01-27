const APIinit = () => {
    let form = document.querySelectorAll('form');
    form = Array.from(form);
    for (let i = 0; i < form.length; i++) {

        if (form[i].id.indexOf('Form') >= 0) {

            form[i].addEventListener('submit', function (evt) {
                console.log(form[i])
                evt.preventDefault();
                submitHandler(form[i]);

            });

        }

    }

    async function submitHandler(form) {

        let response = await fetch("send-mail.php", {
            method: "POST",
            body: new FormData(form)
        })
            .then(response => response.json())
            .then(function (json) { form.reset(); console.log(json) })
            .catch(function (error) { console.log(error) });
    };
}

export default APIinit;