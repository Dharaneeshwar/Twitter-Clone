import React, { useState, useEffect } from "react";
import "./Feed.css";
import Tweetbox from "./Tweetbox/Tweetbox.js";
import firebaseConfig from "../firebase";
import Firebase from "firebase";
import Post from "./Post/Post.js";

var firebaseapp = "";

if (!Firebase.apps.length) {
  firebaseapp = Firebase.initializeApp(firebaseConfig);
}else {
  firebaseapp = Firebase.app(); // if already initialized, use that one
}

const db = firebaseapp.firestore(); 

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed__head">
        <h1>Home</h1>
      </div>
      <Tweetbox />
      {posts
        .sort((a, b) => ((parseInt(a.id) < parseInt(b.id)) ? 1 : -1)).map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
    </div>
  );
}

export default Feed;
