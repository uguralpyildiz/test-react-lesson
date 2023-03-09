import React from 'react';
import Mvits from './Mvits';
const Tweet = () => {
const tweets = [

    {
        name: "mugur", img: null,
        pimg: "https://picsum.photos/300?image=12",
        tweet: <div className='tweet'><p>güzel training yaptım</p></div>,
        date: "09/OCT/23",
    },
    {
        name: "mugur", img: null,
        pimg: "https://picsum.photos/300?image=12",
        tweet: <div className='tweet'><p>yarında yapıcam</p></div>,
        date: "09/OCT/23",
    },

    {   name: "ugur",
        img: <img src="https://picsum.photos/1300?image=501" />, 
        pimg: "https://picsum.photos/300?image=101", 
        tweet: <div className="tweet">iam listening to bilmem ne</div>,
        date: "07/MAY/23", 
    },

    {   name: "mugur", img: null, 
        pimg: "https://picsum.photos/300?image=10",
        tweet: <div className='tweet'><p>i love you dudea sdfasdf asd fsd fsdfsdf asd fasdf asdf asdf asd fasdf asd</p></div>, 
        date: "02/MAY/22", 
    },

    {
        name: "ugur",
        img: <img src="https://picsum.photos/1300?image=505" />,
        pimg: "https://picsum.photos/300?image=101",
        date: "22/JAN/22", 
    },

    {
        name: "mugur", img: null,
        pimg: "https://picsum.photos/300?image=12",
        tweet: <div className='tweet'><p>fantastic</p></div>,
        date: "23/OCT/23", 
    },


];
return(
   <section>
    {tweets.map((mvits) => (
        <Mvits me={mvits.name} img={mvits.img} pimg={mvits.pimg} tweet={mvits.tweet} date={mvits.date}/>
    ))}
   </section>
)}
export default Tweet;