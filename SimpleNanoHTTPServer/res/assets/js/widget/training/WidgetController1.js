Clazz.createPackage("com.widget.basic");

Clazz.com.widget.basic.WidgetController1 = Clazz.extend(Clazz.WidgetWithTemplate, {
    templateUrl : "../template/widget1.xml",
    
    initialize : function(config){
        this.defaultContainer = config.defaultContainer;
    },
    
    bindUI : function(){
        var self = this;
        $("#firstButton").click(function(){
            var firstName = $("#firstName").val();
            var lastName = $("#lastName").val();
            var age = $("#age").val();
            var widget2 = new Clazz.com.widget.basic.WidgetController2({
                'firstNameResult' : firstName,
                'lastNameResult' : lastName,
                'ageResult' : age,
                'defaultContainer' : self.defaultContainer
            });
            widget2.render(null);
        });
    },
    
    postRender : function(){
        
    }
});