Clazz.createPackage("com.widget.basic");

Clazz.com.widget.basic.BasicWidgetWithTemplate = Clazz.extend(Clazz.WidgetWithTemplate, {
    templateUrl : "../template/widget0.xml",
    widget1 : null,
    widget2 : null,
    widget3 : null,
    
    mainContainer : "#mainContainer",
    
    initialize : function(config){
        this.widget1 = new Clazz.com.widget.basic.WidgetController1({'defaultContainer':this.mainContainer});
    },
    
    bindUI : function(){
    },
    
    postRender : function(){
        this.widget1.render(null);
    },
});