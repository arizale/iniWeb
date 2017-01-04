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

        return [this.basicWidgetFragmentBtn1, this.basicWidgetFragmentBtn2, this.basicWidgetFragmentBtn3,
        this.basicWidgetFragmentBtn4, this.basicWidgetFragmentBtn5];
    },

    
    bindUI : function(){
        this.basicWidgetFragmentBtn1.innerHTML = "Button 1";
        this.basicWidgetFragmentBtn1.onclick = function (){
        	basicWidgetFragmentImg = document.getElementById("myImage").src='img/satu.png';
        };
        this.basicWidgetFragmentBtn2.innerHTML = "Button 2";
		this.basicWidgetFragmentBtn2.onclick = function (){
        	basicWidgetFragmentImg = document.getElementById("myImage").src='img/dua.png';
        };
        this.basicWidgetFragmentBtn3.innerHTML = "Button 3";
		this.basicWidgetFragmentBtn3.onclick = function (){
        	basicWidgetFragmentImg = document.getElementById("myImage").src='img/tiga.png';
        };
        this.basicWidgetFragmentBtn4.innerHTML = "Button 4";
        this.basicWidgetFragmentBtn4.onclick = function (){
        	basicWidgetFragmentImg = document.getElementById("myImage").src='img/empat.png';
        };
    }
    
});