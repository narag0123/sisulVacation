type TEvent = {
    title: string; // name
    start: string; // startDate + startTime
    end: string; // endDate + endTime
    textColor: string; // group에 따라 다름
    borderColor: string;
    extendedProps: TExtendedProps;
};

type TExtendedProps = {
    group: string; // group
    docId: string;
};
