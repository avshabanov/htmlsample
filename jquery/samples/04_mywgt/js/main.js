
/**
 * entry point goes here
 */

$(document).ready(function(){
	var dataArr = ["Alison", "Bob", "Cindy", "Dave", "Eva", "Frank", "George", "Harry", "Ilona", "James"];
	var fixedCount = dataArr.length;
	
	var dataSourceObj = {
		getCount: function() {
			return fixedCount;
		},
		
		getText: function(index) {
			return dataArr[index];
		}
	};
	
	var $maxSizeList = $("#maxdatasize");
	for (var i = dataArr.length; i >= 0; --i) {
		$maxSizeList.append("<option/>").find("option:last").text(i + " Unit(s)").attr("value", i);
	}
	
	var $mywidget = $("#mywidget").myWgt({ dataSource: dataSourceObj })[0];
	
	$maxSizeList.change(function() {
		fixedCount = $maxSizeList.val();
		$mywidget.refreshData();
	});
});


