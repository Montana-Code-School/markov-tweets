function split(s) {
	if (s ===""){
		return [];
	} else {
		var cleanArray = s.split(" ")	
		return cleanArray.filter(function(str){
			return str !== ""
		})
	}
}

module.exports = {
	split: split,
}