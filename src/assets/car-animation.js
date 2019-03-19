const animation = [
    {
        transform: "translateX(-50%) translateY(-50%) rotate(0)",
        left: "0px",
        top: "0px"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(0)",
        left: "50%",
        top: "0px"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(90deg)",
        left: "100%",
        top: "0px"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(90deg)",
        left: "100%",
        top: "50%"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(180deg)",
        left: "100%",
        top: "100%"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(180deg)",
        left: "50%",
        top: "100%"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(270deg)",
        left: "0px",
        top: "100%"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(270deg)",
        left: "0px",
        top: "50%"
    },
    {
        transform: "translateX(-50%) translateY(-50%) rotate(360deg)",
        left: "0px",
        top: "0px"
    }
];

const timing = {
    duration: 10000,
    iterations: Infinity
};

export default { animation, timing };