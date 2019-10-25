const reproject = require('reproject');

const EPSG = {
	'EPSG:3301':
		'+proj=lcc +lat_1=59.33333333333334 +lat_2=58 +lat_0=57.51755393055556 +lon_0=24 +x_0=500000 +y_0=6375000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
	'EPSG:3857':
		'+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs'
};

// EPSG:3301 Endla 4
const input = {
	type: 'Point',
	coordinates: [541796.98, 6588298.37]
};

const output = reproject.reproject(input, 'EPSG:3301', 'EPSG:4326', EPSG);

console.log(output);
