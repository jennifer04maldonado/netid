var myCenter= new google.maps.LatLng(34.194736,-118.601581);

function initialize() {
  var mapProp = {
    center:myCenter,
    zoom:12,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    scrollwheel:false
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize); 

