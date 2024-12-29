import {useEffect, useState }from 'react'

const Timer = () => {

    const [ timer,setTime] = useState(0); 
    
    useEffect(() => {
         const interval =   setInterval(() => {
            setTime(prev => prev + 1)
            console.log('Hello')

        },1000);
        //
      return ()=>{
        clearInterval(interval),
        console.log('Hello')
      }; 
     
    },);
    
    //
  return (
    <div >
      {timer}
    </div>
  );
};

export default Timer;
