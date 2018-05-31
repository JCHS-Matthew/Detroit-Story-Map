mapboxgl.accessToken = 'pk.eyJ1IjoibmF0aW9uYWxwb3N0IiwiYSI6IjBkZWVjZjhjZjg0NzAwNmEwYzk5ZWViYmFlNDA5NjkzIn0.y73QXFnGF8_91sSDBWvgHg';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/nationalpost/cihpxfqzl002195lyrokri8u4',
//     style: 'mapbox://styles/mapbox/streets-v9',

  center: [-83.09, 42.36],
  zoom: 11.9,
  bearing: -0.5,
  pitch: 35,
  interactive: false

});

var chapters = {
  'one': {
    center: [-83.144865, 42.414672],
    zoom: 17,
    bearing: 27,
    pitch: 45,
    duration: 7000

  },
  'two': {
    bearing: 0,
    center: [-83.14, 42.416],
    zoom: 15,
    pitch: 15,
    bearing: -0.6,
    duration: 3000
  },
  'three': {
    center: [-83.093118, 42.318158], 
    bearing: 0,
    zoom: 15.6,
    pitch: 40,
    duration: 8000
  },
  'four': {
    bearing: 20,
    center: [-76.378, 50.749],
    zoom: 10,
    duration: 3500
  },
  'five': {
    bearing: -45,
    pitch: 15,
    center: [-76.516833, 50.597944],
    zoom: 11.15,
  },
  'six': {
    bearing: 40,
    center: [-75.966825, 49.695525],
    zoom: 13.9,
    duration: 2000,
    pitch: 60.00

  },
  'seven': {
    bearing: 15,
    pitch: 40,
    center: [-72.222166, 48.516400],
    zoom: 13.9,
    duration: 2000
  },
  'eight': {
    bearing: 90,
    center: [-71.921, 49.883],
    zoom: 13,
    duration: 2000,
    pitch: 15

  },
  'nine': {
    bearing: 90,
    center: [-71.741, 49.930],
    zoom: 11.3,
    speed: 0.6,
    pitch: 10

  },
  'ten': {
    bearing: 10,
    center: [-72.232, 48.881],
    zoom: 13.9,
    speed: 0.6,
    pitch: 30
  },
  'eleven': {
    bearing: 90,
    center: [-72.232, 48.575],
    zoom: 13.9,
    speed: 0.6,
    pitch: 40
  },
  'twelve': {
    bearing: -45,
    center: [-73.556568, 45.496265],
    zoom: 13.9,
    speed: 0.6,
    pitch: 5
  },
};

// On every scroll event, check which element is on screen
window.onscroll = function() {
  var chapterNames = Object.keys(chapters);
  for (var i = 0; i < chapterNames.length; i++) {
    var chapterName = chapterNames[i];
    if (isElementOnScreen(chapterName)) {
      setActiveChapter(chapterName);
      break;
    }
  }
};

var activeChapterName = 'cover';

function setActiveChapter(chapterName) {
  if (chapterName === activeChapterName) return;

  map.flyTo(chapters[chapterName]);

  document.getElementById(chapterName).setAttribute('class', 'active');
  document.getElementById(activeChapterName).setAttribute('class', '');

  activeChapterName = chapterName;
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}


map.on('load', function () {

    map.addLayer({
        'id': 'maine',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[[-83.1455, 42.4137],[-83.145, 42.4137],[-83.14505, 42.41465],[-83.14555, 42.41465]]]
                }
            }
        },
        'layout': {},
        'paint': {
            'fill-color': '#088',
            'fill-opacity': 0.8
        }
    });
});

var panorama;
function initialize() {
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('street-view'),
    {
      position: {lat: 42.414672, lng: -83.144865},
      pov: {heading: 220, pitch: 5},
      zoom: 1,
      linksControl: false,
      //panControl: false,
      enableCloseButton: false,
      fullscreenControl: false,
      addressControl: false,
      zoomControl: false
    }
  );
}