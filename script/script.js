(function () {
    var form = document.getElementById('form');
    var container = document.getElementById('modal-conteiner');
    var options = document.querySelector('.options');
    var plus = document.querySelector('.add-phone__btn');
    var close = document.getElementById('close');
    var elements = document.querySelectorAll('input');

    plus.addEventListener('click', function() {
        var newPhone = document.createElement('div');
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
            return false;
        }
    });

    function validateForm() {
        elements = document.querySelectorAll('input');
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element.value === '') {
                element.classList.remove('error');
            }
            if (element.classList.contains('error')) {
                return false;
            } else {
                container.style.display = 'block';
            }
        }
    }

    function getDataFromInputs(elements) {
        elements = document.querySelectorAll('input');
        var data = {};
        var values = [];
        var text;
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];
            if (element.name === 'name') {
                text = 'Имя:';
            } else if (element.type === 'email') {
                text = 'Email:';
            } else if (element.type === 'tel') {
                text = 'Телефон:';
            }

            if (text in data) {
                if (!(element.value === '')) {
                    values.push(element.value);
                    data[text] = values.join(', ');
                }
            } else {
                values = [element.value];
                data[text] = values;
            }
        }
        return data;
    }

    function renderSuccessMode(data) {
        for (var key in data) {
            var option = document.createElement('div');
            option.className = 'option';
            option.innerHTML = '<span class="option__name">' + key + '</span>' +  data[key];
            options.appendChild(option);
        }
    }

    form.addEventListener('submit', function (event) {
        var data = getDataFromInputs(elements);
        event.preventDefault();
        validateForm();
        renderSuccessMode(data);
    });
})();


