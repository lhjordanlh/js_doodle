var color = 'black';
var thickness= 10;
var started = 0;

$(document).ready(function(){

var color_botton= $('#color');
    
    createGrid(thickness);
    
    color_botton.click(function(){
        $('#c-panel').slideToggle('slow');
    });
    
    $('#thickness').click(function(){
        do{thickness=prompt("Please enter 1-10")}while(thickness>10||thickness<1);
        
        clearGrid();
        $('.row #block').unbind();
        removeGrid();
        createGrid(thickness);
        draw();
    });
    
    color_select($('#black'));
    color_select($('#red'));
    color_select($('#blue'));
    color_select($('#yellow'));
    color_select($('#green'));
    color_select($('#white'));
    
    $('#clear').click(function(){
        clearGrid();
    });
    
    draw();
});


var color_select = function($c){
    $c.click(function(){
        color= $c.css("color");
        $('#color').css('color',color);
    });
};

function createGrid(size){
    size= 128/size;
    size= Math.floor(size);
    for(var i=0; i<size; i++){
        $('.canvas').append("<div class='row'></div>");
    };
    for(var i=0; i<size; i++){
        $('.row').append("<div id='block'></div>");
    };
    
    var w= Math.floor(1040/size);
    
    $('.row #block').css('height', w);
    $('.row #block').css('width', w);
};

function removeGrid(){
    $(".canvas").html("");
}

function clearGrid(){
    $('.row #block').css('background-color', 'white');
}

function draw(){
        $('.row #block').mouseenter(function(){
        $(this).css('background-color',color);
    });
}