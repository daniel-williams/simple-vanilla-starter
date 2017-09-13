var TITLE = 'Simple vanilla starter';

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    var title = document.getElementsByTagName('title');
    var target = document.getElementById('description-target');

    if(title.length) {
      title[0].innerText = TITLE
    }
    
    if(target) {
      target.innerText = TITLE;
    }
  }
}