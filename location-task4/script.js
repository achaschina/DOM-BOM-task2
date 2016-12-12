function addEventToAll() {
    setDefaultValue();
    radioEls = document.getElementsByTagName('input');
    for (var i = 0; i < radioEls.length; i++) {
        $radioButton = radioEls[i];
        $radioButton.addEventListener('click', function (e) {
            langValue = e.target.parentNode.textContent.trim().toLowerCase();
            showMessage(langValue);
        })
    }
}

function setDefaultValue() {
    var defaultLang = getDefaultValue();
    var inputArr = document.getElementsByTagName('input');
    for (i = 0; i < inputArr.length; i++) {
        var langInput = inputArr[i].parentNode.textContent.trim().toLowerCase();
        if (defaultLang == langInput) {
            inputArr[i].checked = true;
            showMessage(defaultLang);
        }
    }
}

function getDefaultValue() {
    var defaultLang;
    if (!localStorage.defaultLang) {
        defaultLang = 'ua';
    } else {
        defaultLang = localStorage.defaultLang;
    }
    return defaultLang;
}

function visibleOff() {
    var langEls = document.getElementsByClassName('lang');
    for (var i=0; i<langEls.length; i++) {
        var langEl = langEls[i];
        langEl.classList.remove('visible');
    }
}

function showMessage(lang) {
    visibleOff();
    var langEls = document.getElementsByClassName('lang-' + lang);
    for (var i=0; i<langEls.length; i++) {
        var langEl = langEls[i];
        langEl.classList.add('visible');
        localStorage.setItem('defaultLang', lang);
    }
}

addEventToAll();

//
// // $<prefix> == DOMElement
// var $save = document.querySelector('html body button#save')
//
// $save.addEventListener('click', function(){
//     alert(1);
// });