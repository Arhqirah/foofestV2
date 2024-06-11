"use client";
import { useState, useEffect, useCallBack} from "react";
import Button from "../Button";

export default function CampDays(props) {
    const {theme, onDayChange, weekDays, stages, themeColor} = props;
    const [newColor, setNewColor] = useState(theme);
    const [active, setActive] = useState(null);
    const [newTheme, setNewTheme] = useState(theme);
    useEffect(() => {
        setNewTheme(themeColor[stages])
    })


    return (
    <div className="flex flex-row justify-center flex-wrap gap-4">
        {weekDays.map(singleDay => 
                <Button key={singleDay} variant={newTheme} onClick={() => {onDayChange(singleDay, themeColor[stages]); setActive(singleDay);}} randomClass={`${active === singleDay ? `bg-grey` : `bg-${newColor}`}`}>{singleDay}</Button>
        )}
    </div>
    );
}