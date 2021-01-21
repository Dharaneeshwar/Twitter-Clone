import React, { useState } from "react";
import "./Tweetbox.css";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import profile from "./profile.jpg";
import firebaseConfig from "../../firebase";
import Firebase from "firebase";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

var firebaseapp = "";

if (!Firebase.apps.length) {
    firebaseapp = Firebase.initializeApp(firebaseConfig);
 }else {
    firebaseapp = Firebase.app(); // if already initialized, use that one
 }

const db = firebaseapp.firestore(); 

const storage = firebaseapp.storage()

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
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");
  const classes = useStyles();

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    if (file){
      const uploadTask = storage.ref(`/images/${file.name}`).put(file);
      uploadTask.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            setFile(null);
            setURL(url,upload_tweet());
            console.log(url,{url});
            
          });
      });
    } else {
      setURL(""); 
      upload_tweet();
    }

  }

  const upload_tweet = (e) => {
    db.collection("posts").add({
      id: Date.now(),
      displayName: "Dharaneeshwar",
      username: "daranip",
      verified: false,
      text: tweetMessage,
      image: {url}.url,
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
          <Avatar src={profile} alt="profile" className={classes.blue} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's up?"
            type="text"
          />
        </div>
        <div className="tweetBox__Buttons">
          <input
            onChange={handleChange}
            accept="image/*"
            className="file-input-hide"
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <IconButton aria-label="upload picture" component="span">
              <PhotoCamera className="tweetBox__upload" />
            </IconButton>
          </label>
          <Button
            onClick={handleUpload}
            type="submit"
            className="tweetBox__tweetButton"
            fullWidth
          >
            Tweet
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Tweetbox;
