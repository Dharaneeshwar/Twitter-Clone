import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InsertPhotoOutlinedIcon from "@material-ui/icons/InsertPhotoOutlined";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import profile from './profile.jpg';
import db from '../../firebase';


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  blue: {
    backgroundColor: "#50b7f5",
    margin: theme.spacing(2),
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Tweetbox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const classes = useStyles();

  const upload_tweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      id: Date.now(),
      displayName: "Dharaneeshwar",
      username: "daranip",
      verified: false,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://firebasestorage.googleapis.com/v0/b/twitter-clone-30cf3.appspot.com/o/Dharani%20Profile%20Pic.jpg?alt=media&token=216e38b8-371e-4895-98d0-ef0f4ea7df5c",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
        <Avatar src={profile} alt="profile" className={classes.blue}/>
          <input 
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's up?" 
          type="text" />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Image Link"
          type="text"
        />
        <div className="tweetBox__Buttons">
        {/* <input accept="image/*" className="file-input-hide" id="icon-button-file" type="file" />
          <label htmlFor="icon-button-file">
          <IconButton aria-label="upload picture" component="span">
            <PhotoCamera className="tweetBox__upload" />
          </IconButton>
          </label> */}
          <Button onClick={upload_tweet} type="submit" className="tweetBox__tweetButton" fullWidth>
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Tweetbox;
