//document.body.innerHTML += '<div style="background-color: #FFFFFF; border-color: black; border-style: solid; color: black; font-family: \'Segoe UI\'; font-size: 24px; position: fixed; left: 0; top: 0; width: 300px; height: 110px; padding: 8px; z-index: 1000000000">Ура!</div>';


var target = document.querySelector('.task-list');

// создаем экземпляр наблюдателя
var observer = new MutationObserver(function(mutations) {
    var string = '';
    var matches = [];
    mutations.forEach(function(mutation) {
        string = mutation.nextSibling;
        let innerText = string.innerText;
        console.log(innerText);
        let match = innerText.match("(.*) Банда .*\nВладелец  (.*)  (.*)  (.*)");
        for (let obj of match) {
            console.log(obj)
        }


        var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
        xmlhttp.open("POST", "10.20.30.40:8080");
        xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xmlhttp.send(JSON.stringify({ time: match[0], owner: match[1], type: match[2], name: match[3] }));

    });
});

//(.*) Банда .*\nВладелец  (.*)  (.*)  (.*)
// настраиваем наблюдатель
var config = { attributes: true, childList: true, characterData: true }

// передаем элемент и настройки в наблюдатель
observer.observe(target, config);

