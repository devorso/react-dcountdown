import {useEffect,useState} from "react"

/**
 * 
 * @param  timeLeft in milliseconds
 */
export const useDCountdown = (timeLeft) => {
    const [time, setTime] = useState({years: 0, days: 0, hours: 0, minutes: 0, seconds: 0, mseconds: 0});
    

    const handleTimer = (timeData) => {
        let  time = timeData - Date.now();  // milliseconds.
        const years = Math.floor((time / 1000 )/ 31536000);
        if(years > 0){
        time -= years * 31536000 * 1000;
        }
        const days = Math.floor((time / 1000 )/ 86400);
        if(days > 0) {
        time -= days * 86400  * 1000;
        }
        const hours = Math.floor((time / 1000)/ 3600);
        if(hours > 0) {
        time -= hours * 3600 * 1000;
        }
        const minutes = Math.floor((time / 1000) / 60);
        if(minutes > 0)
        time -= minutes * 60 * 1000;
        const seconds = Math.floor(time / 1000);
        if(seconds> 0) {
        time -= seconds * 1000
        }
        const ms = Math.floor(time)

        
        setTime({years, days, hours, minutes, seconds, mseconds:ms});
    }
    useEffect(() => {
        const timer = setInterval(() => {
            handleTimer(timeLeft)
        },100)

        return () => {
            // clear timer.
            clearInterval(timer);
        }
    },[timeLeft])


    return {timeData: {...time}}
}