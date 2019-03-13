function getParam(key, value_Default = '') {
    var url_string = location.href;
    var url = new URL(url_string);
    var value = url.searchParams.get(key);
    return value ? value : value_Default;
}


var id = getParam("id");
var http = new XMLHttpRequest();
http.open('GET', 'https://api.myjson.com/bins/e8ece', true);
http.send();
http.onreadystatechange = function () {
    if (this.readyState == 4) {
        RenderUser(JSON.parse(this.responseText));
    }
}