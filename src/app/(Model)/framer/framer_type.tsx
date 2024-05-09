type TTransition = {
    duration?: number;
    delay?: number;
    type?: string;
};

type TAnimationTitle = {
    height?: number | string;
    opacity?: number;
    transition: TTransition;
};

type TVariantAddModal = {
    initHeight: TAnimationTitle;
    animateHeight: TAnimationTitle;
    initOpacity: TAnimationTitle;
    animateOpacity: TAnimationTitle;
};
