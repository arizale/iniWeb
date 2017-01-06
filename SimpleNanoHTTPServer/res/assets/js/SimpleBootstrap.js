document.addEventListener("DOMContentLoaded", function(event){
    console.log("Bootstrap is started");
    var widgetMainContainer = $("#body");
    var basicWidgetWithTemplate = new Clazz.com.widget.basic.BasicWidgetWithTemplate();
    basicWidgetWithTemplate.render(widgetMainContainer);
});