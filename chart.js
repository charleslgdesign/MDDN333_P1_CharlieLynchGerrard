let google
let googleY = []

let flstudio
let flstudioY = []

let indesign
let indesignY = []

let spotify
let spotifyY = []

let numPts = 20

let eSize = 60


function preload() {
    google = loadTable('assets/google.csv', 'csv', 'header')
    flstudio = loadTable('assets/flstudio.csv', 'csv', 'header')
    indesign = loadTable('assets/indesign.csv', 'csv', 'header')
    spotify = loadTable('assets/spotify.csv', 'csv', 'header')
}

function setup() {
    
    
    createCanvas(600,600)

    for (let i=0;i<numPts; i++) {
        let googleDataPoint;
        googleDataPoint = google.get(i,0)
        googleY.push(googleDataPoint)

        let flstudioDataPoint;
        flstudioDataPoint = flstudio.get(i,0)
        flstudioY.push(flstudioDataPoint)

        let indesignDataPoint;
        indesignDataPoint = indesign.get(i,0)
        indesignY.push(indesignDataPoint)

        let spotifyDataPoint;
        spotifyDataPoint = spotify.get(i,0)
        spotifyY.push(spotifyDataPoint)

    }

        push()

        //hour label
        textSize(17)
        text('Hours',31,75)
    
        //time label
        text('Time(days)',21,520)
    
        textSize(14)
    
    
        //0 Hour
      
        text('0',20,255)
    
        //1 Hour
        
        text('1',20,295)
    
        //2 Hour
        
        text('2',20,335)
    
        //3 Hour
        
        text('3',20,375)
    
        //4 Hour
        
        text('4',20,415)
    
        push()
    
        stroke(0)
    
        line(40,250,60,250)
        line(40,290,60,290)
        line(40,330,60,330)
        line(40,370,60,370)
        line(40,410,60,410)
    
        pop()
    
        push()
    
        translate(50,510)
    
        //x-axis increments
        for (i=0;i<numPts;i++) {
                
                let x = i * (width / (numPts-1))/1.25
                let y = 50
                noStroke()
                fill(0)
                rectMode(CENTER)
                rect(x, y,1,10)
            }
        
    
            
    
    
        pop()
    
        push()
    
        stroke(0)
    
    //y-axis
    line(50,475,50,300)
    
    //x-axis
    line(50,560,530,560)
    
    pop()
        
            push()

            noStroke()
    
        //legend
    
        //google
        fill('rgba(100%,0%,0%,.5)');
        ellipse(142,145,eSize)
        fill(255)
        text('google',120,150)
    
        //flstudio
        fill('rgba(0%,0%,100%,.5)');
        ellipse(210,145,eSize)
        fill(255)
        text('flstudio',188.5,150)
       
         //indesign
         fill('rgba(100%,70%,0%,0.5)');
         ellipse(280,145,eSize)
         fill(0)
         text('indesign',256,150)
       
         //spotify
         fill('rgba(0%,100%,0%,0.5)');
         ellipse(348.5,145,eSize)
         fill(0)
         text('spotify',330,150)
    
         pop()


    }





function draw() {

   

    //align chart
    translate(50,100)
    
     drawEllipses()
     drawLines()

    
     
}

function drawEllipses() {

    noStroke()

    //google data
    push()
    //red
    fill('rgba(100%,0%,0%,0.01)');
    
    for (let i=0; i<googleY.length;i++) {
        let gx = i * (width / (numPts-1))/1.25
        let gy = googleY[i]*40 +150
        ellipse(gx,gy,10)
    }

    pop()

    //flstudio data
    push()
    //blue
    fill('rgba(0%,0%,100%,0.01)');

    for (let i=0; i<flstudioY.length;i++) {
        let fx = i * (width / (numPts-1))/1.25
        let fy = flstudioY[i]*40 +150
        ellipse(fx,fy,10)
    }
    
    pop()

    //indesign data
    push()
    //yellow
    fill('rgba(100%,75%,0%,0.01)');
    

    for (let i=0; i<indesignY.length;i++) {
        let ix = i * (width / (numPts-1))/1.25
        let iy = indesignY[i]*40 +150
        ellipse(ix,iy,10)
    }
    
    pop()

    //spotify data

    push()
    //green
    fill('rgba(0%,100%,0%,0.01)');

    for (let i=0; i<spotifyY.length;i++) {
        let sx = i * (width / (numPts-1))/1.25
        let sy = spotifyY[i]*40 +150
        ellipse(sx,sy,10)
    }
    
    pop()
    
}

function drawLines() {

    stroke('rgba(100%,0%,0%,0.01)');

    //google data

    let gpx = 0
    let gpy = googleY[0]

    for (let i=0; i<googleY.length;i++) {
        let x = i * (width / (numPts-1))/1.25
        let y = googleY[i]*40 +150
        line(gpx,gpy,x,y)

        gpx = x
        gpy = y
    }

    //fl studio data

    stroke('rgba(0%,0%,100%,0.01)');

    let fpx = 0
    let fpy = flstudioY[0]

    for (let i=0; i<flstudioY.length;i++) {
        let x = i * (width / (numPts-1))/1.25
        let y = flstudioY[i]*40 +150
        line(fpx,fpy,x,y)

        fpx = x
        fpy = y
    }

    //indesign data

    stroke('rgba(100%,75%,0%,0.01)');

    let ipx = 0
    let ipy = indesignY[0]

    for (let i=0; i<indesignY.length;i++) {
        let x = i * (width / (numPts-1))/1.25
        let y = indesignY[i]*40 +150
        line(ipx,ipy,x,y)

        ipx = x
        ipy = y
    }

    //spotify data

    stroke('rgba(0%,100%,0%,0.01)');

    let spx = 0
    let spy = spotifyY[0]

    for (let i=0; i<spotifyY.length;i++) {
        let x = i * (width / (numPts-1))/1.25
        let y = spotifyY[i]*40 +150
        line(spx,spy,x,y)

        spx = x
        spy = y
    }


}



