"use client";
import React, { useState, useEffect } from "react";
import Section from "../Section";
import ClickableCircle from "../ClickableCircle";
import CampSchedule from "./CampSchedule";


const CampPage = ({ flatSchedule, mergedData }) => {
    const [stage, setStage] = useState('Midgard');

    useEffect(() => {
        setStage(Object.keys(mergedData)[0]);
    }, [mergedData]);

    return (
        <>
        {/* bruge stage i ClickableCircle så vi kan bruge den på flere steder, eksempelvis camp for at skifte stage? */}
            <ClickableCircle stage={stage} setStage={setStage}/>
            <CampSchedule flatSchedule={flatSchedule} mergedData={mergedData} stage={stage} setStage={setStage}/>
        </>
    );
};

export default CampPage;
