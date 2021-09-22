import { Create } from "@mui/icons-material";
import React from "react";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
        <div className="feed__inputContainer">
          <div className="feed__input">
            <Create/>
            <form>  
              <input type="text"/>
              <button type="submit">send</button>    
            </form>
          </div>
        </div>

        <div className="feed__inputOption">
        </div>
    </div>
  );
};

export default Feed;
