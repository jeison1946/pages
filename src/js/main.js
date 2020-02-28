
/*
Funcion para consultar Json
 */
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'pages/api/gradiAuthors.json', true);
    xobj.onreadystatechange = function () {
        callback(xobj.responseText);
    };
    xobj.send(null);
}

window.onload = function () {
    //Callback JS
    loadJSON(function(response) {
        // Parsing JSON string into object
        var actual_JSON = JSON.parse(response);
        actual_JSON.forEach(element => {
            //Contenedor padre de los items
            var divContent = document.createElement("div");
            divContent.className = 'item__content row-for';

            var img = document.createElement("img");
            img.setAttribute('src', element.download_url);

            divImg = document.createElement("div");
            divImg.className = 'item__img';
            divImg.appendChild(img);

            preContent = document.createElement("div");
            preContent.className = 'primary__content';
            preContent.appendChild(divImg);

            eleNumber = document.createElement("p");
            eleNumber.className = 'item__number';
            number = document.createTextNode(element.id);
            eleNumber.appendChild(number);

            imgSite = document.createElement("img");
            imgSite.setAttribute('src', 'pages/assets/img/logo-white.png');
            imgSite.setAttribute('width', "70px");
            imgSite.setAttribute('height',"70px");

            divAuth = document.createElement("p");
            divAuth.className = 'item__auth';
            textAun = document.createTextNode(element.author);
            divAuth.appendChild(textAun);

            secondContent = document.createElement("div");
            secondContent.className = 'second__content';
            secondContent.appendChild(eleNumber);
            secondContent.appendChild(imgSite);
            secondContent.appendChild(divAuth);

            divContent.appendChild(preContent);
            divContent.appendChild(secondContent);
            document.getElementById("content-items").appendChild(divContent)
        });

    });
};


