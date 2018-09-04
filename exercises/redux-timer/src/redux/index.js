import { createStore } from 'redux'


const state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
    flag: true
}

export const startTime = () => {
    return {
        type: "START_TIME",
    }
}

export const stopTime = () => {
    return {
        type: "STOP_TIME",
    }
}

export const resetTime = () => {
    return {
        type: "RESET_TIME"
    }
}

// export const handleBtn = () =>{
//     return {
//         type: "FLAG"
//     }
// }

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "START_TIME":
            if(prevState.milliseconds === 99){
                if(prevState.seconds === 59) {
                    if(prevState.minutes === 59){
                        return {
                            hours: prevState.hours + 1,
                            minutes: 0,
                            seconds: 0,
                            milliseconds: 0,
            
                        }
                    }
                    return { 
                        hours: prevState.hours,
                        minutes: prevState.minutes + 1,
                        seconds: 0,
                        milliseconds: 0,
        
                    }
                } 
                return {
                    hours: prevState.hours,
                    minutes: prevState.minutes,
                    seconds: prevState.seconds + 1,
                    milliseconds: 0,
    
                }
            }
            return {
                hours: prevState.hours,
                minutes: prevState.minutes,
                seconds: prevState.seconds,
                milliseconds: prevState.milliseconds + 1,

            }

        case "STOP_TIME":
            return {
                hours: prevState.hours,
                minutes: prevState.minutes,
                seconds: prevState.seconds,
                milliseconds: prevState.milliseconds,
            
            }

        case "RESET_TIME":
            console.log('reset')
            return {
                hours: 0,
                minutes: 0,
                seconds: 0,
                milliseconds: 0,
            
            }
    

        default: 
            return prevState
    }
}

export default createStore(reducer)

