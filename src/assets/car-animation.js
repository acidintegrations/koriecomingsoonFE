const animation = [
    {
        transform: "translateX(+0%) translateY(-50%) rotate(0)",
        left: "0px",
        top: "0px"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(0)",
        left: "75%",
        top: "0px"
    },
    {
        transform: "translateX(-50%) translateY(+50%) rotate(90deg)",
        left: "100%",
        top: "0px"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(90deg)",
        left: "100%",
        top: "75%"
    },
    {
        transform: "translateX(-100%) translateY(-50%) rotate(180deg)",
        left: "100%",
        top: "100%"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(180deg)",
        left: "25%",
        top: "100%"
    },
    {
        transform: "translateX(-50%) translateY(-150%) rotate(270deg)",
        left: "0px",
        top: "100%"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(270deg)",
        left: "0px",
        top: "25%"
    },
    {
        transform: "translateX(+0%) translateY(-50%) rotate(360deg)",
        left: "0px",
        top: "0px"
    }
];

const timing = {
    duration: 10000,
    iterations: Infinity,
    easing: "linear"
};

export default { animation, timing };