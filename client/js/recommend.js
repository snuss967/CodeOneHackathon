$(document).ready(function() {
	setTimeout(function() {
		$('.years-num').val($('.years').val());
		$('.savings-num').val($('.savings').val());

		$('.years').change(function() {
			$('.years-num').val($(this).val());
		});
		$('.savings').change(function() {
			$('.savings-num').val($(this).val());
		});

		$('.years-num').change(function() {
			$('.years').val($(this).val());
		});
		$('.savings-num').change(function() {
			$('.savings').val($(this).val());
		});
	}, 50);
});
