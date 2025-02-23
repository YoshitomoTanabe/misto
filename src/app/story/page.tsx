"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { listStories } from '../storyTable';

export default function StoriesPage() {
    const router = useRouter();

    const handleClickTimeline = (storyName: string) => {
        router.push(`/story/${storyName}?id=${storyId}`);
    };
    
    return (
        <div>
            <h1>ストーリー一覧</h1>
            <ul>
                {listStories().map((story) => (
                    <li key={story.storyName}>
                        <button 
                            className='px-4 py-10 text-xl font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-700' 
                            onClick={() => handleClickTimeline(story.storyName)}
                        >
                            {story.storyName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )

}

