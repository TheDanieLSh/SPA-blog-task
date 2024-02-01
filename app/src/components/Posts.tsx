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

    dataFetch();

    return (
        <main>
            { postsArray.length ? (
                <div className="main__first-post">
                    <img src="https://placehold.co/1140x600" />
                    <div className="main-post__content">
                        <div className="main-post__header">
                            <div className="main-post__title">{postsArray[0].title}</div>
                            <div className="main-post__reactions"></div>
                        </div>
                        <div className="main-post__body">
                            <p className="main-post__text">{postsArray[0].body}</p>
                        </div>
                        <div className="main-post__footer"></div>
                    </div>
                </div>
            ) : (
                <div>Posts not found.</div>
            ) }
            <div className="main__further-posts"></div>
        </main>
    )
}