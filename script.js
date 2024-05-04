//subtracts menu height from window to get code height
var windowHeight = $(window).height();
var menuBarHeight = $("#menuBar").height();
var codeContainerHeight = windowHeight - menuBarHeight;
$(".codeContainer").height(codeContainerHeight + "px");

$(".toggle").click(function(){
  //changes background of active buttons
  $(this).toggleClass("selected");
  
  //creates var activeDiv which stores content of html tag i.e. HTML, CSS, JS, Result
  var activeDiv = $(this).html();
  //uses activeDiv var to select the container ID and uses toggle fnc to toggle display
  $("#" + activeDiv + "Container").toggle();
  
  //counts the # of active divs using filter fnc to return # of divs with css display != none
  var showingDivs = $(".codeContainer").filter(function(){
    return($(this).css("display")!="none");
  }).length;
  
  //changes the css width of the containers by dividing number of showing divs
  var width = 100/showingDivs;
  $(".codeContainer").width(width + "%");
  
});

$("#runButton").click(function(){
    $("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());

  
});