var wz,
wizard = {
	settings: {
		start: $('.btn.open-wizard'),
		heroLayouts: $('.layout.hero.style-cards'),
		question: $('.layout.wizard .question'),
	    answers: $('.answer'),
		result: $('.results .layout'),
	    nextQuestionID: '',
		backQuestionID: '',
	    buttonControls: $('.layout.wizard .controls .btn'),
	    buttonNext: $('.layout.wizard .controls .btn.next'),
	    buttonBack: $('.layout.wizard .controls .btn.back'),
	    customMsg: $('#custom-message'),
		wizardOpen: false,
	},
	init: function() {
		wz = this.settings;
		this.bindUIActions();
		console.log('wizard loaded!');
	},
	bindUIActions: function() {

		// Initialize the fancybox
		$(wz.start).click( function(evt) {
			evt.preventDefault();
			$.fancybox.open({
				// Options will go here
				src  : '#wizard',
			    type : 'inline',
				opts : {
					afterShow : function( instance, current ) {
						wz.wizardOpen = true;
						// console.info( 'Wizard is open! ' +  wz.wizardOpen);
					},
					afterClose : function( instance, current ) {
						wz.wizardOpen = false;
						// console.info( 'Wizard is closed! ' +  wz.wizardOpen);
					}
				}
			});
		});

		// Closing the fancybox
		$('.wizard-close-btn').click( function() {
			$.fancybox.close();
			console.log('Close the wizard!');
		});

	    // Selecting an answer
	    wz.answers.click( function(evt) {
			evt.preventDefault();
			wz.nextQuestionID = $(this).attr('href').substr(1);
			wizard.selectAnswer($(this));
	    });

	    // Selecting the next button
	    wz.buttonNext.click( function(evt) {
			// Check to make sure an answer was selected
			// If no answer was chosen, display an error message
			var target = $(this).data('target-question');
			// console.log('Target question: ' + target);

			if (target == 0) {
				console.log('Target equals 0.');
				// Display the custom message if an answer is already selected (from navigating with back and next buttons)
				if ( $('.question.active .answer').hasClass('selected') ) {
					console.log('An answer has the selected class.');
					wz.customMsg.html( $('.question.active .answer.selected').data('message') );
				} else {
					wz.customMsg.html('Please select an answer.');
				}
			} else {
				console.log('Target equals ' + target + '.');
				// Set the data attribute on the back button
				wz.backQuestionID = $(this).parents('.wizard').find('.question.active').attr('id');
				wz.buttonBack.data('target-question', wz.backQuestionID);

				wizard.goToQuestion(target);
				$(this).data('target-question', 0)
			}
	    });

		// Selecting the back button
		wz.buttonBack.click( function(evt) {
			window.history.back();
			// console.log(window.history);
			// var target = $(this).data('target-question');
			// wizard.goToQuestion(target);
		});

		window.addEventListener('popstate', function(e) {
			// console.log('Popstate event is happening.');
			// call goToQuestion and pass the variable window.location.hash
			var popstate = window.location.hash.replace('#', '');
			// console.log(popstate);
			// wizard.goToQuestion(popstate);

			// Remove active class from all questions
			wz.question.removeClass('active');

			// If popstate == empty, go to q1
			if (popstate == '') {
				// console.log('Popstate is empty.');
				// Set target question to active
				$('.wizard .question').first().addClass('active');
			} else {
				if (popstate.length > 3) {
					// console.log('Popstate length is > 3.');
					// This is a result
					wz.result.removeClass('active');
					// Take the popstate value, convert it to an array by exploding the string by comma
					popstate = popstate.split(',');
					$.each(popstate, function( index, value) {
						$('#' + value).addClass('active');
					});
					// Close the lightbox
					if (wz.wizardOpen == true) {
						$.fancybox.close();
					}
				} else {
					// console.log('Popstate is not empty, but not > 3.');
					// This is a question
					// Set target question to active
					$('.wizard #' + popstate).addClass('active');
					// Open the lightbox
					if (wz.wizardOpen == false) {
						$.fancybox.open();
					}
					// $.fancybox.open( $('#wizard') );
				}
			}
			// Then clear the custom message
			wz.customMsg.html('');

			// Replicating a click of the selected answer
			var selectedAnswer = $('.question.active .answer.selected');
			wz.nextQuestionID = selectedAnswer.attr('id');
			wizard.selectAnswer(selectedAnswer);
		});

		// **
		// On page load, check for a hashtag in the url and display a result
		// **
		var pageUrl = window.location.hash.replace('#', '');
		// console.log('The page url is: ' + pageUrl);
		if (pageUrl.length > 3) {
			// This is a result
			// Remove active class from all results
			wz.result.removeClass('active');
			wz.heroLayouts.removeClass('active');
			// Take the hash value, convert it to an array by exploding the string by comma
			pageUrl = pageUrl.split(',%20');
			// console.log('The page url is: ' + pageUrl);
			$.each(pageUrl, function( index, value) {
				$('.results #' + value).addClass('active');
			});
			// Reveal the results content
			$('.layout.hero.style-cards.results-content').addClass('active');
			// Close the lightbox
			$.fancybox.close();
			// Scroll to results
			// $('html, body').animate({
	        //     scrollTop: $('#results').offset().top - 160
            // }, 1500);
		} else if (pageUrl.length > 0 && pageUrl.length < 3) {
			// This is a question
			// Remove active class from all questions
			wz.question.removeClass('active');
			// Set target question to active
			$('.wizard #' + pageUrl).addClass('active');
			// Open the lightbox
			$.fancybox.open( $('#wizard') );
		}

	},
	selectAnswer: function($answer) {
		// Clear the selected class (from all selected answers)
		$answer.parents('.wizard').find('.question.active .answer').removeClass('selected');
		// Add the selected class
		$answer.addClass('selected');
		// Set the data attribute on the next button
		wz.buttonNext.data('target-question', wz.nextQuestionID);
		// Change the custom message according to answer selection
		wz.customMsg.html( $answer.data('message') );

	},
	goToQuestion: function($targetQuestion) {
		// Set a new pushstate
		history.pushState('Next Question', 'New Page', '#' + $targetQuestion);

		if ($targetQuestion.length > 3) {
			// This is a result
			wz.result.removeClass('active');
			wz.heroLayouts.removeClass('active');
			// Take the popstate value, convert it to an array by exploding the string by comma
			// console.log($targetQuestion);
			$targetQuestion = $targetQuestion.split(', ');
			$.each($targetQuestion, function( index, value) {
				$('.results #' + value).addClass('active');
			});
			$('.layout.hero.style-cards.results-content').addClass('active');
			// Close the lightbox
			$.fancybox.close();
		} else {
			// This is a question
			// Remove active class from all questions
			wz.question.removeClass('active');
			// Set target question to active
			$('.wizard #' + $targetQuestion).addClass('active');
		}

		// Then clear the custom message
		wz.customMsg.html('');
	},
	// Add a function for changing the pushstate
	changeUrl: function() {

	}
};
