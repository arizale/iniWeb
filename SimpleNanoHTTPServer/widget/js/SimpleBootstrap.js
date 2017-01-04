document.addEventListener("DOMContentLoaded", function(event){ 
    console.log("Bootstrap is started"); 
    var widgetContainer = document.getElementById("btn");
    var wiggetContainerImg = document.getElementById("img");

        var basicWidget = new Clazz.com.widget.basic.BasicWidget(); 
        basicWidget.render(widgetContainer);

        var basicImage = new Clazz.com.widget.image.ThisIsImage();
        basicImage.render(wiggetContainerImg);
}); 
 
var startBasicWidget = function(container){ 
     
};