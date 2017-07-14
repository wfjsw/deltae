var xyz = require('./xyz');
var lab= require('./lab');
var hexcolor = "#007ace";
var deltae = require('./deltae.js');
var rgb = require('./rgb');

module.exports = {
	lab: function(XYZ){
		return lab(XYZ)
	},
	xyz: function(hexcolor){
		return xyz(hexcolor)

	},
	hexcolor:function(hexcolor){
		return rgb(hexcolor)
	},
	delta:function(color,compare){
		return deltae(
			lab(color),
			lab(compare)
		)	
	}
}
