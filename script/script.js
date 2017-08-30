(function () {
    var form = document.getElementById('form');
    var container = document.getElementById('modal-conteiner');
    var options = document.querySelector('.options');
    var plus = document.querySelector('.add-phone__btn');
    var close = document.getElementById('close');


    plus.addEventListener('click', function() {
        var newPhone = document.createElement('div');
        var textError = document.createElement('span');
        newPhone.className = 'form-group';
        textError.className = 'error__text';
        newPhone.innerHTML = '<input class="form-item" type="tel">';
        textError.innerText = '* Некорректно введен телефон';
        plus.parentNode.parentNode.appendChild(newPhone);
        newPhone.appendChild(textError);
    });

    close.addEventListener('click', function() {
        container.style.display = 'none';
        options.innerHTML = '';
    });

    form.addEventListener('change', function(event) {
        var pattern;
        var target = event.target;
        target.classList.remove('error');
        if ( target.name === 'name') {
            pattern = /^([a-zA-Zа-яА-ЯёЁ\-]+) ([a-zA-Zа-яА-ЯёЁ\-]+)/;
        } else if (target.type === 'email') {
            pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,6})$/;
        } else if (target.type === 'tel') {
            pattern = /^((\d|\+)[\- ]?)?(\(?\d\)?[\- ]?){1,25}$/;
        }
        if (!pattern.test(target.value)) {
            target.classList.add('error');
        }
    });

    function validateInputs(inputs) {
        var stopSubmit;
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (input.value === '') {
                input.classList.remove('error');
            }
            if (input.classList.contains('error') && input.hasAttribute('required')) {
                stopSubmit = true;
                break;
            } else {
                stopSubmit = false;
            }
        }
        return stopSubmit;
    }

    function getDataFromInputs(inputs) {
        var data = {};
        var values = [];
        var text;
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            if (input.name === 'name') {
                text = 'Имя:';
            } else if (input.type === 'email') {
                text = 'Email:';
            } else if (input.type === 'tel') {
                text = 'Телефон:';
            }

            if (text in data) {
                if (!((input.value === '') || input.classList.contains('error'))) {
                    values.push(input.value);
                    data[text] = values.join(', ');
                }
            } else {
                values = [input.value];
                data[text] = values;
            }
        }
        return data;
    }

    function renderSuccessModal(data) {
        for (var key in data) {
            var option = document.createElement('div');
            option.className = 'option';
            option.innerHTML = '<span class="option__name">' + key + '</span>' +  data[key];
            options.appendChild(option);
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var inputs = document.querySelectorAll('input');
        var data = getDataFromInputs(inputs);
        var stopSubmit = validateInputs(inputs);

        if (!stopSubmit) {
            container.style.display = 'block';
            renderSuccessModal(data);
        }
    });
})();


