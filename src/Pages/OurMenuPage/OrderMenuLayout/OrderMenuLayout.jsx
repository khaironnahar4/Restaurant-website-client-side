import useCategory from "../../../Hooks/useCategory"
import Menu from "../../SharedComponents/Menu/Menu"



function OrderMenuLayout({menuName, buttonName}) {
    const [datas] = useCategory(menuName)
  return (
    <div>
       <Menu menuDatas={datas} buttonName={buttonName}></Menu>
    </div>
  )
}

export default OrderMenuLayout