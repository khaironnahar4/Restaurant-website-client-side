import SectionHeading from "../../../Components/SectionHeading/SectionHeading"
import useCategory from "../../../Hooks/useCategory"
import Menu from "../../SharedComponents/Menu/Menu";


function OurMenu() {
    const [datas] = useCategory('offered');
    // console.log(datas);
    
  return (
    <div>
        <SectionHeading subHeading="Check It Out" heading="from our menu"></SectionHeading>
        <div>
            <Menu menuDatas={datas} buttonName="view full menu"></Menu>
        </div>
    </div>
  )
}

export default OurMenu