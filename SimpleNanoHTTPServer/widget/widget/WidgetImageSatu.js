Clazz.createPackage("com.widget.imageSatu");

Clazz.com.widget.imageSatu.WidgetImageSatu = Clazz.extend(Clazz.Widget, {
 WidgetFragmentImg01 : null,

	 renderUI : function(){
	 	this.WidgetFragmentImg01 = document.createElement("img");
        this.WidgetFragmentImg01.setAttribute("id", "myImage01");
        this.WidgetFragmentImg01.setAttribute("src", "img/satu.png");


        return this.WidgetFragmentImg01;
        },

    bindUI : function(){

	}
	
});