// 1. create variables for our map
// 2. Write a function that initializes our map
// 3. We're going to run that funciton

var ourLoc;
var view;
var map;


function init() {
    ourLoc = ol.proj.fromLonLat([41.043316, 28.862457]);

    view = new ol.View({
        center: ourLoc,
        zoom: 6
    });

    map = new ol.Map({
        target: 'map',
        //Create layers ("Paints" the map onto your website)
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        loadTilesWhileAnimating: true,
        view:view
    });

    console.log("we loaded this init function BAM");
}

// AFTER SHE STRUGGLED FOR 80 YEARS, Kanyce finally realized, 
// Part of the DOM pattern (style of coding)
// console.log == print for JS, which prints *gag
// To CREATE the map, we RUN our init function
// This runs when we first open up our website

// document.addEventListener("DOMContentLoaded", function (e){
//     console.log("LOADED LSKDMFLKSDMFLKSDMFLKM");
//     init();
// });

window.onload = init;


