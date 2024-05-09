"use client";
import { UseContext } from "@/app/(Model)/store";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
    variantFilterModal,
    variantModifyModal,
} from "@/app/(Model)/framer/framer_variant";

const FilterModal = () => {
    const context = useContext(UseContext);
    const { nowFilter, setNowFilter } = context;

    const filterTailwindClassName = (arg: FilterKey) => {
        return nowFilter[arg] === true
            ? ` bg-bg shadow-inner bg-gradient-filter-btn-reverse`
            : "shadow-xl -translate-x-1 -translate-y-1 bg-gradient-filter-btn";
    };

    return (
        <motion.section
            className="w-[90%] h-[10%] bg-bg shadow-2xl absolute z-50 rounded-full top-20 flex gap-5 justify-center items-center px-8"
            initial={"initFilterModal"}
            animate={"animateFilterModal"}
            exit={"exitFilterModal"}
            variants={variantFilterModal}
        >
            <label
                className={`flex gap-3 items-center p-2 rounded-xl w-[50px] justify-center 
                ${filterTailwindClassName("A")}
                transition-all duration-100 font-ProximaNova`}
                onClick={() => {
                    setNowFilter((prev) => ({
                        ...prev,
                        ["A"]: !prev["A"],
                    }));
                }}
            >
                A
            </label>
            <label
                className={`flex gap-3 items-center p-2 rounded-xl w-[50px] justify-center ${filterTailwindClassName(
                    "B"
                )}
                transition-all duration-100 font-ProximaNova`}
                onClick={() => {
                    setNowFilter((prev) => ({
                        ...prev,
                        ["B"]: !prev["B"],
                    }));
                }}
            >
                B
            </label>
            <label
                className={`flex gap-3 items-center p-2 rounded-xl w-[50px] justify-center ${filterTailwindClassName(
                    "C"
                )}
                transition-all duration-100 font-ProximaNova`}
                onClick={() => {
                    setNowFilter((prev) => ({
                        ...prev,
                        ["C"]: !prev["C"],
                    }));
                }}
            >
                C
            </label>
            <label
                className={`flex gap-3 items-center p-2 rounded-xl w-[50px] justify-center ${filterTailwindClassName(
                    "D"
                )}
                transition-all duration-100 font-ProximaNova`}
                onClick={() => {
                    setNowFilter((prev) => ({
                        ...prev,
                        ["D"]: !prev["D"],
                    }));
                }}
            >
                D
            </label>
        </motion.section>
    );
};

export default FilterModal;
