// GET 请求

var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.onload = function () {
   // 请求结束后，在此处写处理代码
};

xhr.send(null);
xhr.send('string');
xhr.send(new Blob());
xhr.send(new Int8Array());
xhr.send(document);


// POST 请求


var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

//发送合适的请求头信息
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

xhr.onload = function () {
    // 请求结束后，在此处写处理代码
};
xhr.send("foo=bar&lorem=ipsum");
xhr.send('string');
xhr.send(new Blob());
xhr.send(new Int8Array());
xhr.send(document);

