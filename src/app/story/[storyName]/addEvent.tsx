import { createEvent } from "@/api/createEvent";
import type { Event } from "@/api/Types";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function AddEvent({ storyId, timelineId }: { storyId: string; timelineId: string }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventDetails, setEventDetails] = useState("");

    

    const handleAddEvent = () => {
        addEvent(eventName, new Date(eventDate), eventDetails);
        setIsModalOpen(false);
        setEventName("");
        setEventDetails("");
    };

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0];
        setEventDate(formattedDate);
    }, []);

    const addEvent = (eventName: string, eventDate: Date, eventDetails: string) => {
        const eventObject: Event = {
            eventId: uuidv4(),
            eventName: eventName,
            eventDate: eventDate,
            eventDescription: eventDetails,
        }
        createEvent(storyId, timelineId, eventObject);
        
    }
    return (
        <div>
            <button
                className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => setIsModalOpen(true)}
            >
                イベント追加
            </button>

            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                >
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl mb-4">イベント追加</h2>
                        <input
                            type="text"
                            placeholder="イベント名"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            className="mb-2 p-2 border rounded w-full"
                        />
                        <input
                            type="date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            className="mb-2 p-2 border rounded w-full"
                        />
                        <textarea
                            placeholder="イベント詳細"
                            value={eventDetails}
                            onChange={(e) => setEventDetails(e.target.value)}
                            className="mb-2 p-2 border rounded w-full"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={handleAddEvent}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            >
                                追加
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                            >
                                キャンセル
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
