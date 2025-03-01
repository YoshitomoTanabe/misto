"use client";

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { getStory } from "@/app/storyTable";

export default function CustomizedTimeline() {
    const story = getStory("c397cea8-6d06-f5d8-79e4-26691fc3d2c8");
    const events = story?.timelines[0].events;

    return events === undefined ? (
        <p>イベントなし</p>
    ) : (
        // 縦線の色を指定
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
              date={event_object.eventDate.toLocaleDateString("ja-JP")}
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
              <h2 className="vertical-timeline-element-title">{event_object.eventName}</h2>
              <p>{event_object.eventDescription}</p>
          </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    );
}
