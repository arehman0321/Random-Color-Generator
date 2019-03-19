$('button').click(function(){
    var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#';
    for(var i = 0; i < 6; i++){
        color += hex[Math.round(Math.random() * 15)];
    }
    console.log(color);
    
    $('body').css('background-color', color);
    $('div').html(color);
});