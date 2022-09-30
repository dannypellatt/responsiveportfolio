
$(document).ready(function(){ 
    var lastBoxOpened = 0;
    
    $("input[name$='group1']").click(function() {
        var boxNumber = parseInt($(this).parents('.desc').attr("data-box"));
        
        //check if the data-box was succesfully retrieved. If not, first option chosen, reset all of it
        if(isNaN(boxNumber)){
         boxNumber = 0;
        }
            
        var test = $(this).val();
        var target = $("#"+test)
        var newBoxOpened = target.attr("data-box");
        //check if the last opened box was an earlier one than the newly clicked one
        if(lastBoxOpened > boxNumber){
         //hide boxes beyond the one we opened now
         $('.desc').each(function(){
         //if box number is bigger than the currently clicked box, close them.
          if($(this).attr("data-box") > boxNumber){
          $(this).hide();
          //uncheck the previously selected radio buttons in now hidden things
          $('input', this).prop("checked", false);
          }
         });
        }
        //render target box
         target.show();
         //update last opened box to the newly opened one
         lastBoxOpened = newBoxOpened;
    }); 
});

// makes the category highlighted when chosen
$('.radio_mark_category').on('click', function(){
    $('.radio_mark_category').removeClass('selected');
    $('.radio_mark_project').removeClass('selected');
    $(this).addClass('selected');
});
$('.radio_mark_project').on('click', function(){
    $('.radio_mark_project').removeClass('selected');
    $(this).addClass('selected');
});


