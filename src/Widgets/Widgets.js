import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1348311711988604933"} />
        <div className="sharebutton">
          <span>Gimme a Shoutout 📯</span>
          <TwitterShareButton
            url={"https://www.daranip.com"}
            options={{ text: "Check out this guy @darani_p" }}
          />
        </div>
        
      </div>
      <div className="widget__about">
          <h2>About This Project</h2>
          <p>
          Btw, This is not a complete Twitter clone by any means.<br/> <br/>
           1. Sidebar doesn't work <br/> <br/>
2. Image Functionality is Half-Baked (Enter Image URL for now) <br/> <br/>
3. All Tweets are posted under the name Dharaneeshwar. Why not? On a Serious note, Authentication Functionality is yet to be done. <br/> <br/>
4. Search Bar is just an aesthetic element. (No Functionality Done) <br/> <br/>
5. Like Functionality, Share, Retweet are not done.<br/>
          </p>

        </div>
    </div>
  );
}

export default Widgets;
