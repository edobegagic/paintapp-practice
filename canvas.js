    //when the document is ready, it's gonna execute this script
window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas"); //gets canvas
    const ctx = canvas.getContext("2d"); //context element 2d or 3d

    //resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    
    /*

    TEST

    - change color: ctx.strokeStyle = (do beforhand fillRect or fillStroke) -
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    //to do a shape 
    ctx.strokeRect(50 , 50, 100, 200);  - ctx.fillRect(position x, position y, width obj, height obj); -
    - fillRect, strokeRect, -
    
    - for drawing a line -
    ctx.beginPath();
    ctx.strokeStyle = "green";
    ctx.lineWidth = 15;
    ctx.moveTo(100,100);
    ctx.lineTo(200, 100);
    ctx.stroke();

     - second obj (everything from 1st inherited unless changed) -
    ctx.lineWidth = 10;
    ctx.strokeStyle = "blue";
    ctx.strokeRect(180 , 50, 100, 200);  
    
    - for drawing a line and close path -
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.moveTo(400,100);
    ctx.lineTo(300, 300);
    ctx.lineTo(400, 300);
    ctx.closePath();
    ctx.stroke();
    
    */
    
    //variables
    let painting = false; //we need to know if we are presing down or if we are not pressing down
    
    //when we click, painting is equal to true
    function startPosition(e){
        painting = true;
        
        //so on click we get a dot
        draw(e);
    }
    //when we finish it's false
    function finishedPosition(){
        painting = false;
        ctx.beginPath(); //line not connected
    }
    function draw(e){
        if( !painting) return;  //if not painting it's not gonna do anything, just return
        ctx.lineWidth = 2;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        
        //better line, less pixelated
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }


    //EventListeners - when our mouse is down we want certain things to happen, when it's up we don't want to draw
    
    //when mouse moves we want to draw
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);




});

    /* everytime you resize it's gonna update height and width: 
    window.addEventListener("resize, ") */
