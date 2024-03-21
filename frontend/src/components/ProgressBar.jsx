import React, {useState, useEffect} from 'react'

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0);
    const handleButtonClick = () => {
        if(progress < 100){
            setProgress(progress + 5);
        }
    }

    const handleButtonReset = () => {
        setProgress(0);
    }

    const getColor = () => {
        if(progress < 40) {
            return "#ff0000";
        } else if (progress < 70) {
            return "#ffa500";
        } else {
            return "#2ecc71";
        }
    }

    return (
        <div className='container'>
            <div className='progress-bar'>
                <div className='progress-bar-fill' style={{ width: `${progress}%`, backgroundColor: getColor() }}></div>
            </div>
            <div className='progress-label'>{progress}%</div>
            
            <button onClick={handleButtonClick} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>Progress</button>
            <button onClick={handleButtonReset} className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}>Reset</button>
        </div>
    )
}