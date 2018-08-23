(function(){
    
    var createDiv = function (block, inNbr, inClr) {
            for(var i = 0; i < inNbr.value; i++){
                var newDiv = document.createElement("div");
                newDiv.style.background = inClr.value;
                newDiv.classList.add("box");
                newDiv.addEventListener("click", select);
                block.appendChild(newDiv);
            }
            var divSelected = document.querySelectorAll(".active");
            for(var i = 0; i < divSelected.length; i++){
                divSelected[i].style.background = inClr.value;
            }
        
    };
    
    var reset = function () {
        var allDiv = document.querySelectorAll(".active");
        for(var i = 0; i < allDiv.length; i++){
            allDiv[i].remove();
        }
    };
    
    var select = function () {
        this.classList.toggle("active");
    }
    
    var start = function () {
        var block = document.getElementById("blocks");
        var inNbr = document.getElementById("inNbr");
        var inClr = document.getElementById("inClr");
        
        var btnVal = document.getElementById("btnVal");
        var btnRes = document.getElementById("btnRes");
        btnVal.addEventListener("click", createDiv.bind("evt", block, inNbr, inClr));
        btnRes.addEventListener("click", reset);
        
        
    };
    
    window.addEventListener("DOMContentLoaded", start);
}());