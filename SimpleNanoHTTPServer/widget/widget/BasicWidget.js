Clazz.createPackage("com.widget.basic");

Clazz.com.widget.basic.BasicWidget = Clazz.extend(Clazz.Widget, {
    basicWidgetFragmentBtn1 : null,
    basicWidgetFragmentBtn2 : null,
    basicWidgetFragmentBtn3 : null,
	basicWidgetFragmentBtn4 : null,
    
    renderUI : function(){
        this.basicWidgetFragmentBtn1 = document.createElement("LI");
        this.basicWidgetFragmentBtn1.setAttribute("class", "basicWidget1");
        this.basicWidgetFragmentBtn2 = document.createElement("LI");
        this.basicWidgetFragmentBtn2.setAttribute("class", "basicWidget2");
        this.basicWidgetFragmentBtn3 = document.createElement("LI");
        this.basicWidgetFragmentBtn3.setAttribute("class", "basicWidget3");
		this.basicWidgetFragmentBtn4 = document.createElement("LI");
		this.basicWidgetFragmentBtn4.setAttribute("class", "basicWidget4");

        return [this.basicWidgetFragmentBtn1, this.basicWidgetFragmentBtn2,
        		this.basicWidgetFragmentBtn3, this.basicWidgetFragmentBtn4];
    },
    
    bindUI : function(){
        ContainerImg = document.getElementById("img");
        
        basicImage01 = new Clazz.com.widget.imageSatu.WidgetImageSatu();
        basicImage02 = new Clazz.com.widget.imageDua.WidgetImageDua();
        basicImage03 = new Clazz.com.widget.imageTiga.WidgetImageTiga();
        basicImage04 = new Clazz.com.widget.imageEmpat.WidgetImageEmpat(); 

        this.basicWidgetFragmentBtn1.innerHTML = "Button 1";
        this.basicWidgetFragmentBtn1.onclick = function (){
        basicImage02.render(ContainerImg);
        };
        this.basicWidgetFragmentBtn2.innerHTML = "Button 2";
		this.basicWidgetFragmentBtn2.onclick = function (){
        	basicImage02.render(ContainerImg);
        };
        this.basicWidgetFragmentBtn3.innerHTML = "Button 3";
		this.basicWidgetFragmentBtn3.onclick = function (){
        	basicImage03.render(ContainerImg);
        };
        this.basicWidgetFragmentBtn4.innerHTML = "Button 4";
        this.basicWidgetFragmentBtn4.onclick = function (){
        	basicImage04.render(ContainerImg);
        };
    }
    
});