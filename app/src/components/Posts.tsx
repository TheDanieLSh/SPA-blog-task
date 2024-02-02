import { resolve } from "path";
import { useEffect, useState } from "react";

export default function Posts() {
    interface Post {
        "userId": Number,
        "id": Number,
        "title": String,
        "body": String,
    }
    
    const [postsArray, setPostsArray] = useState<Post[]>([]);

    const dataFetch = async () => {
        const fetchedData = await fetch('https://jsonplaceholder.typicode.com/posts');
        setPostsArray(await fetchedData.json());
    }

    useEffect(() => {
        dataFetch();
    }, [])

    return (
        <main>
            { postsArray.length ? (
                <div className="main__first-post">
                    <img src="https://placehold.co/1140x600" />
                    <div className="first-post__content">
                        <div className="first-post__header">
                            <div className="first-post__title">{postsArray[0].title}</div>
                            <div className="first-post__reactions"></div>
                        </div>
                        <div className="first-post__body">
                            <p className="first-post__text">{postsArray[0].body}</p>
                        </div>
                        <div className="first-post__footer">
                            <div className="first-post__button">Читать далее</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Posts not found.</div>
            ) }
            <div className="main__further-posts"></div>
        </main>
    )
}