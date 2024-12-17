import FullCalendar from "@fullcalendar/react";
import { format } from "date-fns";

export function goPrev(ref: any): void {
    const calendarApi = ref.current.getApi();
    calendarApi.prev();
}

export function goNext(ref: any): void {
    const calendarApi = ref.current.getApi();
    calendarApi.next();
}

export function goSpecificTime(
    ref: React.MutableRefObject<FullCalendar | null>,
    moveYear: number,
    moveMonth: number
): void {
    if (!ref?.current) {
        console.error("calendarRef is not initialized.");
        return;
    }

    const calendarApi = ref.current.getApi();
    calendarApi.gotoDate(new Date(moveYear, moveMonth, 1));
}

export const formatter = {
    year: function (ref: any) {
        const api = ref.current.getApi();
        const today = api.getDate();
        const formatted = format(today, "yyyy");
        return formatted;
    },
    month: function (ref: any) {
        const api = ref.current.getApi();
        const today = api.getDate();
        const formatted = format(today, "MMMM");
        return formatted;
    },
    monthNumber: function (ref: any) {
        const api = ref.current?.getApi();
        const today = api?.getDate();
        const formatted = format(today, "MM");

        return formatted;
    },
};
