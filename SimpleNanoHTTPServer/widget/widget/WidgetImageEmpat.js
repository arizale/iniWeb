Clazz.createPackage("com.widget.imageEmpat");

Clazz.com.widget.imageEmpat.WidgetImageEmpat = Clazz.extend(Clazz.Widget, {
 WidgetFragmentImg04 : null,

	 renderUI : function(){
	 	this.WidgetFragmentImg04 = document.createElement("img");
        this.WidgetFragmentImg04.setAttribute("id", "myImage04");
        this.WidgetFragmentImg04.setAttribute("src", "img/empat.png");

        return this.WidgetFragmentImg04;
        },

    bindUI : function(){

	}
	
});