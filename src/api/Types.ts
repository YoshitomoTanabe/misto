
export type Story = {
    storyId: string,
    storyName: string,
    createUserId: string,
    storyDescription: string,
    createDate: Date,
    updateDate: Date,
    timelines: Timeline[],
};

export type Timeline = {
    timelineId: string;
    timelineName: string;
    events: Event[];
};

export type Event = {
    eventId: string;
    eventName: string;
    eventDate: Date;
    eventDescription: string | undefined;
};