
$(function(){

	$('#lpFrameClose').click(function() {
		console.log('Close window event');
		setTimeout(function() {
			window.external.appClose();
		}, 1);
	});
	$('#lpFrameMinimize').click(function() {
		console.log('Minimize window event');
		setTimeout(function() {
			window.external.appMinimize();
		}, 1);
	});

});
