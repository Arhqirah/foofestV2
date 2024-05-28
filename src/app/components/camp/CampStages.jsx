"use client";
import React from "react";
import Button from "../Button";

const CampStages = ({stages, handleStage, theme}) => {
    return (
        <>
            <article className="flex flex-col text-center">
                <ul className="flex flex-row justify-center flex-wrap gap-4">   
                    {stages.map((singleStage, i) => (
                        <li key={i}>
                            <Button variant={theme[singleStage]} onClick={handleStage}>{singleStage}</Button>
                        </li>
                    ))}
                </ul>
            </article>
        </>
    );
};

export default CampStages;
