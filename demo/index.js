import { useDCountdown } from "../src/hooks/useDCountdown";
import ReactDOM  from "react-dom";

import React, { useState } from "react";



const DCountdown = () => {



const {timeData} = useDCountdown(1665320563 * 1000)

    return (<span>
{timeData.years} years 
{timeData.days} days
{timeData.hours} hours
{timeData.minutes} minutes
{timeData.seconds} seconds
{timeData.mseconds} milliseconds
    </span>)
}



const nodeParent = document.getElementById('react-root');
ReactDOM.render(<DCountdown />, nodeParent);