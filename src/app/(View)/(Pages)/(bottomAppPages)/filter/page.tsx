"use client";
import { UseContext } from "@/app/(Model)/store";
import BottomNavBar from "@/app/(View)/(component)/bottom_nav_bar";
import React, { useContext, useEffect } from "react";

const Filter = () => {
    const context = useContext(UseContext);
    const { setBottomNavState } = context;

    useEffect(() => {
        setBottomNavState("filter");
    }, []);
    return (
        <section>
            Filter
            <BottomNavBar />
        </section>
    );
};

export default Filter;
