import { useContext } from "react";
import { UseContext } from "./store";

import dayjs from "dayjs";

export const event_data = (): TEvent[] => {
    const context = useContext(UseContext);
    const { apiVacations, nowFilter } = context;

    const events: TEvent[] = apiVacations.map((e, i) => ({
        title: apiVacations[i]?.name,
        start: apiVacations[i]?.startDate,
        end: dayjs(apiVacations[i]?.endDate)
            .add(
                apiVacations[i].type == "말" ? 0 : 1,
                "day"
            )
            .format("YYYY-MM-DD"),
        textColor: "#000000",
        borderColor: "#e9e9e9",
        extendedProps: {
            group: apiVacations[i]?.group,
            docId: apiVacations[i].docId,
        },
    }));

    // nowFilter의 true인 키들에 따라 events를 필터링
    const filteredEvents = events.filter((event) => {
        // nowFilter에서 true인 키들을 확인
        for (const [key, value] of Object.entries(
            nowFilter
        )) {
            // 키의 값이 true이며 이벤트의 그룹이 그 키와 일치하는 경우
            if (
                value === true &&
                event.extendedProps.group === key
            ) {
                // 조건을 만족하면 true 반환 (이벤트가 필터링 대상)
                return true;
            }
        }
        // 조건을 만족하지 않으면 false 반환 (이벤트가 필터링 대상 아님)
        return false;
    });

    // 필터링된 이벤트 반환
    return filteredEvents;
};
