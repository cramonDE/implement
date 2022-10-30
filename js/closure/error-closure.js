// 循环中创建闭包

function showHelp(help) {
    document.getElementById('help').innerHTML = help;
  }
  
  function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
      ];
  
    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = function() {
        showHelp(item.help);
      }
    }
  }
  
  setupHelp();



// 原因是赋值给 onfocus 的是闭包。这些闭包是由他们的函数定义和在 setupHelp 作用域中捕获的环境所组成的。这三个闭包在循环中被创建，但他们共享了同一个词法作用域，在这个作用域中存在一个变量 item
//这是因为变量 item 使用 var 进行声明，由于变量提升，所以具有函数作用域。当 onfocus 的回调执行时，item.help 的值被决定。由于循环在事件触发之前早已执行完毕，变量对象 item（被三个闭包所共享）已经指向了 helpText 的最后一项。



// 解决方案是使用更多闭包，或使用立即执行函数，原理相同

function showHelp(help) {
    document.getElementById('help').innerHTML = help;
  }
  
  function makeHelpCallback(help) {
    return function() {
      showHelp(help);
    };
  }
  
  function setupHelp() {
    var helpText = [
        {'id': 'email', 'help': 'Your e-mail address'},
        {'id': 'name', 'help': 'Your full name'},
        {'id': 'age', 'help': 'Your age (you must be over 16)'}
      ];
  
    for (var i = 0; i < helpText.length; i++) {
      var item = helpText[i];
      document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
  }
  
  setupHelp();