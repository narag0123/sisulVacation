import { easeInOut } from "framer-motion";

export const variantAddModal: TVariantAddModal = {
    initHeight: {
        height: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    animateHeight: {
        height: 100 + "%",
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    initOpacity: {
        opacity: 0,
        transition: {
            duration: 0.5,
            delay: 0.15,
        },
    },
    animateOpacity: {
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: 0.15,
        },
    },
};

export const variantModifyModal = {
    initModifyModal: {
        x: "-100%",
        left: "0%",
        y: "-50%",
        top: "50%",

        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    animateModifyModal: {
        x: "-50%",
        left: "50%",
        y: "-50%",
        top: "50%",
        transition: {
            duration: 0.3,
            type: "spring",
            damping: 15, // 스프링의 감쇠 계수
            stiffness: 200, // 스프링의 강도
        },
    },
    exitModifyModal: {
        x: "100%",
        right: "0%",
        y: "-50%",
        top: "50%",

        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
};

export const variantFilterModal = {
    initFilterModal: {
        scale: 0,

        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
    animateFilterModal: {
        scale: 1,
        transition: {
            duration: 0.3,
            type: "spring",
            damping: 15, // 스프링의 감쇠 계수
            stiffness: 300, // 스프링의 강도
        },
    },
    exitFilterModal: {
        scale: 0,
        transition: {
            duration: 0.3,
            type: "spring",
        },
    },
};
