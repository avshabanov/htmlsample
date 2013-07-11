
jQuery.myWgt = new Object();

jQuery.myWgt.defaultSettings = {
	holderTemplate: "<div class='holder mywgt'></div>",
	
	listTemplate: "<ul class='list'></ul>",
	itemTemplate: "<li class='item'><p class='dataholder'></p></li>",
	
	noDataTemplate: "<p class='nodata'>No Data</p>",
	
	
	alternateColors: ['#FFFFFF', '#E0E0E0'],
	
	dataSource: {
		getCount: function(){
			return 0;
		},
		
		getText: function(index){
			throw new Error("not implemented");
		}
	}
};



$.fn.myWgt = function(userSettings){
	var settings = $.extend(jQuery.myWgt.defaultSettings, userSettings);
	
	if (!settings.dataSource) {
		throw new Error("data source is not provided");
	}
	
	return this.each(function(){
		var $this = $(this).append(settings.holderTemplate).find('.holder');
		var dataSource = settings.dataSource;
		
		var refreshData = function(){
			$this.empty();
			
			var count = dataSource.getCount();
			
			// no data
			if (count == 0) {
				$this.append(settings.noDataTemplate);
				return;
			}
			
			// non-empty data source
			var $list = $this.append(settings.listTemplate).find('.list');
			for (var i = 0; i < count; ++i) {
				// add one another item
				$list.append(settings.itemTemplate).find('.item:last').css({
					'background-color': settings.alternateColors[i % settings.alternateColors.length]
				}).text(dataSource.getText(i));
			}
		}
		
		this.refreshData = refreshData;
		
		refreshData();
	});
}