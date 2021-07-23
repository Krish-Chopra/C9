function setup() {
   var canvas = createCanvas(400,400)
   //canvas.fillstyle = "#FF0000";
   //canvas.fill();
   btn_red = createButton("RED")
   btn_red.position(100,50);
   //btn_red.mousePressed(red_bg);
   btn_red.mouseClicked(red_bg);
  
   btn_green = createButton("GREEN");
   btn_green.position(250,50);
   btn_green.mouseClicked(green_bg);

   }  
   function red_bg()
   {
      r = 255;
      g=0;
      b=0;

      background(rgb(255,0,0));

   }
  
    function green_bg() 
  {
    r = 0;
    g = 255;
    b = 0;
    background(rgb(0,255,0));
     } 


   