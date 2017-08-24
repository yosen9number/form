function valid (form) {
    var fail = false;
    var name = form.querySelectorAll("[type=name]").value;
    var email = form.querySelectorAll("[type=email]").value;
    var tel = form.querySelectorAll("[type=tel]").value;

    var name_pattern = /^([a-zA-Zа-яА-ЯёЁ\-]+) ([a-zA-Zа-яА-ЯёЁ\-]+)/;
    var email_pattern = /^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z]{2,6})$/;
    var tel_pattern = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;


    if (name_pattern.test(name) == false) {
        fail = "Вы не правильно ввели свое имя";
    } else if(email_pattern.test(email) == false) {
        fail = "Вы не правильно ввели email";
    } else if(tel_pattern.test(tel) == false) {
        fail = "Вы не правильно ввели телефон";
    }

    if(fail) {
        alert(fail);
        return false;
    } else {
        return true;
    }

}

(function() {
    var plus = document.querySelector(".add-phone__btn");
    var newPhone;

    plus.addEventListener("click", function() {
        newPhone = document.createElement('div');
        newPhone.className = "form-group";
        newPhone.innerHTML ="<input class=\"form-item\" type=\"tel\">\n" +
            "            <span class=\"error__text\">* Некорректно введен телефон</span>\n";
        plus.parentNode.parentNode.appendChild(newPhone);
    });

})();