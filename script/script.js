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

        if ( name === 'name') {
            pattern = /^([a-zA-Zа-яА-ЯёЁ\-]+) ([a-zA-Zа-яА-ЯёЁ\-]+)/;
            text = 'Имя:';
        } else if (type === 'email') {
            pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,6})$/;
            text = 'Email: ';
        } else if (type === 'tel') {
            pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            text = 'Телефон: ';
        }

        document.querySelector('form').addEventListener('change', function (element, pattern, value) {
            if (pattern.test(value)) {
                element.classList.remove('error');
                return true;
            } else {
                element.classList.add('error');
            }
        });

    }



function valid (form) {
    var modal = document.getElementById('modal');
    var close = modal.querySelector('.close__btn');
    var options = modal.querySelector('.options');

    options.innerHTML = 

    close.addEventListener('click', function () {
        modal.hidden = true;
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



