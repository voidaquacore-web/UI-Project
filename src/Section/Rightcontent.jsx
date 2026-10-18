import Card from "./card";
import img1 from '../assets/pic1.jpeg'; 
import img2 from '../assets/pic2.jpeg'; 
import img3 from '../assets/pic3.jpeg'; 
import img4 from '../assets/pic4.jpeg'; 

const RightContent = () => {
    return ( 
        <div id='right' className="h-full w-full flex flex-nowrap overflow-x-auto gap-4 ">
            <Card img={img1} num={1}/>
            <Card img={img3} num={2}/>
            <Card img={img2} num={3}/>
            <Card img={img4} num={4}/>
        </div>
     );
}
 
export default RightContent;