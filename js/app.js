
$( document ).ready(function(){
	$(".button-collapse").sideNav();
  $('.collapsible').collapsible();
  $('.materialboxed').materialbox();
  $('.tooltipped').tooltip({delay: 50});
  $(".tlt").textillate({
	 in:{effect:'flipInX',delay:90},
	out:{effect:'swing',shuffle:true,delay:1},
	loop:true
	});

   $( function() {
      $( '.type-descripcion' ).each( function() {
        var items = $( this ).attr( 'title' ) + ';' + $( this ).text();
        $( this ).empty().attr( 'title', '' ).teletype( {
          text: $.map( items.split( ';' ), $.trim ),
          typeDelay: 10,
          backDelay: 20,
          cursor: '▋',
          delay: 3000,
          preserve: false,
          prefix: '[laboratoria~]# ',
          loop: 0
        } );
      } );
    });
});
