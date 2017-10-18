var numStars = 80;
var minPercent = 5;
var maxPercent = 95;

var drawStars = function(){
    for (var i = 0; i < 100; i++){
        var leftRand = Math.floor(Math.random() * (maxPercent - minPercent + 1)) + minPercent;
        var topRand = Math.floor(Math.random() * (maxPercent - minPercent + 1)) + minPercent;
        var appending = "<div class='stars' style='left:"+leftRand+"%;top:"+topRand+"%;'></div>";
        $('.glowies').append($(appending));
    }
};

var navHandler = function(section){
    $('.nav-link').removeClass('active');
    $('.cover').addClass('hidden');
    $('#' + section).removeClass('hidden');
    $('#nav-' + section).addClass('active');
};

setInterval(function(){
    $('.stars').remove();
    drawStars();
}, 10000);

setTimeout(function(){
    var dayMs = 1000*60*60*24;
    var date = new Date('2018-06-15');
    var today = new Date();
    var dateMs = date.getTime();
    var todayMs = today.getTime();
    var diffMs = dateMs - todayMs;
    var daysToGo = Math.round(diffMs/dayMs);

    $('#countdown').text(daysToGo);
    drawStars();
}, 100);