module.exports = function(hexcolor){
	var R = parseInt(hexcolor.substring(0, 2),16);
	var G = parseInt(hexcolor.substring(2, 4),16)
	var B = parseInt(hexcolor.substring(4, 6),16);
	
	var RGB ={
		R:R,
		G:G,
		B:B
	}
	return RGB
} 
