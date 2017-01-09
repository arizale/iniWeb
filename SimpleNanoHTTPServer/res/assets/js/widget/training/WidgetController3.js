Clazz.createPackage("com.widget.basic");

Clazz.com.widget.basic.WidgetController3 = Clazz.extend(Clazz.WidgetWithTemplate, {
    templateUrl : "../template/widget3.xml",
    
    initialize : function(config){
        this.defaultContainer = config.defaultContainer;
        this.data = config;
    }, 
    
    preRender : function(whereToRender, renderFunction){
        var self = this;
        var wcl = new Clazz.com.widget.basic.WidgetControllerListener();
        var body = {
            name : this.data.firstNameResult,
            address : this.data.addressResult,
            city : this.data.cityResult
        };
        wcl.getId(body, function(id){
            self.data.idResult = id;
            renderFunction(self.data, whereToRender);
        });
    }
});