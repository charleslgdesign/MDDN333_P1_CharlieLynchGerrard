let numPts = 20
let googleTotal = 0
let flstudioTotal = 0
let indesignTotal = 0
let spotifyTotal = 0

let googleY = []
let flstudioY = []
let indesignY = []
let spotifyY = []

let fEllipseY = 400
let gEllipseY = 300
let iEllipseY = 200
let sEllipseY = 100



eSize = 50


function preload() {
    google = loadTable('assets/google.csv', 'csv', 'header')
    flstudio = loadTable('assets/flstudio.csv', 'csv', 'header')
    indesign = loadTable('assets/indesign.csv', 'csv', 'header')
    spotify = loadTable('assets/spotify.csv', 'csv', 'header')
}

function setup() {
createCanvas(600,700)


for (let i=0;i<numPts; i++) {
    let googleDataPoint;
    googleDataPoint = google.get(i,0)
    googleY.push(googleDataPoint)
    googleTotal += parseFloat(googleY[i])

    let flstudioDataPoint;
    flstudioDataPoint = flstudio.get(i,0)
    flstudioY.push(flstudioDataPoint)
    flstudioTotal += parseFloat(flstudioY[i])

    let indesignDataPoint;
    indesignDataPoint = indesign.get(i,0)
    indesignY.push(indesignDataPoint)
    indesignTotal += parseFloat(indesignY[i])

    let spotifyDataPoint;
    spotifyDataPoint = spotify.get(i,0)
    spotifyY.push(spotifyDataPoint)
    spotifyTotal += parseFloat(spotifyY[i])


}

//legend


         

}

function draw() {
    noStroke()

    background(255)

    
    

    //flstudio 400
    fill('rgba(0%,0%,100%,0.75)');
    ellipse(300,fEllipseY,flstudioTotal*15)

    fill('rgba(100%,0%,0%,0.75)');
    ellipse(300,gEllipseY,googleTotal*15)

    fill('rgba(100%,70%,0%,0.75)');
    ellipse(300,iEllipseY,indesignTotal*15)

    fill('rgba(0%,100%,0%,0.75)');
    ellipse(300,sEllipseY,spotifyTotal*15)

    sEllipseY +=.3

    gEllipseY +=.2

    fEllipseY -=.1

    iEllipseY -=.2



    if (sEllipseY > 500) {
        sEllipseY = 100
    }

    if (fEllipseY < 300) {
        fEllipseY = 400
    }

    if (gEllipseY > 450) {
        gEllipseY = 300
    }

    if (iEllipseY < 120) {
        iEllipseY = 200
    }

    push()

            noStroke()
    
        translate(-20,10)
        //google
        fill('rgba(80%,0%,40%,1)');
        ellipse(70,175,eSize)
        fill(255)
        text('google',52.5,180)
    
        //flstudio
        fill('rgba(0%,0%,100%,1)');
        ellipse(110,135,eSize)
        fill(255)
        text('flstudio',92.5,140)
       
         //indesign
         fill('rgba(93%,49%,19%,1)');
         ellipse(155,100,eSize)
         fill(255)
         text('indesign',133.25,104.5)
       
         //spotify
         fill('rgba(0%,100%,0%,1)');
         ellipse(198.5,63,eSize)
         fill(0)
         text('spotify',180.5,67)
    
         pop()


  
}
