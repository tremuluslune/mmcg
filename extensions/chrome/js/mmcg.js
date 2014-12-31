var actualCode = '(' + function() {
    var urls = Large_cgurl;
    var htmlContent = '';
    htmlContent = '<div id="content">'; 
    for (var i = 1; i < urls.length; i++) {
        htmlContent += '<img src="' + urls[i] + '">';
    }
    htmlContent += '</div>'
    document.body.innerHTML = htmlContent;
} + ")();";

var script = document.createElement('script');
script.textContent = actualCode;

(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);




