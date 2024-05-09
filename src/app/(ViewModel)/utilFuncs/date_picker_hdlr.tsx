import dayjs, { Dayjs } from "dayjs";
import { FormEvent, SetStateAction } from "react";

export const workTypeHler = (
    e: FormEvent,
    type: string,
    setStartDate: React.Dispatch<
        React.SetStateAction<Dayjs | null>
    >,
    setEndDate: React.Dispatch<
        React.SetStateAction<Dayjs | null>
    >
) => {
    e.preventDefault();
    workTypeSelector(type, setStartDate, setEndDate);
};

export const workTypeSelector = (
    type: string,
    setStartDate: React.Dispatch<
        React.SetStateAction<Dayjs | null>
    >,
    setEndDate: React.Dispatch<
        React.SetStateAction<Dayjs | null>
    >
) => {
    // type: 1 초번 2:중번 3:말번
    var timeSetStart: number;
    var timeSetEnd: number;

    switch (type) {
        case "초":
            timeSetStart = 8;
            timeSetEnd = 17;
            break;

        case "중":
            timeSetStart = 13;
            timeSetEnd = 22;
            break;

        case "말":
            timeSetStart = 22;
            timeSetEnd = 8;
            break;

        default:
            timeSetStart = 8;
            timeSetEnd = 17;
            break;
    }

    setStartDate((prev) => {
        if (prev) {
            return prev
                .set("hour", timeSetStart)
                .set("minute", 0);
        } else {
            return null;
        }
    });
    setEndDate((prev) => {
        if (prev) {
            return prev
                .set("hour", timeSetEnd)
                .set("minute", 0);
        } else {
            return null;
        }
    });
};

export const workTypeChangeHdlr = (
    newValue: dayjs.Dayjs | null,
    Vtype: string,
    setVType: React.Dispatch<SetStateAction<string>>,
    setStartDate?: React.Dispatch<
        SetStateAction<Dayjs | null>
    >,
    setEndDate?: React.Dispatch<
        SetStateAction<Dayjs | null>
    >
) => {
    var timeSetStart: number;
    var timeSetEnd: number;

    switch (Vtype) {
        case "초":
            timeSetStart = 8;
            timeSetEnd = 17;

            break;
        case "중":
            timeSetStart = 13;
            timeSetEnd = 22;
            break;
        case "말":
            timeSetStart = 22;
            timeSetEnd = 8;

            break;
        default:
            timeSetStart = 8;
            timeSetEnd = 17;
            break;
    }
    setStartDate &&
        setStartDate(
            newValue &&
                newValue
                    .set("hour", timeSetStart)
                    .set("minute", 0)
        );

    setEndDate &&
        setEndDate(
            newValue &&
                newValue
                    .set("hour", timeSetEnd)
                    .set("minute", 0)
        );
    setVType(Vtype);
};
