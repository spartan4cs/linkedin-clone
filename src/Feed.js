import {
  CalendarViewDayRounded,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@mui/icons-material";
import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">send</button>
          </form>
        </div>

        <div className="feed__inputOption">
          <InputOption title="Photo" Icon={Image} color="#70b5f9" />
          <InputOption title="Video" Icon={Subscriptions} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNote} color="#C0CBCD" />
          <InputOption
            title="Write Article"
            Icon={CalendarViewDayRounded}
            color="#7FC15E"
          />
        </div>
      </div>

      {/**POSTs */}
    </div>
  );
};

export default Feed;
