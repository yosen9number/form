var form =document.getElementById('form');

var text;
var value;
var values = [];
var pattern;

var elements = document.querySelectorAll('input');


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var name = element.getAttribute('name');
    value = element.value;

    document.querySelector('form').addEventListener('change', function(event) {
        var target = event.target;

        if ( target.name === 'name') {
            pattern = /^([a-zA-Zа-яА-ЯёЁ\-]+) ([a-zA-Zа-яА-ЯёЁ\-]+)/;
            text = 'Имя:';
        } else if (target.type === 'email') {
            pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,6})$/;
            text = 'Email: ';
        } else if (target.type === 'tel') {
            pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            text = 'Телефон: ';
        }

        if (!pattern.test(target.value)) {
            target.classList.add('error');
            return false;
        } else {
            target.classList.remove('error');
            return true;
        }
    });

}

(function() {
    var plus = document.querySelector('.add-phone__btn');
    var newPhone;

    plus.addEventListener('click', function() {
        newPhone = document.createElement('div');
        newPhone.className = 'form-group';
        newPhone.innerHTML = '<input class="form-item" type="tel">' +
            '<span class="error__text">* Некорректно введен телефон</span>';
        plus.parentNode.parentNode.appendChild(newPhone);
    });

})();


function valid (form) {
    elements = document.querySelectorAll('input');
<<<<<<< HEAD
    var data = getDataFromInputs(elements);
    var container = document.getElementById('modal-conteiner');
    var options = document.querySelector('.options');
    var option;
    var close = document.getElementById('close');
    container.style.display = 'block';

    close.addEventListener('click', function() {
        container.style.display = 'none';
        options.innerHTML = '';
    });

    function getDataFromInputs(elements) {
        var data = {};

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

    renderSuccessMode(data);
=======
    for (var i = 0; i < elements.length; i++) {
        element = elements[i];
        if ( element.name === 'name') {
            text = 'Имя:';
            nameValue.push(element.value);
            values = nameValue;
        } else if (element.type === 'email') {
            text = 'Email: ';
            emailValue.push(element.value);
            values = emailValue;
        } else if (element.type === 'tel') {
            text = 'Телефон: ';
            phoneValue.push(element.value);
            values = phoneValue;
        }
        var strValue = values.join(', ');
        option = document.createElement('div');
        option.className = 'option';
        option.innerHTML = '<span class="option__name">' + text + '</span>' + strValue;
        options.appendChild(option);
    }
>>>>>>> refs/remotes/origin/master
}



