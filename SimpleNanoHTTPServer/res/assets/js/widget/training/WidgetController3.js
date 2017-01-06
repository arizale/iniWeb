Clazz.createPackage("com.widget.basic");

Clazz.com.widget.basic.WidgetController3 = Clazz.extend(Clazz.WidgetWithTemplate, {
    templateUrl : "../template/widget3.xml",
    
    initialize : function(config){
        this.defaultContainer = config.defaultContainer;
        this.data = config;
    }
});