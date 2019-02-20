import React from 'react';
 import Tweet from '../components/Tweet'
// import data from '../constants/data'

const TwitterFeed = (props) => {
  let name=props.data.map((element)=>{
    return(
      <Tweet
         profilePic={element.user.profile_image_url}
         key={element.id_str}
         tweetName={element.user.name}
         userName={element.user.screen_name}
         description={element.text}
         time={element.timestamp_ms}
         retweetCount={element.retweet_count}
         entities={element.entities}
         favoriteCount={element.favorite_count}
         favoritedOrNot={element.favorited}
         retweetedOrNot={element.retweeted}
      />
    )
  })
  return(
    <div>
      <ul>{name}</ul>
    </div>
  )
};

export default TwitterFeed;
