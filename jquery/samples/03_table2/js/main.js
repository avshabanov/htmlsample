
/**
 * 
 */
$.fn.productsGrid = function(obj) {
}


function getInspectedObject(obj) {
	var s = "";
    for (var i in obj) {
        s += i + ": " + obj[i] + "\n";
    }
	return s;
}

/**
 * entry point goes here
 */

$(document).ready(function(){
	/*
	var initObj = {
		aprop: 10,
		bprop: 100,
		dprop: 1000
	};
	
	var stObj = {
		aprop: 20,
		cprop: 200
	};
	
	var extObj = $.extend(stObj, initObj);
	alert(getInspectedObject(extObj));*/
	
	var table = $("#customers");
	var elem2 = $(".data-row", table)[0];
	//alert(elem2.innerHTML);
	var elem = $("#customers .data-row:eq(0)")[0];
	//alert(elem.innerHTML);
	
	$("tr:nth-child(odd)").addClass("odd-row");
});


