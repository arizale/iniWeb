Clazz.createPackage("com.widget.basic");

Clazz.com.widget.basic.WidgetController2 = Clazz.extend(Clazz.WidgetWithTemplate, {
    templateUrl : "../template/widget2.xml",
    config : null,
    
    initialize : function(config){
        this.defaultContainer = config.defaultContainer;
        console.log(config.defaultContainer);
        this.config = config;
    },
    
    bindUI : function(){
        var self = this;
        $("#secondButton").click(function(){
            var address = $("#addr").val();
            var city = $("#city").val();
            var country = $("#country").val();
            var widget3 = new Clazz.com.widget.basic.WidgetController3({
                'firstNameResult' : self.config.firstNameResult,
                'lastNameResult' : self.config.lastNameResult,
                'ageResult' : self.config.ageResult,
                'addressResult' : address,
                'cityResult' : city,
                'countryResult' : country,
                'defaultContainer' : self.defaultContainer
            });
            widget3.render(null);
        });
    },
    
    postRender : function(){
        
    }
});