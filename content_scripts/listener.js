//document.body.innerHTML += '<div style="background-color: #FFFFFF; border-color: black; border-style: solid; color: black; font-family: \'Segoe UI\'; font-size: 24px; position: fixed; left: 0; top: 0; width: 300px; height: 110px; padding: 8px; z-index: 1000000000">Ура!</div>';


var target = document.querySelector('.task-list');

// создаем экземпляр наблюдателя
var observer = new MutationObserver(function(mutations) {
    var string = '';
    var matches = [];
    mutations.forEach(function(mutation) {
        console.log("Hello!");
        string = mutation.nextSibling;
        let innerText = string.innerText;
        console.log(innerText);
      /*  let split = innerText.split(" ");
        console.log(innerText.split(" ")[0]);
        console.log(innerText.split(" ")[7]);
        console.log(innerText.split(" ")[1]);
        console.log(innerText.split(" ")[2]);
        console.log(innerText.split(" ")[3]);
        console.log(innerText.split(" ")[4]);*/

        /*
         18:31:12 Ограбление было предотвращено, грабители пойманы Куш 0,001
         Владелец  DEDmustDIE  Поместье  Хутор  ARMY of Wolf
         */
       /* console.log(typeof string);
        matches = string.match('<li class="zebra" style=""><div class="task-event"><span class="date">(.*)<\/span> <a class="" href="(.*)">.*<\/a> (.*) <img src=".*"><br> Владелец <span class=".*"><\/span> (.*) <img src="\/i\/houses\/.*.png"> (.*) <img width="21" src=".*"> (.*) <img width="21" src=".*"> (.*)<\/div><\/li>');
        console.log(matches);*/

    /*    console.log(typeof string);
        while(string.nextNode()) {
            var node = treeWalker.currentNode;
            console.log(node);
        }*/
    });
});

// настраиваем наблюдатель
var config = { attributes: true, childList: true, characterData: true }

// передаем элемент и настройки в наблюдатель
observer.observe(target, config);