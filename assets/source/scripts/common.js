//TODO: add picture urls in JSON
//TODO: fetch JSON from url asynchronously
//TODO: show image in HTML depending on which tab is chosen

let cafes = {
  "0": {
	"name": "Traveller's",
	"coords": {
	  "lat": 61.288572,
	  "lng": 73.405472,
		},
	"pic_url": "http://ttphotos.s3-website-eu-west-1.amazonaws.com/gallery/12/210012/1024x768/2448611.jpg"
  },
  "1":{
	"name": "Starbucks",
	"coords": {
	  "lat": 123,
	  "lng": 123,
	  "pic_url": ""
		}
  },
  "2":{
	"name": "",
	"coords": {
	  "lat": 123,
	  "lng": 123,
	  "pic_url": ""
		}
  }
}

const renderCafes = cafe => {
	const {name, coords, pic_url} = cafe
	const cafeDom = document.createElement('div')
	cafeDom.className = 'cafes__cafe cafe'
	cafeDom.innerHTML = `
		<div id="cafe__name">${name}</div>
		<div id="cafe__coordinates__lat">${coords.lat}</div>
		<div id="cafe__coordinates__lng">${coords.lng}</div>
		<div id="cafe__image"><img href="${pic_url}"></div>
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
				var plng = element.querySelector('#cafe__coordinates__lng').innerHTML;
				var plat = element.querySelector('#cafe__coordinates__lat').innerHTML;
			} else {
				element.classList.remove('cafe--chosen')
			}
		}
	})
}

toggleSingle()

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

toggleMultiple()

function initMap() {
	var trav = {lat: 61.2497528, lng: 73.4023178}
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: trav
	});
	var marker = new google.maps.Marker({
		position: trav,
		map: map
	});
}

initMap()
