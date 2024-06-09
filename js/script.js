const dvp_root = document.documentElement;
const dvp_navToggle = document.querySelector( '.dvp-header-nav-toggle' );

dvp_navToggle.onclick = function() {
	dvp_root.classList.toggle( 'dvp-header-nav-active' );
}

function dvp_shuffle( dvp_array ) {
	for ( let i = dvp_array.length - 1; i > 1; i-- ) {
		const j = Math.floor( Math.random() * i );
		[ dvp_array[ i ], dvp_array[ j ] ] = [ dvp_array[ j ], dvp_array[ i ] ];
	}
	return dvp_array;
}

function dvp_randomClass( dvp_object, dvp_class ) {
	dvp_object = document.querySelectorAll( dvp_object );
	for ( let i = 0, dvp_rounds = dvp_object.length / dvp_class.length; i < dvp_rounds; i++ ) {
		const dvp_base = i * dvp_class.length;
		dvp_class = dvp_shuffle( dvp_class );
		for ( let j = 0, max = dvp_class.length; j < max; j++ ) {
			dvp_object[ j + dvp_base ].classList.add( dvp_class[ j ] );
		}
	}
}

window.addEventListener( 'load', function() {

	var dvp_linksColor = [
		'dvp-links-color-1',
		'dvp-links-color-2',
		'dvp-links-color-3',
		'dvp-links-color-4',
		'dvp-links-color-5',
		'dvp-links-color-6',
		'dvp-links-color-7',
		'dvp-links-color-8'
	];

  dvp_randomClass( '.dvp-links-button', dvp_linksColor );

});