function initListeners() {
	$('.bars').click(function (e) {
		$('.bars').toggleClass('active');
		$('.links').toggleClass('active');
	});
	$('.links').click(function (e) {
		$('.bars').toggleClass('active');
		$('.links').toggleClass('active');
	});
}

function changePage() {
	let hash = window.location.hash;
	let hashID = hash.replace('#', '');
	// console.log(hash + ' ' + hashID);
	if (hashID != '') {
		$.get(`pages/${hashID}/${hashID}.html`, function (data) {
			// console.log('data ' + data);
			$('#app').html(data);
		});
	} else {
		$.get(`pages/home/home.html`, function (data) {
			// console.log('data' + data);
			$('#app').html(data);
		});
	}
}

function initHashListener() {
	$(window).on('hashchange', changePage);
	changePage();
}

$(document).ready(function () {
	initListeners();
	initHashListener();
});
