var DeltaE = require('delta-e');

module.exports = function(LabA,LabB){
	var color1 = {L: LabA.L, 
		A: LabA.a, 
		B: LabA.b};

	var color2 = {L: LabB.L, 
		A: LabB.a, 
		B: LabB.b};
	return DeltaE.getDeltaE00(color1, color2)
}