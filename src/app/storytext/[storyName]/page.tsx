"use client";

import { useSearchParams } from "next/navigation";
import { getStory } from "@/app/storyTable";

export default function ShowStory() {
    const searchParams = useSearchParams();
    const storyId = searchParams.get("id") || "no ID.";
    const story = getStory(storyId);
    return story === undefined ? 
        <h1>ストーリーが見つかりませんでした。</h1>
     : (
        <>
            <h1>ストーリー詳細</h1>
            <h2>ストーリーID: {storyId}</h2>
            <p>
                ストーリー名:{" "}
                {story?.storyName
                    ? story?.storyName
                    : "ストーリー名がありません。"}
            </p>
            <p>
                作成者ID:{" "}
                {story?.createUserId
                    ? story?.createUserId
                    : "作成者IDがありません。"}
            </p>
            <p>
                作成日:{" "}
                {story?.createDate
                    ? story?.createDate.toLocaleDateString("ja-JP")
                    : "作成日がありません。"}
            </p>
            <p>
                更新日:{" "}
                {story?.updateDate
                    ? story?.updateDate.toLocaleDateString("ja-JP")
                    : "更新日がありません。"}
            </p>
            <p>
                ストーリー概要:{" "}
                {story?.storyDescription
                    ? story?.storyDescription
                    : "ストーリー概要がありません。"}
            </p>
            <h2>タイムライン</h2>
            {story?.timelines.map((timeline) => (
                <li key={timeline.timelineId}>
                    <h3>タイムライン名: {timeline.timelineName}</h3>
                    <ul>
                        {timeline.events.map((event) => (
                            <li key={event.eventId}>
                                <h4>イベント名: {event.eventName}</h4>
                                <p>
                                    イベント日:{" "}
                                    {event.eventDate.toLocaleDateString(
                                        "ja-JP"
                                    )}
                                </p>
                                <p>イベント概要: {event.eventDescription}</p>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
            ;
        </>
    );
}
