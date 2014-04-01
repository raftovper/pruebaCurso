$(inicio);

function inicio() {
	$('#important_note').on("swipeleft", izquierda);
	$('#important_note').on("swiperight", derecha);

	$('select').change(function() {
		$('#taxes_state').fadeOut(5);
		if ($(this).val()=='on') {
			$('#taxes_state').html('1500');
		}else{
			$('#taxes_state').html('2000');
		}
		$('#taxes_state').toggleClass('taxes_class');
		$('#taxes_state').fadeIn(1000);
	});

}

function izquierda() {
	$('#imagen-coche').width('20%');
}

function derecha() {
	$('#imagen-coche').width('30%');
}
