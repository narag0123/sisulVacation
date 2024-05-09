import { EventContentArg } from "@fullcalendar/core/index.js";

export const groupColorSelection = (
    arg: EventContentArg
) => {
    switch (arg.event.extendedProps.group) {
        case "A":
            return "bg-[#ffa68e]";
            break;
        case "B":
            return "bg-[#ffd295]";
            break;
        case "C":
            return "bg-[#b0cfcf]";
            break;
        case "D":
            return "bg-[#ce9ae7]";
            break;
        default:
            return "bg-[white]";
            break;
    }
};
