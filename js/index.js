mapboxgl.accessToken = 'pk.eyJ1IjoiamNocy1tYXR0aGV3IiwiYSI6ImNqYXd4Z3lsYjBzNWMyd21rODEyb2VsNW4ifQ.reqWa5So56wgdT2aUar8dA'

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-v9',

  center: [-83.08, 42.355],
  zoom: 12.2,
  bearing: -0.5,
  pitch: 35,
  interactive: false

});

var popups = []

$('#card_nav__next').click(nextScene)
$('#card_nav__prev').click(prevScene)

var scenes = [
  {
    card: {
      title: '<h1>Equitable Development in Detroit</h1>',
      body: null
    },
    map_view: {
      center: [-83.08, 42.355],
      zoom: 12.2,
      bearing: -0.5,
      pitch: 35,
      duration: 4000
    },
    markers: null
  },
  {
    card: {
      title: 'Equitable Development in Detroit',
      body: '<p>After decades of decline, there is a nascent recovery developing in Detroit.</p><p>Over the past eight years, the Midtown neighborhood, adjacent to downtown, saw a resurgence of investment and population through the concerted effort of public, private, and nonprofit actors.</p>'
    },
    map_view: {
      center: [-83.08, 42.355],
      zoom: 12.2,
      bearing: -0.5,
      pitch: 35,
      duration: 4000
    },
    markers: null
  },
  {
    card: {
      title: 'Equitable Development in Detroit',
      body: '<p>Hoping to replicate the success of Midtown in other, more distressed areas of the city, some of those same public, private, and nonprofit organizations have set their sights on three neighborhoods, in hopes of spurring similar turnarounds.</p>'
    },
    map_view: {
      center: [-83.08, 42.355],
      zoom: 12.2,
      bearing: -0.5,
      pitch: 35,
      duration: 4000
    },
    markers: null
  },
  {
    card: {
      title: 'Neighborhood 1:<br/>Livernois-McNichols',
      body: `<p>The intersection of Livernois and McNichols marks stark socioeconomic boundaries.</p>
<p>In the upper right, one of Detroit's highest income neighborhoods; in the lower left, a disinvested area marked by empty lots and abandoned homes.</p>`
    },
    map_view: {
      bearing: 0,
      center: [-83.143, 42.4173],
      zoom: 14.8,
      pitch: 15,
      bearing: -0.6,
      duration: 6000
    },
    markers: [
      {
        description: "<strong>Anchor Institutions</strong><p>University of Detroit Mercy is a stable local employer that draws people into the neighborhood.</p>",
        icon: "school",
        class: 'marker__bg_square',
        coordinates: [-83.1384801864624, 42.41496591334187],

      },
      {
        description: '<strong>Livernois Ave and McNichols Road</strong><div id="street-view-1" class="mapboxgl-popup__street-view"></div>',
        icon: "camera_alt",
        class: 'marker__bg_square',
        //icon: "info",
        //class: 'marker__bg_circle',
        coordinates: [-83.14081907272339, 42.41714411650643],
        street_view: {
          heading: 300,
          default_open: true
        }
      }
    ]
  },
  {
    card: {
      title: 'University District Neighborhood',
      body: `<p>To the Northeast, full blocks are populated with well-maintained homes.</p>`
    },
    map_view: {
      bearing: 0,
      center: [-83.1356, 42.4209711],
      zoom: 18,
      pitch: 10,
      bearing: -0.6,
      duration: 6000,
      //easing: linearEasing
    },
    markers: [
      {        
        description: 'University District Neighborhood',
        icon: "camera_alt",
        class: 'marker__bg_square',
        coordinates: [-83.1354698, 42.4209711],
        street_view: {
          heading: 330,
          default_open: true
        }
      }
    ]
  },
  {
    card: {
      title: 'Fitzgerald Neighborhood',
      body: '<p>Just a half a mile away, the blocks have many vacant lots and dilapidated structures.</p>'
    },
    map_view: {
      bearing: 0,
      center: [-83.1440, 42.4158],
      zoom: 19.5,
      pitch: 25,
      bearing: 120,
      duration: 7000,
      //easing: linearEasing
    },
    markers: [
      {        
        description: 'Fitzgerald Neighborhood',
        icon: "camera_alt",
        class: 'marker__bg_square',
        coordinates: [-83.1440395, 42.4157703],
        street_view: {
          heading: 260,
          default_open: true
        }
      }
    ]
  },
     {
    card: {
      title: 'From Abandonded to Amenity',
      body: `<p>In the middle of this disinvested area, the site of a new park reclaimed from empty and dilapidated lots.</p>`
            //<p>See before and after photos on the map:</p>`
    },
    map_view: {
      center: [-83.144865, 42.4146],
      zoom: 17,
      bearing: 27,
      pitch: 25,
      duration: 3000
    },
    /*markers: [
       {        
        description: 'Park Location, after',
        icon: "camera_alt",
        class: 'marker__bg_square',
        coordinates: [-83.14525, 42.4147],
        street_view: {
          heading: 190,
          zoom: 0.5,
          lat: 42.4146516,
          lon: -83.1450293
        }
      },
      {        
        description: 'Park Location, before',
        icon: "camera_alt",
        class: 'marker__bg_square',
        coordinates: [-83.1449554, 42.414666],
        street_view: {
          heading: 190,
          zoom: 0.5
        }
      }
    ],//*/
       layers: [{
      'id': 'new_park',
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
    }]
  }, 
  {
    card: {
      title: 'Reviving a Commercial Corridor',
      body: '<p>Adjacent to this disinvested area lies a commercial corridor, mostly abandoned.</p><p>The first of several renovated storefronts - a coffee shop - is already open. However, much work remains to be done.</p>'
    },
     map_view: {
       bearing: 0,
       center: [-83.146, 42.4173],
       zoom: 17.5,
       pitch: 25,
       bearing: -10,
       duration: 3000
     },
    markers: [
      {
        "description": '<strong>The Detroit Sip</strong><p>A new local coffee shop serves as a potential gathering space to promote community.</p><img src="https://s3.amazonaws.com/jchs-app-source-data/IMG_4462.jpg">',
        "icon": "local_cafe",
        class: "marker__bg_square",
        //class: 'marker__coffee',
        "coordinates": [-83.14574360847473, 42.41725500482548]
      },
      {        
        description: 'Commercial Corridor',
        icon: "camera_alt",
        class: 'marker__bg_square',
        coordinates: [-83.1451347, 42.4171164],
        street_view: {
          heading: 310,
          zoom: 1.8
        }
      }
    ]
  },
  {
    card: {
      title: 'Neighborhood 2:<br/>Southwest Detroit',
      body: `<p>The story would continue with additional information about Livernois-McNichols, and a map tour of the other two neighborhoods.</p>
<p>E.g., In Southwest Detroit, a participatory budgeting process is breathing new life into an existing park.</p>`
    },
     map_view: {
       center: [-83.093118, 42.318158], 
       bearing: 0,
       zoom: 15.6,
       pitch: 40,
       duration: 8000
     },
     markers: null
   }
]

function nextScene () {
  var current_scene_num = $('#card').data('scene-number')
  switch (current_scene_num) {      
    case 0:
      var new_scene_number = current_scene_num + 1 
      $('#card_nav__prev').html('&larr; Back | ')
      break
      
    case scenes.length - 2: //move to last card
      var new_scene_number = current_scene_num + 1 
      $('#card_nav__next').html('Back&nbsp;to&nbsp;top&nbsp;&uarr;')
      break

    case scenes.length - 1: //move back to top
      console.log('to first')
      var new_scene_number = 0
      $('#card_nav__next').html('Next &rarr;')
      break

    default: 
      var new_scene_number = current_scene_num + 1 
  }
  
  console.log('scene ' + current_scene_num + ' to ' + new_scene_number)
  closePopups()
  var new_scene = scenes[new_scene_number]
  if (new_scene.map_view.easing) { 
    map.easeTo(new_scene.map_view) 
  } else {
    map.flyTo(new_scene.map_view)
  }
  map.once('moveend', function () {
    drawMarkers(new_scene)
    drawLayers(new_scene)
  }) 
  //change card text
  $('#card').data('scene-number', new_scene_number)
  //if (new_scene.card.position) { $('#card').css(new_scene.card.position) }
  $('#card_title').html(new_scene.card.title)
  $('#card_body').html(new_scene.card.body)

}

function prevScene () {
  var current_scene_num = $('#card').data('scene-number')
  switch (current_scene_num) {      
    case 0:
      var new_scene_number = scenes.length - 1
      $('#card_nav__next').html('Back&nbsp;to&nbsp;top&nbsp;&uarr;')
      break

    case scenes.length - 1: //move back to second to last
      console.log('to first')
      var new_scene_number = current_scene_num - 1 
      $('#card_nav__next').html('Next &rarr;')
      break

    default: 
      var new_scene_number = current_scene_num - 1 
  }
  
  console.log('scene ' + current_scene_num + ' to ' + new_scene_number)
  closePopups()
  var new_scene = scenes[new_scene_number]
  if (new_scene.map_view.easing) { 
    map.easeTo(new_scene.map_view) 
  } else {
    map.flyTo(new_scene.map_view)
  }
  //change card text
  $('#card').data('scene-number', new_scene_number)
  //if (new_scene.card.position) { $('#card').css(new_scene.card.position) }
  $('#card_title').html(new_scene.card.title)
  $('#card_body').html(new_scene.card.body)

}

function drawMarkers (scene) {
  if (typeof scene.markers != 'undefined' && scene.markers != null) {
    scene.markers.forEach(function (marker) {
      var el = document.createElement('div')
      
      if (marker.class) { el.className = marker.class }
      if (marker.icon) { el.innerHTML = `<i class="material-icons JCHS-map-marker">${marker.icon}</i>` }
      
      var new_popup = new mapboxgl.Popup()
      
      if (marker.street_view) {
        var lat = marker.street_view.lat || marker.coordinates[1]
        var lon = marker.street_view.lon || marker.coordinates[0] 
        var street_view_div = document.createElement('div')
        street_view_div.setAttribute('class', 'mapboxgl-popup__street-view')
        new_popup.setDOMContent(street_view_div)
        new_popup.on('open', function() {
        new_street_view(
          street_view_div, 
          lat, 
          lon, 
          marker.street_view.heading,
          marker.street_view.zoom
        )
        })

        if(marker.street_view.default_open === true) {
          //new_marker.togglePopup()
          setTimeout(function () {new_marker.togglePopup()}, 300)
        }//*/
      } else {
        var text_div = document.createElement('div')
        text_div.setAttribute('class', 'mapboxgl-popup__text')
        text_div.innerHTML = marker.description
        new_popup.setDOMContent(text_div)
      }

      var new_marker = new mapboxgl.Marker(el)
        .setLngLat(marker.coordinates)
        .setPopup(new_popup)
        .addTo(map)

      //new_marker.togglePopup()
      popups.push(new_popup)        

    })
  }
}

function new_street_view(container, lat, lon, heading = 0, zoom = 1) {
  //console.log(arguments)
  new google.maps.StreetViewPanorama(
    container,
    {
      position: {lat: lat, lng: lon},
      radius: 1000,
      pov: {heading: heading, pitch: 0},
      zoom: zoom,
      disableDefaultUI: true,
      fullscreenControl: true
    })
}

function drawLayers (scene) {
  if (typeof scene.layers != 'undefined' && scene.layers != null) {
    scene.layers.forEach(function (layer) {
      map.addLayer(layer)
    })
  }
}

function closePopups () {
  popups.forEach(x => x.remove())
  //popups = []
}

function linearEasing(t) {
  return t
}
