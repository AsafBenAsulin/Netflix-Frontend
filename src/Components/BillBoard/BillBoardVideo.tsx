import ReactPlayer from 'react-player'

const BillBoardVideo=(props:{trailer:String})=> {
    const videoStyle = {
        maskImage: 'linear-gradient(black, transparent)',
        WebkitMaskImage: 'linear-gradient(black, transparent)',
      };
    
  return (
    <div className="h-[56.25vw]" style={videoStyle}>
    <ReactPlayer
                className="pointer-events-none" 
                muted
                playing
                loop
                controls={false}
                url={props.trailer.toString()}
                disablePictureInPicture
                width={'100%'}
                height={'100%'}
                style={videoStyle}
                />
    </div>
  )
}

export default BillBoardVideo