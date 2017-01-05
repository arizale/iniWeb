Clazz.createPackage("com.widget.imageTiga");

Clazz.com.widget.imageTiga.WidgetImageTiga = Clazz.extend(Clazz.Widget, {
 WidgetFragmentImg03 : null,

	 renderUI : function(){
	 	this.WidgetFragmentImg03 = document.createElement("img");
        this.WidgetFragmentImg03.setAttribute("id", "myImage03");
        this.WidgetFragmentImg03.setAttribute("src", "img/tiga.png");

        return this.WidgetFragmentImg03;
        },

    bindUI : function(){

	}
	
});