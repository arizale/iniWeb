Clazz.createPackage("com.widget.image");

Clazz.com.widget.image.ThisIsImage = Clazz.extend(Clazz.Widget, {
	 basicWidgetFragmentImg : null,

	 renderUI : function(){
	 	this.basicWidgetFragmentImg = document.createElement("img");
        this.basicWidgetFragmentImg.setAttribute("id", "myImage");
        return this.basicWidgetFragmentImg;
        },

    bindUI : function(){

	}
	
});