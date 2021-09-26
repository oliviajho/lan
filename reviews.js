  	(function($) {
  		var pageToFetch = 2;
  		var maxPages = 1;
  		$('#load-more-comments-btn').on('click', function(e) {
            $('.review-container').each(function() {
                $(this).removeClass('hide-review');
            });

  			if (pageToFetch > maxPages) {
  				return false;
  			}

  			e.preventDefault();
  			var btn = $(this);
  			btn.html('<i class="fa fa-spinner" aria-hidden="true"></i> Loading');
  			btn.addClass('disabled');
  			  			$.get('' + 'page/' + pageToFetch)
  			.done(function(response) {
  				btn.html('Show more');
  				btn.removeClass('disabled');
                  console.log(response.body);
  				if (response && response.success) {
  					$('.product-review-list-parent').append(response.body);
  					pageToFetch++;
  				}
  				else {
  					if (response.error) {
  						alert(response.error);
  					}
  					else{
  						alert('Loading more comments failed. Please try again later.');
  					}
  				}
  				if (pageToFetch > maxPages) {
  					$(btn).remove();
  				}
  			})
  			.fail(function() {
  				btn.html('Show more');
  				btn.removeClass('disabled');
  				alert('Loading more comments failed. Please try again later.');
  			});
  			ret