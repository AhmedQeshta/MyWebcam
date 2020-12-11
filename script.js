const btnTakeSnapShot = document.getElementById("btn-takeSnapShot");
const camera = document.getElementById("camera");
btnTakeSnapShot.addEventListener("click",take_SnapShot)
// load all webcam 
Webcam.set({
    width:400,
    height: 300,
    dest_width: 400,
    dest_height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90,
    force_flash: false
});

 Webcam.attach("#camera");   


function take_SnapShot() {
   
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('results').innerHTML = 
        '<img src="'+data_uri+'"/>';
        const btnDowload = document.getElementById("btn-dowload");
        btnDowload.setAttribute("href" , data_uri);
    });

    
}