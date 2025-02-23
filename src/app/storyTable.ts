const stories = [
    {
        storyId: "c397cea8-6d06-f5d8-79e4-26691fc3d2c7",
        storyName: "サンプルストーリー1",
        createUserId: "a855e576-2a8e-6030-8d7f-478d22497bbc",
        storyDescription: "これはサンプルのストーリーです。",
        createDate: "2024-05-15T10:00:00Z",
        updateDate: "2024-05-15T10:00:00Z",
        timelines: [
            {
                timelineName: "サンプルタイムライン1",
                timelineId: "a8f7919b-5a10-0d82-7fc2-2c822c7f8660",
                events: [
                    {
                        eventId: "a8f7919b-5a10-0d82-7fc2-2c822c7f8661",
                        eventName: "イベント名1",
                        eventDate: "2024-05-15T10:00:00Z",
                        eventDescription: "これはサンプルのイベントです。",
                    },
                    {
                        eventId: "a8f7919b-5a10-0d82-7fc2-2c822c7f8662",
                        eventName: "イベント名2",
                        eventDate: "2024-05-15T10:00:00Z",
                        eventDescription: "これはサンプルのイベントです。",
                    },
                    {
                        eventId: "a8f7919b-5a10-0d82-7fc2-2c822c7f8663",
                        eventName: "イベント名3",
                        eventDate: "2024-05-15T10:00:00Z",
                        eventDescription: "これはサンプルのイベントです。",
                    },
                ],
            },
            {
                timelineName: "サンプルタイムライン2",
                timelineId: "a8f7919b-5a10-0d82-7fc2-2c822c7f8661",
                events: [
                    {
                        eventId: "a8f7919b-5a10-0d82-7fc2-2c822c7f8664",
                        eventName: "イベント名4",
                        eventDate: "2024-05-15T10:00:00Z",
                        eventDescription: "これはサンプルのイベントです。",
                    },
                    {
                        eventId: "a8f7919b-5a10-0d82-7fc2-2c822c7f8665",
                        eventName: "イベント名5",
                        eventDate: "2024-05-15T10:00:00Z",
                        eventDescription: "これはサンプルのイベントです。",
                    },
                    {
                        eventId: "a8f7919b-5a10-0d82-7fc2-2c822c7f8666",
                        eventName: "イベント名6",
                        eventDate: "2024-05-15T10:00:00Z",
                        eventDescription: "これはサンプルのイベントです。",
                    },
                ],
            },
        ],
    },
    {
        storyId: "c397cea8-6d06-f5d8-79e4-26691fc3d2c8",
        storyName: "サンプルストーリー2",
        createUserId: "a855e576-2a8e-6030-8d7f-478d22497bbd",
        storyDescription: "これは別のサンプルのストーリーです。",
        createDate: "2024-06-15T10:00:00Z",
        updateDate: "2024-06-15T10:00:00Z",
        timelines: [
            {
                timelineName: "サンプルタイムライン3",
                timelineId: "b8f7919b-5a10-0d82-7fc2-2c822c7f8667",
                events: [
                    {
                        eventId: "b8f7919b-5a10-0d82-7fc2-2c822c7f8667",
                        eventName: "イベント名7",
                        eventDate: "2024-06-15T10:00:00Z",
                        eventDescription: "これは別のサンプルのイベントです。",
                    },
                    {
                        eventId: "b8f7919b-5a10-0d82-7fc2-2c822c7f8668",
                        eventName: "イベント名8",
                        eventDate: "2024-06-15T10:00:00Z",
                        eventDescription: "これは別のサンプルのイベントです。",
                    },
                ],
            },
            {
                timelineName: "サンプルタイムライン4",
                timelineId: "b8f7919b-5a10-0d82-7fc2-2c822c7f8669",
                events: [
                    {
                        eventId: "b8f7919b-5a10-0d82-7fc2-2c822c7f8669",
                        eventName: "イベント名9",
                        eventDate: "2024-06-15T10:00:00Z",
                        eventDescription: "これは別のサンプルのイベントです。",
                    },
                    {
                        eventId: "b8f7919b-5a10-0d82-7fc2-2c822c7f8670",
                        eventName: "イベント名10",
                        eventDate: "2024-06-15T10:00:00Z",
                        eventDescription: "これは別のサンプルのイベントです。",
                    },
                ],
            },
        ],
    },
];

export const listStories = () => {
    return stories.map((story) => {
        return {
            storyId: story.storyId,
            storyName: story.storyName,
            createUserId: story.createUserId,
            storyDescription: story.storyDescription,
            createDate: new Date(story.createDate),
            updateDate: new Date(story.updateDate),
        };
    });
};

export const getStory = (storyId: string): Story | undefined => {
    const story = stories.find((story) => story.storyId === storyId);
    if (story) {
        return {
            ...story,
            createDate: new Date(story.createDate),
            updateDate: new Date(story.updateDate),
            timelines: story.timelines.map((timeline) => ({
                ...timeline,
                events: timeline.events.map((event) => ({
                    ...event,
                    eventDate: new Date(event.eventDate),
                })),
            })),
        };
    }
    return undefined;
};

export type Event = {
    eventId: string;
    eventName: string;
    eventDate: Date;
    eventDescription: string;
};

export type Timeline = {
    timelineName: string;
    timelineId: string;
    events: Event[];
};

export type Story = {
    storyId: string;
    storyName: string;
    createUserId: string;
    storyDescription: string;
    createDate: Date;
    updateDate: Date;
    timelines: Timeline[];
};
