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

    function returnRandom(): String {
        return String(Math.floor(Math.random() * 51))
    }
    return (
        <main>
            {postsArray.length ? (
                <div className="main__posts">
                    <div className="main__first-post">
                        <img src="https://placehold.co/1140x600" />
                        <div className="first-post__content">
                            <div className="first-post__header">
                                <div className="first-post__title">{postsArray[0].title}</div>
                                <div className="first-post__reactions">
                                    <div className="reactions__likes">
                                        <img src="like_grey.svg" />
                                        <div className="count">0</div>
                                    </div>
                                    <div className="reactions__dislikes">
                                        <img src="dislike_grey.svg" />
                                        <div className="count">0</div>
                                    </div>
                                </div>
                            </div>
                            <div className="first-post__body">
                                <p className="first-post__text">{postsArray[0].body}</p>
                            </div>
                            <div className="first-post__footer">
                                <div className="first-post__button">Читать далее</div>
                            </div>
                        </div>
                    </div>
                    <div className="main__further-posts">
                        {postsArray.map((post, i) => (
                            if (i  <= 3)
                        ))}
                    </div>
                </div>
            ) : (
                <div>Posts not found.</div>
            )}
        </main>
    )
}