function search(event) {
	if(event.keyCode=='13'){
		var toSearch = $('edit-search-theme-form-keys').getValue();
		window.location.replace("http://collections.natural-europe.eu/cultural-finder/index.html?query="+toSearch);
	}
}

function search2() {
	var toSearch = $('edit-search-theme-form-keys').getValue();
	if(toSearch != "")
		window.location.replace("http://collections.natural-europe.eu/cultural-finder/index.html?query="+toSearch);
}

function clearInput() {
	var word = $('edit-search-theme-form-keys').getValue();
	if(word == "Search...")
		$('edit-search-theme-form-keys').value = "";
}


function defaultInput() {
	var word = $('edit-search-theme-form-keys').getValue();
	if(word == "")
	$('edit-search-theme-form-keys').value = "Search...";
}
