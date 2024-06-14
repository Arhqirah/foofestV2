"use client";
import { useState, useEffect} from "react";
import Button from "../Button";

export default function CampDays({theme, onDayChange, stages, themeColor}) {
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const [currentTheme, setCurrentTheme] = useState('green');
    const [active, setActive] = useState('Monday');

    const handleStage = (select) => {
        setCurrentTheme(select);
    }
    useEffect(() => {
        setCurrentTheme(themeColor[stages]);
    })
    return (
    <div className="flex flex-row justify-center flex-wrap gap-4">
        {weekDays.map(singleDay => 
                <Button key={singleDay} variant={theme} onClick={() => {onDayChange(singleDay); setActive(singleDay); handleStage(themeColor[stages])}} randomClass={`${active === singleDay ? `bg-grey` : `bg-${currentTheme}`}`}>{singleDay}</Button>
                )}
    </div>
    );
}