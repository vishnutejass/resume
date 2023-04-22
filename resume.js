var navMenuAnchortag=document.querySelectorAll('.nav-menu a');

 for(var i=0;i<navMenuAnchortag.length;i++){
     navMenuAnchortag[i].addEventListener('click',function(event){
         event.preventDefault();
         var targetsectionid=this.textContent.trim().toLowerCase();
         var targetsection=document.getElementById(targetsectionid);
         var targetsectioncoordinates=targetsection.getBoundingClientRect(targetsection);
          console.log(targetsectioncoordinates);
     });
 } 


 //handle scroll event on window
 //check that skill section container is visible or not
 //ensure that the colored skills divs is zero ->intitilsed/reset to 0 width value 
 //start animation on every skill->inc skill width from 0 to skill level at regular intervals
  //add data-skill-level
  //store skill level -> html with the help of data attribute

   var progressBars = document.queryCommandValue('.skill-progress > div');
   var skillscontainer=document.getElementById('skills-container');
   window.addEventListener('scroll',checkscroll);

var animationDone = false;
   function checkscroll(){

    var coordinates =skillscontainer.getBoundingClientRect();
    if( !animationDone&&coordinates.top< window.innerHeight/*viewportheight*/){

     
    }
   }
