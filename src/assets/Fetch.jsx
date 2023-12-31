import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube'

const Fetch = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://almog.halavudvash.co.il//wp-json/wp/v2/posts/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);
  return (
    <div>       
      
      
      {posts.map((post) => (

        <div className='song'>
        <ReactPlayer
  url={post.acf.url}
  width={300}
  height={200}
/>
        {post.title.rendered} 
        {post.acf.artist}
        {post.acf.album}
        {post.acf.time}


         </div>
      ))}
    </div>
  );
};
export default Fetch;