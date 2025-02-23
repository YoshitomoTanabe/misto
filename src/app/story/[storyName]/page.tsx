import { useRouter } from 'next/router';


export default function ShowStory() {
    const router = useRouter();
    const { storyName } = router.query;

}