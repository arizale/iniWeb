document.addEventListener("DOMContentLoaded", function(event){
    console.log("Bootstrap is started");
    var widgetContainer = document.getElementById("widgetContainer");
    document.getElementById('button1').onclick = function(){
        var basicWidget = new Clazz.com.widget.basic.BasicWidget();
        console.log("Widget");
        basicWidget.render(widgetContainer);
    };
});

var startBasicWidget = function(container){
    
};