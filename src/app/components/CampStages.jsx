"use client";
import React, { useState, useEffect } from "react";
import Section from "../components/Section";
import ClickableCircle from "../components/ClickableCircle";
import CampSchedule from "../components/CampSchedule";


const CampPage = ({ flatSchedule, mergedData }) => {
    const [stage, setStage] = useState('Midgard');

    useEffect(() => {
        setStage(Object.keys(mergedData)[0]);
    }, [mergedData]);

    return (
        <>
        {/* bruge stage i ClickableCircle så vi kan bruge den på flere steder, eksempelvis camp for at skifte stage? */}
            <ClickableCircle/>
            <Section title={null}>
                <CampSchedule flatSchedule={flatSchedule} mergedData={mergedData} stage={stage} setStage={setStage} />
            </Section>
        </>
    );
};

export default CampPage;
