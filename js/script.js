const dvpRoot = document.documentElement;
const dvpNavToggle = document.querySelector( ".dvp-header-nav-toggle" );

dvpNavToggle.onclick = function() {
	dvpRoot.classList.toggle( "dvp-header-nav-active" );
}