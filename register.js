var xhr = new XMLHttpRequest();
var url = "http://challenge.code2040.org/api/register";
var dict = {};
dict.token = "d8ea92bde49ac90823484a2a8aa2a149";
dict.github = "https://github.com/rgrabowsky/code2040-api-challenge";

xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText);
    }
}

xhr.send(dict);
