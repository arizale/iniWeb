Clazz.addPackage("com.widget.basic");
Clazz.com.widget.basic.WidgetControllerListener = Clazz.extend(Clazz.Base, {
    getId : function(data, callback){
        var url = "/get_id"
        this.callService(data, url, function(response){
            callback(response.id);
        });
    },
    
    callService : function(data, url, callback){
        $.ajax({
            url : url,
            methods : "POST",
            data : { 
                name : data.name,
                address : data.address,
                city : data.city
                   },
            dataType : 'json'
        }).done(function(response){
            callback(response);
        }).fail(function(){
            
        });
    }
});