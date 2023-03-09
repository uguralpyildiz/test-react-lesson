import React from 'react';
import Mvits from './Mvits';
const Tweet = (props) => {
const tweets = [
    { name: "falanko", img: "https://picsum.photos/1300?image=501", pimg: "https://picsum.photos/300?image=101" },
    { name: "filanko", img: "https://picsum.photos/1300?image=502", pimg: "https://picsum.photos/300?image=102" },
    { name: "olayko", img: "https://picsum.photos/1300?image=503", pimg: "https://picsum.photos/300?image=103" },
    { name: "falanko", img: "https://picsum.photos/1300?image=504", pimg: "https://picsum.photos/300?image=104" },

];
return(
   <section>
    {tweets.map((mvits) => (
        <Mvits me={mvits.name} img={mvits.img} pimg={mvits.pimg}/>
    ))}
   </section>
)}
export default Tweet;