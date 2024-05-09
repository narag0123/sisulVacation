import { format } from "date-fns";

export function goPrev(ref: any): void {
    const calendarApi = ref.current.getApi();
    calendarApi.prev();
}

export function goNext(ref: any): void {
    const calendarApi = ref.current.getApi();
    calendarApi.next();
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
