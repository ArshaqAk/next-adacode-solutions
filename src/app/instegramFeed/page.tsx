// import React from "react";

// const InstagramFeed = () => {
//   const videoList = Array.from(
//     { length: 10 },
//     (_, index) => `/reels/${index + 1}.mp4`,
//   );
//   return (
//     <div className="instagramfeed_contianer">
//       <div className="instagramfeed_wrapper">
//         <h1>
//           <span>Instagram </span>feed
//         </h1>
//         <div className="reel_container">
//           {videoList.map((videoUrl, index) => (
//             <div className="reel_wrapper">
//               <video
//                 key={index}
//                 src={videoUrl}
//                 controls
//                 style={{ width: "100%", height: "100%" }}
//                 playsInline
//               >
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InstagramFeed;
