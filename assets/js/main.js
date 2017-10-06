$(document).ready(function(){
     var questions = $('.v3-input-wrap');
      var dots = $('.form-dots a');

      $(questions).hide();
      // hides next arrow for last item
      $(questions).last().find('.next-click').hide();
      //shows first question on load
      $(questions).first().addClass("active").show();
      //makes first dot active on load
      $(dots).first().addClass("active");

      //hides questions with transition
      var hideQuestions = function() {
        $(questions).addClass("up")
        setTimeout(function(){
          $(questions).hide();
          $(questions).removeClass("up")
          $(questions).removeClass("active")
        },200)
      }

      //when each dot is clicked, hide questions and show the one associated with dot
      $(dots).each(function(key, val){
        $(val).click(function(){

          hideQuestions();
          //changes which dot has active class
          $(dots).removeClass('active');
          $(val).addClass('active');

          //shows the correct item according to data-show
          var id = $(val).attr('data-show');
          var showMe = id  + '-wrap';
          //transition stuff
          setTimeout(function(){
            $(showMe).show();
            $(showMe).addClass("active");
          },200)

        });
      });
      $('.next-click').click(function(){
        hideQuestions();
        //shows the correct item according to data-show
        var id  = $(this).attr('data-show');
        var showMe = id  + '-wrap';
        //changes which dot has active class
        $(dots).each(function(key, val){
          if($(val).attr('data-show') == id) {
            $(val).addClass('active');
          }
          else {
            $(val).removeClass('active');
          }
        });
        //transition stuff
        setTimeout(function(){
          $(showMe).show();
          $(showMe).addClass("active");
        },200)
      });
      var one = $('#one');
      var two = $('#two');
      var three = $('#three');
      var four = $('#four');
      var five = $('#five');

      var openCards = function() {
        one.toggleClass('open-right-max');
        setTimeout(function(){
          two.toggleClass('open-right')
        },20);
        setTimeout(function(){
          three.toggleClass('open-center')
        },40)
        setTimeout(function(){
          four.toggleClass('open-left')
        },60)
        setTimeout(function(){
          five.toggleClass('open-left-max')
        },80);
      };
      $('.open-cards').click(function(){
        openCards();
      });

});
