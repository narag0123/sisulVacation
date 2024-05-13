import dayjs, { Dayjs } from "dayjs";
import { FormEvent, SetStateAction } from "react";

/**
 * 하위함수인 workTypeSelector를 preventDefault()함
 * @param type "초", "중", "말", "주", "야"
 */
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

/**
 * startDate와 endDate의 hour값을 초,중,말 등의 타입에 따라 case-switch로 작성함
 * @param type "초", "중", "말", "주", "야"
 */
export const workTypeSelector = (
    type: string,
    setStartDate: React.Dispatch<
        React.SetStateAction<Dayjs | null>
    >,
    setEndDate: React.Dispatch<
        React.SetStateAction<Dayjs | null>
    >
) => {
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

        case "주":
            timeSetStart = 8;
            timeSetEnd = 20;
            break;

        case "야":
            timeSetStart = 20;
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

// TODO: 시간 안바뀜.
/**
 * DateTimePicker에서 newValue를 사용하여 startDate와 endDate의 hour값과 Vtype을 작성함
 * @param newValue DateTimePicker에서 넘어온 값
 * @param Vtype 초,중,말,주,야
 * @param typeOfBtn "시작" / "종료"
 */
export const workTypeChangeHdlr = (
    newValue: dayjs.Dayjs | null,
    Vtype: string,
    setVType: React.Dispatch<SetStateAction<string>>,
    typeOfBtn: string,
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

        case "주":
            timeSetStart = 8;
            timeSetEnd = 20;
            break;

        case "야":
            timeSetStart = 20;
            timeSetEnd = 8;
            break;

        default:
            timeSetStart = 8;
            timeSetEnd = 17;
            break;
    }

    if (typeOfBtn === "시작") {
        setStartDate && setStartDate(newValue);

        setEndDate &&
            setEndDate((prev) =>
                prev && newValue
                    ? newValue.set("hour", prev.hour())
                    : prev
            );
    } else {
        setEndDate && setEndDate(newValue);
    }

    setVType(Vtype);
};
