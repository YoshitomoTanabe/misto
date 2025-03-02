"use client";

import { useSearchParams } from "next/navigation";
import AddEvent from "./addEvent";
import Timeline from "./timeline";
import { useState, useEffect } from "react";
import type { Story } from "@/api/Types";
import { getStory } from "@/api/createEvent";

export default function Story() {
    const searchParams = useSearchParams();
    const storyId = searchParams.get("id") || "no ID.";
    const [story, setStory] = useState<Story | undefined>(getStory(storyId));
    
    useEffect(() => {
        const fetchedStory = getStory(storyId);
        setStory(fetchedStory);
    }, [storyId]);

    if (story === undefined) {
        return <h1>ストーリーが見つかりませんでした。</h1>;
    }
    return(
        <>
            <Timeline story={story}/>
            <AddEvent storyId={storyId} timelineId={story?.timelines[0].timelineId} story={story} setStory={setStory}/>
        </>
    )
}