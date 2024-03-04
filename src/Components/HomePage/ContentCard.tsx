import { IContent } from "@/Models/IContent"
import { useState } from "react";
import { Card, CardContent } from "../ui/card";

// import { ChevronDownIcon } from '@heroicons/react/24/outline';
// import { PlayIcon } from '@heroicons/react/24/solid';
// import FavoriteButton from '@/components/FavoriteButton';




const ContentCard = (props: { content: IContent }) => {
  const [hovered, setHovered] = useState<boolean>(false);



  return (
    <Card className='bg-transparent border-none'>
      <CardContent className="flex aspect-square items-center justify-center p-0">
        <div
          onMouseLeave={() => setHovered(false)}
          onMouseEnter={() => setHovered(true)}
          className={`${hovered ? 'z-10' : ''
            } h-auto transform transition-transform duration-500 hover:scale-150`}>

          <img src={props.content.imgThumb.toString()} style={{ width: '282.5px', height: '159.5px' }} />

          <div className="bottom-0 h-9 w-full bg-blue flex justify-between p-1 bg-white">

            asfasfsdfsdfsd
          </div>


        </div>
      </CardContent>
    </Card >
  );

}

export default ContentCard;


// import { IContent } from "@/Models/IContent"
// import { useState } from "react";
// import ReactPlayer from "react-player";
// import { useNavigate } from "react-router-dom"

// const ContentCard = (props:{content:IContent}) => {
//   const [showTrailer, setShowTrailer] = useState(false);
//   const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
//   const navigate=useNavigate()
//   const handleMouseEnter = () => {
//     setTimer(
//       setTimeout(() => {
//         setShowTrailer(true);
//       }, 3000)
//     );
//   };

//   const handleMouseLeave = () => {
//     setShowTrailer(false);
//     if (timer) {
//       clearTimeout(timer);
//       setTimer(null);
//     }
//   };
//   const navToWatchPage=()=>{
//     navigate(/${props.content._id.toString()})
//   }
//   return (
//     <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden' }}>
//       {!showTrailer &&
//           <img src={props.content.imgThumb.toString()} alt="Thumbnail" style={{ width: '100%', height: 'auto' }} onClick={navToWatchPage}/>
//       }
//       {showTrailer &&
//            <ReactPlayer
//            className="pointer-events-none"
//            muted
//            playing
//            loop
//            controls={false}
//            disablePictureInPicture
//            width={'100%'}
//            height={'100%'}
//            url={props.content.trailer.toString()} 
//            onClick={navToWatchPage}>

//            </ReactPlayer>
//       }
//     </div>
//   )
// }

// export default ContentCard
