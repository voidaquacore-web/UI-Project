import LeftContent from "./leftcontent";
import RightContent from "./Rightcontent";

const PageContent1 = () => {
    return (  
        <div className="py-4 gap-15 items-center px-18 h-[86vh] text-white flex">
            <LeftContent />
            <RightContent />
        </div>
    );
}
 
export default PageContent1;