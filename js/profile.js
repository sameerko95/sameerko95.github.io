$(document).ready(function(){
    $('[name="content"]').hide();
    
    if($(this).scrollTop()==0){
        $('.active').show();
    }

    $(document).on('click', '[name="shortcut"]', function(){
        // console.log($(this).text());
        var div_name = $(this).text().toLowerCase();
        $('#'+div_name).show();
    });

    $('.profile-pic').hover(function(){
        on();
    }, function(){
        off();
    });

    $(document).scroll(function(){
        var scroll_ratio = $(this).scrollTop()/$(this).height();
        
        var temp_1 = $('#work').height()+$('#about').height();
        if($(this).scrollTop()>=$('#about').height() && $(this).scrollTop()<temp_1){
            // console.log("Show work");
            $('#work').show();
        }

        var temp_2 = $('#work').height()+$('#about').height()+$('#projects').height();
        if($(this).scrollTop()>=temp_1 && $(this).scrollTop()<temp_2){
            // console.log("Show projects");
            $('#projects').show();
        }
        
        if($(this).scrollTop()>=temp_2){
            console.log("Show resume");
            $('#resume').show();
        }
        
    });

    $(document).on('click', '#resume-link', function(){
        $('.document-view').show();
    });
    
    var titles = [1,5,2,3,1];
    for(var j=0;j<5;j++){
        for(var i=0;i<titles[j];i++){
            if(i==0)
                var element =   '<div class="carousel-item active">'+
                                    '<img class="carousel-images" src="images/projects/carousel_'+(j).toString()+'_'+ (i+1).toString() +'.png" alt="...">'+
                                '</div>';
                
            else
                var element =   '<div class="carousel-item">'+
                                    '<img class="carousel-images" height="20em" src="images/projects/carousel_'+(j).toString()+'_'+ (i+1).toString() +'.png" alt="...">'+
                                '</div>';
            
            $('#project_' + (j).toString()).append(element);
        }
    }
        
});

function on() {
    document.getElementById("pic").style.transition = "3s";
    document.getElementById("pic").style.display = "block";
}

function off() {
    document.getElementById("pic").style.display = "none";
}