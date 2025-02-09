"use client";

import story from "../story";
import { useSearchParams } from "next/navigation";

export default function Editor() {
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">ストーリー編集: {story.name}</h1>
      
      <ul>
        {
          //storyが存在する場合のみ表示
          story && story.events.map((event) => (
            <li key={event.id}>
              <h2 >{event.title}</h2>
              <p>{event.description}</p>
              <p>{event.date}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}