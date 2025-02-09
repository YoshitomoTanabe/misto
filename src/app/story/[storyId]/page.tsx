type StoryPageProps = {
    params: {
        storyId: string;
    }
}

export default async function showStoryId({ params }: StoryPageProps) {
    const { storyId } = await params;
    return (
        <div>
            {storyId}
        </div>
    )
}
