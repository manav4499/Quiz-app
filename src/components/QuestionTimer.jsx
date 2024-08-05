import { useState, useEffect } from 'react';

export default function QuestionTimer({ Time, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(Time);

    useEffect(() => {
        const timer = setTimeout(onTimeout, Time);
        return ()=>{
            clearTimeout(timer);
        }
    }, [Time,onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => { setRemainingTime(prev => prev - 100) }, 100);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <progress id='question-progress' max={Time} value={remainingTime} className={mode} />;
}