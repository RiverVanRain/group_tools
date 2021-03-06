define(function(require){
	var $ = require('jquery');
	var Ajax = require('elgg/Ajax');
	var lightbox = require('elgg/lightbox');

	$(document).on('click', '#group-tools-auto-join-add-pattern', function (event){
		event.preventDefault();
		
		var ajax = new Ajax();
		ajax.view('group_tools/elements/auto_join_match_pattern', {
			success: function(data) {
				$('#group-tools-auto-join-add-pattern').before(data);
				lightbox.resize();
			}
		});
		
		return false;
	});
});