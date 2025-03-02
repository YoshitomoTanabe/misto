"use client";

import AddEvent from "./addEvent";
import Timeline from "./timeline";

export default function Story() {
    return(
        <>
            <Timeline storyId="c397cea8-6d06-f5d8-79e4-26691fc3d2c8"/>
            <AddEvent storyId="c397cea8-6d06-f5d8-79e4-26691fc3d2c8" timelineId="b8f7919b-5a10-0d82-7fc2-2c822c7f8667"/>
        </>
    )
}