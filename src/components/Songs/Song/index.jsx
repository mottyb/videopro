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
  
function saveData(posts){
  localStorage.setItem("post", JSON.stringify("posts"))
}


  return (
    <>
      {posts.map((post) => (
        <div className='song'>
        <ReactPlayer
  url={post.acf.url}
  width={300}
  height={300}
  light={post.fimg_url}
 playing
 controls
/> <br></br>
      {post.title.rendered} <br></br>
      <hr />
      <b>Artist:</b> {post.acf.artist} <br></br>
      <b>Album:</b> {post.acf.album} <br></br>
      <b>Time:</b> {post.acf.time} 
      <button className='saveit' onClick={saveData}>💓</button>
  
         </div>
         
      ))}

    </>
  );
};

export default Fetch;