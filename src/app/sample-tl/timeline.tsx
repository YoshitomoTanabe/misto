import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { getStory } from "@/api/createEvent";
export default function Timeline({ storyId }: { storyId: string }) {
    const story = getStory(storyId);
    const events = story?.timelines[0].events;

    return events === undefined ? (
        <p>イベントなし</p>
    ) : (
            <VerticalTimeline lineColor="#ddd">
                {events.map((event_object) => (
                    <VerticalTimelineElement
                        key={event_object.eventId}
                        className="vertical-timeline-element--work"
                        // 背景色とテキスト色を設定
                        contentStyle={{
                            background: "#ffffff",
                            color: "#0D266A",
                        }}
                        // ◀部分の色
                        contentArrowStyle={{
                            borderRight: "7px solid #333333",
                        }}
                        // 日付
                        date={event_object.eventDate.toLocaleDateString(
                            "ja-JP"
                        )}
                        // アイコンの背景色
                        iconStyle={{ background: "#ffffff" }}
                        // アイコン
                        icon={
                            <span
                                style={{
                                    fontSize: "32px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                🌟
                            </span>
                        }
                    >
                        <h2 className="vertical-timeline-element-title">
                            {event_object.eventName}
                        </h2>
                        <p>{event_object.eventDescription}</p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
    )
}