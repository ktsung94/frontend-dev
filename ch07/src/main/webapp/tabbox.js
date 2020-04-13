//jQuery 버젼
var TabBox = {
		init: function(){
			$(function() {			
				$('.tab-box div').text($(".tab-box li:last").addClass('selected').text() + "의 탭뷰 입니다.");
				$(".tab-box li").click(TabBox._onWindowLoad);
			})
		},	
		_onWindowLoad: function(){
			$('.tab-box li').removeClass('selected');
			$('.tab-box div').text($(this).addClass('selected').text() + "의 탭뷰 입니다.");
		}
}

/*
var TabBox = {
	init: function(){
		$(this._init);		
	},	
	_init: function(){
		$('.tab-box li').click(TabBox._changeTab);
		TabBox._changeTab();
	},
	_changeTab: function(){
		$('.tab-box li.selected').removeClass('selected');

		var $liTab = (this == TabBox) ?	$('.tab-box li:first-child') : $(this);
		// html에 'data-no = ' 의 값을 가져온다.
		$('.tab-box div').text($liTab.data('no') + "의 탭뷰입니다.");
		$liTab.addClass('selected');
	}	
}
 */