import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFraW5ndGhpbmdzIiwiYSI6ImNsdGc1N205MDBmMHgyam8xamVyOHI4YTIifQ.ewldWSKthpPIwCXvuKjPRw'

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/makingthings/cltotxevf001a01pngsz9ayiw',
    center:[0 , 0],
    zoom: 0.6,
    interactive: false,        
},
)


// var map = new mapboxgl.Map({
//     container: 'map',
//     style: {
//         version: 8,
//         sources: {
//             'mapbox-dem': {
//                 type: 'raster-dem',
//                 url: 'mapbox://styles/makingthings/cltotxevf001a01pngsz9ayiw',
//                 tileSize: 512,
//                 maxzoom: 14
//             }
//         },
//         layers: [
//           {
//             id: 'background',
//             type: 'background',
//             paint: { 
//               'background-color': 'red' 
//             }
//           }
//         ]

//       },
// });



export default map;