import Card from "./card";
import img1 from '../../assets/pic1.jpeg'; 
import img2 from '../../assets/pic2.jpeg'; 
import img3 from '../../assets/pic3.jpeg'; 

const RightContent = () => {
    return ( 
        <div className="h-full w-9xl flex overflow-x-auto gap-4 ">
            <Card img={img1} num={1}/>
            <Card img={img3} num={2}/>
            <Card img={img2} num={3}/>
        </div>
     );
}
 
export default RightContent;