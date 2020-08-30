const socket = io('/')

const videoGrid = document.getElementById('video-grid') 
const myVideo = document.createElement('video');
myVideo.muted = true
  

let myvideoStream
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream =>{
    myvideoStream = stream;

    addVideoStream(myVideo,stream)

})

const addVideoStream = (video , stream) =>{
    video.srcObject = stream
    video.addEventListener('loadmetadata' , ()=>{
        video.play();
    })
    videoGrid.append(video)

}

socket.emit('join-Room', ROOM_ID )

