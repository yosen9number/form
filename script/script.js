var form =document.getElementById('form');

var text;
var value;
var values = [];
var pattern;
var nameValue = [];
var emailValue = [];
var phoneValue = [];

var container = document.getElementById('modal-container');
var modal = document.getElementById('modal');
var close = modal.querySelector('.close__btn');
var options = modal.querySelector('.options');
var option;

var elements = document.querySelectorAll('input');


for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var type = element.getAttribute('type');
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
        
        option = document.createElement('div');
        option.className = 'option';
        option.innerHTML = '<span class="option__name">' + text + '</span>' + values;
        options.appendChild(option);
    }
}




