var text;
var value;
var pattern;
var info = text + value;
var elements = document.querySelectorAll('input');

console.log(elements);


    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var type = element.getAttribute('type');
        var name = element.getAttribute('name');
        value = element.value;

        if ( name == 'name') {
            pattern = /^([a-zA-Zа-яА-ЯёЁ\-]+) ([a-zA-Zа-яА-ЯёЁ\-]+)/;
            text = 'Имя: ';
        } else if (type == 'email') {
            pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,6})$/;
            text = 'Email: ';
        } else if (type == 'tel') {
            pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            text = 'Телефон: ';
        }

        element.addEventListener('change', function () {
            if (pattern.test(value) == false) {
                this.classList.add('error');
                console.log(this.pattern, this.classList, this);
            }else {
                this.classList.remove('error');
            }
        })
    }


function valid (form) {




}

(function() {
    var plus = document.querySelector(".add-phone__btn");
    var newPhone;

    plus.addEventListener("click", function() {
        newPhone = document.createElement('div');
        newPhone.className = "form-group";
        newPhone.innerHTML ='<input class=\"form-item\" type=\"tel\">' +
            '<span class=\"error__text\">* Некорректно введен телефон</span>';
        plus.parentNode.parentNode.appendChild(newPhone);
    });

})();


