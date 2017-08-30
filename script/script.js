(function () {
    var form = document.getElementById('form');

    var text;
    var value;
    var values = [];
    var pattern;

    var container = document.getElementById('modal-conteiner');
    var options = document.querySelector('.options');
    var option;

    var plus = document.querySelector('.add-phone__btn');
    var newPhone;

    var close = document.getElementById('close');

    var elements = document.querySelectorAll('input');


    plus.addEventListener('click', function() {
        newPhone = document.createElement('div');
        newPhone.className = 'form-group';
        newPhone.innerHTML = '<input class="form-item" type="tel">' +
            '<span class="error__text">* Некорректно введен телефон</span>';
        plus.parentNode.parentNode.appendChild(newPhone);
    });

    close.addEventListener('click', function() {
        container.style.display = 'none';
        options.innerHTML = '';
    });

    form.addEventListener('change', function(event) {
        var target = event.target;

        if ( target.name === 'name') {
            pattern = /^([a-zA-Zа-яА-ЯёЁ\-]+) ([a-zA-Zа-яА-ЯёЁ\-]+)/;
        } else if (target.type === 'email') {
            pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,6})$/;
        } else if (target.type === 'tel') {
            pattern = /^(\+)?([-() \d]+){3,}/;
        }

        if (!pattern.test(target.value)) {
            target.classList.add('error');
            return false;
        } else {
            target.classList.remove('error');
            return true;
        }
    });

    function getDataFromInputs(elements) {
        elements = document.querySelectorAll('input');
        data = {};

        for (var i = 0; i < elements.length; i++) {
            element = elements[i];
            if (element.name === 'name') {
                text = 'Имя:';
            } else if (element.type === 'email') {
                text = 'Email:';
            } else if (element.type === 'tel') {
                text = 'Телефон:';
            }

            if (text in data) {
                values.push(element.value);
                data[text] = values.join(', ');
            } else {
                values = [element.value];
                data[text] = values;
            }
        }
        return data;
    }

    function renderSuccessMode(data) {
        for (var key in data) {
            option = document.createElement('div');
            option.className = 'option';
            option.innerHTML = '<span class="option__name">' + key + '</span>' +  data[key];
            options.appendChild(option);
        }
    }
/*
    form.onsubmit = function (event) {
        var data = getDataFromInputs(elements);
        container.style.display = 'block';

        renderSuccessMode(data);
        return false;
    }
  */
    form.addEventListener('submit', function (e) {
        var data = getDataFromInputs(elements);

        e.preventDefault();
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            if (element.classList.contains('error') || element.value === '') {
                if (element.hasAttribute('required')) {
                    return false;
                } else {
                    element.value = false;
                }
            }
             else {
                container.style.display = 'block';
            }
        }

        renderSuccessMode(data);

    });

})();


