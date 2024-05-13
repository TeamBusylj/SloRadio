
function debounce(func, delay) {
  let timeoutId;
  return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
          func.apply(context, args);
      }, delay);
  };
}
const delayedSearch = debounce(searchRefresh, 300);
window.addEventListener("load", async function () {
  setInterval(async () => {}, 2000);
  const url = "https://mestnipromet.cyou/api/v1/resources/buses/info";
  const response = await fetch(url);
  const movies = await response.json();
  createBuses(movies.data);
 this.document.querySelector(".search").addEventListener("input",  delayedSearch)
});
var arrivalsMain = {};
var tripIds = [];
var stationList = {};
var latitude 
var longitude
function getLocation() {
  navigator.geolocation.getCurrentPosition(function (position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  }, error => {
    list.style.display = "block"
    loader.style.display = "none"
    list.innerHTML = "<md-list-item>Geolocation is not supported by this browser.</md-list-item>";
  }, {
  timeout: 10000,
  maximumAge: 60000,
  enableHighAccuracy: true
  });
}

setInterval(getLocation, 60000);
async function createBuses(data) {
  for (const bus in data) {
    if (data[bus].trip_id && !tripIds.includes(data[bus].trip_id)) {
      tripIds.push(data[bus].trip_id);
    }
  }

  // for (let i = 0; i < tripIds.length; i++) { }
  const response = await fetch(
    "https://cors.proxy.prometko.si/https://lpp.ojpp.derp.si/api/station/station-details"
  );
  const movies = await response.json();

  stationList = movies.data;

  console.log("finish");
  getLocation();
  createStationItems();
}



function createStationItems(search, query) {
  var loader = document.getElementById("loader");
  var list = document.getElementById("listOfStations");
  list.innerHTML = ''
  list.style.display = "none"
  loader.style.display = "block"
  var nearby = {};
  if (navigator.geolocation) {
   
     
      let centertation = [];
      for (const station in stationList) {
        let item2 = addElement("md-list-item", null, "stationItem");
        item2.setAttribute("interactive", "");
        addElement("md-ripple", item2);
        let item = addElement("div", item2, "station");
        item.innerHTML =
          '<span class="stationName">' + stationList[station].name;
        +"</span>";

        const distance = haversineDistance(
          latitude,
          longitude,
          stationList[station].latitude,
          stationList[station].longitude
        );
        if (distance < 3 || search) {
          console.log(stationList[station].name);
          let cornot = "";
          if (!centertation.includes(stationList[station].name)) {
            centertation.push(stationList[station].name);
            cornot = '<span class="center">CENTER</span>';
          }

          if (distance > 1) {
            item.innerHTML +=
              cornot +
              "<span class=stationDistance>" +
              distance.toFixed(1) +
              " km</span>";
            nearby[distance.toFixed(5)] = item2;
          } else {
            item.innerHTML +=
              cornot +
              "<span class=stationDistance>" +
              Math.round(distance * 1000) +
              " m</span>";
            nearby[distance.toFixed(5)] = item2;
          }
          let buses = addElement("div", item, "buses");
          for (const bus of stationList[station].route_groups_on_station) {
            buses.innerHTML +=
              "<div class=busNo style=background-color:#" +
              lineColors[bus.replace(/\D/g, "")] +
              " id=bus2_" +
              bus +
              ">" +
             bus +
              "</div>";
          }
          item.appendChild(buses);
          item.addEventListener("click", () => {
            stationClick(station);
          });
        }
      }
      console.log(nearby);
      const sortedArray = Object.keys(nearby)
        .map((key) => parseFloat(key).toFixed(5))
        .sort((a, b) => a - b)
        .map((key) => nearby[key]);

      console.log(sortedArray);
      for (const stationDistance of sortedArray) {
        if(search){
          if (stationDistance.innerText.toLowerCase().includes(query.toLowerCase())) {
            list.appendChild(stationDistance);
          }
        }else{
          list.appendChild(stationDistance);
        }
       
      }
      list.style.display = "block"
      loader.style.display = "none"
    

  }
}
function searchRefresh() {
  let query = document.querySelector(".search").value;
  createStationItems(true, query)
}



function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180; // Convert degrees to radians
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

async function stationClick(station) {
  const response = await fetch(
    " https://cors.proxy.prometko.si/https://lpp.ojpp.derp.si/api/station/arrival?station-code=" +
      stationList[station].ref_id
  );
  const movies = await response.json();
  console.log(movies.data);
  if (movies.data.arrivals.length > 0) {
    let arrivalsContainer = addElement(
      "div",
      document.body,
      "arrivalsContainer"
    );
    for (const arrival of movies.data.arrivals) {
      if (document.getElementById("bus_" + arrival.route_name)) {
        document
          .getElementById("bus_" + arrival.route_name)
          .parentNode.parentNode.querySelector(".arrivalData").innerHTML +=
          "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + arrival.eta_min + " min";
      } else {
        let arrivalItem = addElement("div", arrivalsContainer, "arrivalItem");
        arrivalItem.innerHTML =
          "<b><div class=busNo style=background-color:#" +
          lineColors[arrival.route_name.replace(/\D/g, "")] +
          " id=bus_" +
          arrival.route_name +
          ">" +
          arrival.route_name +
          "</div></b><div class=arrivalData><b><span>" +
          arrival.trip_name +
          "</span></b>" +
          arrival.eta_min +
          " min</div>";
      }
    }
  }
}
function addElement(tag, parent, className) {
  var element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}

const lineColors = {
  1: "C93336",
  2: "8C8841",
  3: "EC593A",
  5: "9F539E",
  6: "939598",
  7: "1CBADC",
  8: "116AB0",
  9: "86AACD",
  11: "EDC23B",
  12: "214AA0",
  13: "CFD34D",
  14: "EF59A1",
  15: "A2238E",
  18: "895735",
  19: "EA9EB4",
  20: "1F8751",
  21: "52BA50",
  22: "F6A73A",
  24: "ED028C",
  25: "0F95CA",
  26: "231F20",
  27: "57A897",
  30: "9AD2AE",
  40: "496E6D",
  42: "A78B6B",
  43: "4E497A",
  44: "817EA8",
  51: "6C8BC6",
  52: "00565D",
  53: "C7B3CA",
  56: "953312",
  60: "ACBB71",
  61: "F9A64A",
  71: "6C8BC6",
  72: "4CA391",
  73: "FECA0A",
  78: "C96D6A",
  16: "582C81",
  23: "40AE49",
};
