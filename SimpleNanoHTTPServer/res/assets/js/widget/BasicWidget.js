Clazz.createPackage("com.widget.basic");

Clazz.com.widget.basic.BasicWidget = Clazz.extend(Clazz.Widget, {
    basicWidgetFragment : null,
    
    renderUI : function(){
        this.basicWidgetFragment = document.createElement("BUTTON");
        this.basicWidgetFragment.setAttribute("class", "basicWidget");
        return this.basicWidgetFragment;
    },
    
    bindUI : function(){
        this.basicWidgetFragment.innerHTML = "Yo!";
    }
    
});