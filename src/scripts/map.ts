import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibWFraW5ndGhpbmdzIiwiYSI6ImNsdGc1N205MDBmMHgyam8xamVyOHI4YTIifQ.ewldWSKthpPIwCXvuKjPRw'

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/makingthings/cltotxevf001a01pngsz9ayiw',
    center:[-74.5 , 40],
    zoom: 9,
    interactive: false,
})

export default map;