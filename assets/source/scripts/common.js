//TODO: add picture urls in JSON
//TODO: fetch JSON from url asynchronously
//TODO: show image in HTML depending on which tab is chosen

let cafes = {
  "0": {
	"name": "Traveller's",
	"coords": {
	  "lng": 123,
	  "lat": 123
		}
  },
  "1":{
	"name": "Starbucks",
	"coords": {
	  "lng": 123,
	  "lat": 123
		}
  },
  "2":{
	"name": "",
	"coords": {
	  "lng": 123,
	  "lat": 123 
		}
  }
}

const renderCafes = cafe => {
	const {name, coords} = cafe
	const cafeDom = document.createElement('div')
	cafeDom.className = 'cafes__cafe cafe'
	cafeDom.innerHTML = `
		<div id="cafe__name">${name}</div>
		<div id="cafe__coordinates">${coords.lat} ${coords.lng}</div>
	`
	document.querySelector('.cafes').append(cafeDom)
}


const getCafes = () => {
	for (var i in cafes) {
		renderCafes(cafes[i])
	}
}
getCafes()
const toggleSingle = () => {
	Array.from(document.querySelectorAll('.cafe')).forEach(element => {
		element.onclick = () => {
			if (!element.classList.contains('cafe--chosen')) {
				element.classList.add('cafe--chosen')
				var cord = element.querySelector('#cafe__coordinates').innerHTML;
			} else {
				element.classList.remove('cafe--chosen')
			}
		}
	})
}

const toggleMultiple = () => {
	document.querySelector('.cafe').classList.add('cafe--chosen')

	Array.from(document.querySelectorAll('.cafe')).forEach(element => {
		element.onclick = () => {
			if (!element.classList.contains('cafe--chosen')) {
				Array.from(document.querySelectorAll('.cafe')).forEach(el => el.classList.remove('cafe--chosen'))
				element.classList.add('cafe--chosen')
			}
		}
	})
}
window.initMap = function(){
	var uluru = {lat: 61.251458, lng: 73.4293743};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
initMap()
toggleMultiple()