const dvp_root = document.documentElement;
const dvp_navToggle = document.querySelector( '.dvp-header-nav-toggle' );

dvp_navToggle.onclick = function() {
	dvp_root.classList.toggle( 'dvp-header-nav-active' );
}

function dvp_randomClasses( name, prefix, variations ) {
	let i, max;
	const classes = document.querySelectorAll( name );
	for ( i = 0, max = classes.length; i < max; i++ ) {
		let x = Math.floor( ( Math.random() * variations ) + 1 );
		classes[ i ].classList.add( prefix + x );
	}
}

window.addEventListener( 'load', function() {
  dvp_randomClasses( '.dvp-links-item', 'dvp-links-color-', 8 );
})