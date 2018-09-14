function initMap () {
        var center;
        var mapOptions = {
            zoom: 11,
            scrollwheel: false,
            center: new google.maps.LatLng(53.5444, -113.4909),
            disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            // disableDoubleClickZoom: true,
            styles:
            [
              {
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#212121"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#2d2e37"
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#757575"
                  },
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "poi",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#181818"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#1b1b1b"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#2c2c2c"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#8a8a8a"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#657079"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "lightness": -50
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#657079"
                  }
                ]
              },
              {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#657079"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#37373e"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#3d3d3d"
                  }
                ]
              }
           ]
};

        var locations = [
          { 'position': new google.maps.LatLng(53.569185, -113.467328), 'location-title-text': 'EMCN - Main Office', 'location-address': '11713 - 82 Street NW', 'location-address-city': 'Edmonton, Alberta', 'location-address-postal': 'T5B 2V9', 'location-address-phone': '780 424 7709', 'location-address-fax': '780 424 7736', 'location-address-email': 'info@emcn.ab.ca' },
          { 'position': new google.maps.LatLng(53.570416, -113.478867), 'location-title-text': 'EMCN at Nova Plaza', 'location-address': '8914 - 118 Avenue NW', 'location-address-city': 'Edmonton, Alberta', 'location-address-postal': 'T5B 0T6', 'location-address-phone': '780 421 7400', 'location-address-fax': '780 428 4252', 'location-address-email': 'info@emcn.ab.ca' },
          { 'position': new google.maps.LatLng(53.471726, -113.449019), 'location-title-text': 'EMCN at Welcome Centre for Immigrants', 'location-address': '#200, 3699 Millwoods Rd. NW', 'location-address-city': 'Edmonton, Alberta', 'location-address-postal': 'T6K 3L6', 'location-address-phone': '780 462 6924', 'location-address-fax': '780 466 6594', 'location-address-email': 'info@emcn.ab.ca' },
          { 'position': new google.maps.LatLng(53.574260, -113.465119), 'location-title-text': 'EMCN at Eastwood School', 'location-address': '12023 - 81 Street NW', 'location-address-city': 'Edmonton, Alberta', 'location-address-postal': 'T5B 2S9', 'location-address-phone': '780 945 2295', 'location-address-fax': '780 424 7736', 'location-address-email': 'info@emcn.ab.ca' },
          { 'position': new google.maps.LatLng(53.540162, -113.609370), 'location-title-text': 'EMCN at West End Community Connections', 'location-address': '10030 - 167 Street NW', 'location-address-city': 'Edmonton, Alberta', 'location-address-postal': 'T5P 3W4', 'location-address-phone': '780 489 7004', 'location-address-fax': '780 489 7002', 'location-address-email': 'info@emcn.ab.ca' }
        ];
        //
        iconBase + 'pin-blue.svg',
              iconBase + 'pin-orange.svg',
              iconBase + 'pin-purple.svg'
        var iconBase = '/images/maps/';
        var icons = [
          // {
          //   url: iconBase + 'pin-blue.svg',
          //   anchor: new google.maps.Point(15,36),
          //   origin: new google.maps.Point(0, 0),
          //   size: new google.maps.Size(30,36)
          // },
          // {
          //   url: iconBase + 'pin-orange.svg',
          //   anchor: new google.maps.Point(15,36),
          //   origin: new google.maps.Point(0, 0),
          //   size: new google.maps.Size(30,36)
          // },
          // {
          //   url: iconBase + 'pin-purple.svg',
          //   anchor: new google.maps.Point(15,36),
          //   origin: new google.maps.Point(0, 0),
          //   size: new google.maps.Size(30,36)
          // }
          [iconBase + 'dot-blue.png', iconBase + 'pin-blue.png'],
          [iconBase + 'dot-purple.png', iconBase + 'pin-purple.png'],
          [iconBase + 'dot-orange.png', iconBase + 'pin-orange.png']
        ];

        var markers = [];
        var map = new google.maps.Map(document.getElementById('map-bar'), mapOptions);

        function calculateCenter() {
          center = map.getCenter();
        }
        google.maps.event.addDomListener(map, 'idle', function() {
          calculateCenter();
        });
        google.maps.event.addDomListener(window, 'resize', function() {
          map.setCenter(center);
        });

        var main=false;
        var i =0;
        locations.forEach(function(location) {
          var icon=icons[Math.floor(Math.random()*icons.length)];
          var markericon;
          if(!main){
            markericon=icon[1];
            main=true;
          }else{
            markericon=icon[0];
          }
          var marker = new google.maps.Marker({
            position: location.position,
            icon: markericon,
            map: map
          });

          markers.push(marker);

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              //console.log(activeIcon);
              var icon;
              for (var j = 0; j < markers.length; j++) {
                icon=icons[Math.floor(Math.random()*icons.length)];
                markers[j].setIcon(icon[0]);
              }
              this.setIcon(icon[1]);
            }
          })(marker, i));

          // google.maps.event.addListener(map, 'zoom_changed', function() {
          //   marker.setIcon(icon);
          // });


          marker.addListener('click', function() {
            change_location(location);
          });
          i++;
        });

      }

      $(document).ready(function(){
        initMap();
      });

