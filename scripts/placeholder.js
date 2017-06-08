$(function(){
	window.addPlaceholder = function($input){
		var tipValue = $input.attr('placeholder');
		if(!$input.defaultValue) {
			$input.val(tipValue).addClass("phcolor");
		}
		$input.focus(function() {
			if($input.val() == tipValue){
				$(this).val("");
			}
			$(this).removeClass("phcolor");
		}).blur(function() {
			if($input.val() == "") {
				$(this).val(tipValue).addClass("phcolor");
			} else if($input.val() == tipValue) {
				$(this).addClass("phcolor");
			}
		}).keydown(function() {
			$(this).removeClass("phcolor");
		});
	};
	window.supportPlaceholder = 'placeholder' in document.createElement('input');
	if(!window.supportPlaceholder){
		$('input[type="text"]').each(function(){
			addPlaceholder($(this));
		});
	}
	
    // Get The Value Of The Input Element
	window.getInputValue = function(inputName){
    	var $input = $('input[name="' + inputName + '"]');
    	var value = $input.val();
    	if(!supportPlaceholder) {
    		var tipvalue = $input.attr('placeholder');
        	if (value == tipvalue) return "";
    	}
    	return value;
    };

	// Clear The Input Value And Instead Of Placeholder Value
	window.clearInputValue = function(inputName) {
		var $input = $('input[name="' + inputName + '"]');
		if(!supportPlaceholder) {
			$input.focus().blur();
		} else {
			$input.val('');
		}
	}

})
