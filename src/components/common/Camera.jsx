// src/components/Camera.js

import React, { useEffect, useRef, useState } from 'react';

const Camera = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [isVideoOn, setIsVideoOn] = useState(false);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: {width:1920,height:1080} });
    let video = videoRef.current;
    video.srcObject = stream;
    video.play();
    // setIsVideoOn(true);
  };

  const stopCamera = () => {
    let video = videoRef.current;
    let stream = video.srcObject;
    let tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
    video.srcObject = null;
    setIsVideoOn(false);
  };

  const takePhoto = () => {
    const width = 320;
    const height = 240;
    let video = videoRef.current;
    let photo = photoRef.current;

    let context = photo.getContext('2d');
    context.drawImage(video, 0, 0, width, height);
  };

//   useEffect(()=>{
//     startCamera()
//   },[])

  return (
    <div>
      <div>
        <video ref={videoRef} style={{ width: '320px', height: '240px' }}></video>
      </div>
      <div>
        <button onClick={stopCamera}>Stop Camera</button>
        {/* <button onClick={takePhoto} disabled={!isVideoOn}>Take Photo</button> */}
      </div>
      <canvas ref={photoRef} style={{ display: 'none' }} width="320" height="240"></canvas>
      <div>
        <img src={photoRef.current?.toDataURL('image/png')} alt="Captured" className='w-20' />
      </div>
    </div>
  );
};

export default Camera;
