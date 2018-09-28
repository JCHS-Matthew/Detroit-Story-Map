mapboxgl.accessToken = 'pk.eyJ1IjoiamNocy1tYXR0aGV3IiwiYSI6ImNqYXd4Z3lsYjBzNWMyd21rODEyb2VsNW4ifQ.reqWa5So56wgdT2aUar8dA';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',

  center: [-83.08, 42.355],
  zoom: 12.2,
  bearing: -0.5,
  pitch: 35,
  interactive: false

});

var chapters = {
  'cover': {
    center: [-83.08, 42.355],
    zoom: 12.1,
    bearing: -0.5,
    pitch: 35,
    duration: 4000

  },
  'one': {
    bearing: 0,
    center: [-83.14, 42.416],
    zoom: 15,
    pitch: 15,
    bearing: -0.6,
    duration: 6000
  },
  'two': {
    center: [-83.144865, 42.4146],
    zoom: 17.5,
    bearing: 27,
    pitch: 45,
    duration: 3000
  },
  'three': {
    center: [-83.093118, 42.318158], 
    bearing: 0,
    zoom: 15.6,
    pitch: 40,
    duration: 8000
  }
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
  
  if(chapterName == 'two') {
      map.addLayer({
        'id': 'Clark Park',
        'type': 'fill',
        'source': {
            'type': 'geojson',
            'data': {
                'type': 'Feature',
                'geometry': {
                    'type': 'Polygon',
                    'coordinates': [[[-83.1455, 42.4137], [-83.145, 42.4137], [-83.14505, 42.41465], [-83.14555, 42.41465]]]
                }
            }
        },
        'layout': {},
        'paint': {
            'fill-color': '#808',
            'fill-opacity': 0.7
        }
    })
  }
}

function isElementOnScreen(id) {
  var element = document.getElementById(id);
  var bounds = element.getBoundingClientRect();
  return bounds.top < window.innerHeight && bounds.bottom > 0;
}
