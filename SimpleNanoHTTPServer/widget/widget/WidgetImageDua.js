Clazz.createPackage("com.widget.imageDua");

Clazz.com.widget.imageDua.WidgetImageDua = Clazz.extend(Clazz.Widget, {
 WidgetFragmentImg02 : null,

	 renderUI : function(){
	 	this.WidgetFragmentImg02 = document.createElement("img");
        this.WidgetFragmentImg02.setAttribute("id", "myImage02");
        this.WidgetFragmentImg02.setAttribute("src", "img/dua.png");


        return this.WidgetFragmentImg02;
        },

    bindUI : function(){

	}
	
});