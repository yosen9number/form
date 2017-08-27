var text;
var value;
var pattern;
var nameValue;
var emailValue;
var phoneValue;


var elements = document.querySelectorAll('input');


    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var type = element.getAttribute('type');
        var name = element.getAttribute('name');
        value = element.value;

        document.querySelector('form').addEventListener('change', function (event) {
            var target = event.target;

            if ( target.name === 'name') {
                pattern = /^([a-zA-Zа-яА-ЯёЁ\-]+) ([a-zA-Zа-яА-ЯёЁ\-]+)/;
            } else if (target.type === 'email') {
                pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,6})$/;
            } else if (target.type === 'tel') {
                pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
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



function valid (form) {
    var container = document.getElementById('modal-container');
    var modal = document.getElementById('modal');
    var close = modal.querySelector('.close__btn');
    var options = modal.querySelector('.options');
    var option;

    container.hidden = false;

    for ( i = 0; i < elements.length; i++) {
        option = document.createElement('div');
        option.className = 'option';
        if ( name === 'name') {
            text = 'Имя:';
        } else if (type === 'email') {
            text = 'Email: ';
        } else if (type === 'tel') {
            text = 'Телефон: ';
        }
        option.innerHTML = '<span class="option__name">' + text + '</span>' + element.value;
        options.appendChild(option);
    }

    close.addEventListener('click', function () {
        container.hidden = true;
    })
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



