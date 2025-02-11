// import React, { useEffect, useRef, useState } from 'react'
// import VIDEO from "./Video.mp4";

// const RefExample = () => {
//     const [play , setPlay] = useState(true);
//     const eleRef = useRef();
//     const videoRef = useRef();
//     // console.log(eleRef);
//     console.log(videoRef);
//     useEffect(()=>{
//         eleRef.current.style.color="crimson";
//         eleRef.current.innerText="React Ref"
//     })

//     let playORpause=()=>{
//         if(play == true){
//             videoRef.current.play();
//             console.log(play);
//             setPlay(false);
//         }else{
//             video

//         }
//     }
//   return (
//     <div>
//         <h1 ref={eleRef}>RefExample</h1>
//     </div>
//   )
// }

// export default RefExample




import React, { useRef, useState } from 'react'
import VIDEO from "./Video.mp4"
const RefExample = () => {
    const [play, setPlay] = useState(true);
    const tagRef = useRef();
    console.log(tagRef);
    const videoRef = useRef();
    console.log(videoRef);
    const playOrPause = () =>{
        if (play == true){
            videoRef.current.play()
            console.log(play)
            setPlay(false);
        }else{
            videoRef.current.pause()
            setPlay(true);
        }
    }
  return (
    <>
        <div ref={tagRef}>RefExample</div>
        <video src= {VIDEO} ref={videoRef} onClick={playOrPause}></video>
    </>
  )
}

export default RefExample;