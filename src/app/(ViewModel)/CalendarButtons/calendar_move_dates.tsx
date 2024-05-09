import FullCalendar from "@fullcalendar/react";
import { goNext, goPrev } from "./calendar_buttons";

export const handleTouchStart = (
    e: React.TouchEvent<HTMLElement>,
    setStartX: React.Dispatch<
        React.SetStateAction<number | null>
    >
) => {
    setStartX(e.touches[0].clientX);
};

export const handleTouchMove = (
    e: React.TouchEvent<HTMLElement>,
    setEndX: React.Dispatch<
        React.SetStateAction<number | null>
    >
) => {
    setEndX(e.touches[0].clientX);
};

export const handleTouchEnd = (
    startX: number | null,
    endX: number | null,
    calendarRef: React.MutableRefObject<FullCalendar | null>,
    setStartX: React.Dispatch<
        React.SetStateAction<number | null>
    >,
    setEndX: React.Dispatch<
        React.SetStateAction<number | null>
    >
) => {
    if (startX && endX) {
        const difference = endX - startX;
        if (difference > 100) {
            // 좌측 슬라이드 동작 실행
            goPrev(calendarRef);
        } else if (difference < -100) {
            // 우측 슬라이드 동작 실행
            goNext(calendarRef);
        }
    }
    setStartX(null);
    setEndX(null);
};
