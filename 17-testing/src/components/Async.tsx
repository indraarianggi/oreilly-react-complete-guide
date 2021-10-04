import { useEffect, useState } from "react";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Async = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data: IPost[]) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>{posts.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
