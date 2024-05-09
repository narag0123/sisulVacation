import React from "react";
import { motion } from "framer-motion";

const LoadingComponent = () => {
    return (
        <div className="w-full flex gap-5 justify-center items-center">
            <motion.div
                animate={{
                    rotate: 360,
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    type: "spring",
                }}
            >
                <img
                    src="/asset/img/arrow.triangle.2.circlepath.circle@10x.png"
                    className="w-[24px]"
                />
            </motion.div>
            <motion.div
                // className="font-bg"

                animate={{
                    color: ["#000", "#ebebeb", "#000"],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    type: "ease",
                }}
            >
                Loading...
            </motion.div>
        </div>
    );
};

export default LoadingComponent;
