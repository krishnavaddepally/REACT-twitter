import React from 'react';

const Tweet=props =>{
  let timestamp = props.time
	 let date = new Date(parseInt(timestamp))
	  date = date.toDateString().slice(4,10)


  return(
    <div className="borders">
      <div>
          <img src={props.profilePic} alt="profilePic"/>
      </div>

      <div>
        <div>
          <h4>{props.tweetName}</h4>
        </div>
        <div>
          {props.description}. {date}
        </div>
      </div>
      <div>
      <span>
        <i className="fa fa-trash">Trash</i>
        <i className="fa fa-retweet">{props.retweetCount}</i>
        <i className="fa fa-heart">{props.favoriteCount} People liked it</i>
      </span>
      </div>

    </div>
  )
}
export default Tweet;
