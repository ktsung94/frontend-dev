// jQuery 버젼
var TabBox = {
	init: function(){
		$(function() {			
			$('.tab-view').text($(".tab-box li:last").attr('class', 'selected').text() + "의 탭뷰 입니다.");
			$(".tab-box li").click(TabBox._onWindowLoad);
		})
	},	
	_onWindowLoad: function(){
		$('.tab-box li').removeClass('selected');
		$('.tab-view').text($(this).attr('class', 'selected').text() + "의 탭뷰 입니다.");
	}
}