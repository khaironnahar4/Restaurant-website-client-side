import Button from "../../../Components/Button/Button"
import "./Menu.css"

function Menu({menuDatas, buttonName}) {
  return (
    <div>
        <div className="grid lg:grid-cols-2 gap-6 p-6 lg:p-0">
        {
            menuDatas.map(data => (
                <div key={data._id} className="flex justify-between items-start gap-2">
                <img src={data.image} alt="" className="w-[120px] border rounded-r-[120px] rounded-b-[220px] menu-img "/>
                <div>
                    <h1 className="font-2 text-[20px]">{data.name} ------------------</h1>
                    <p className="text-gray-600">{data.recipe}</p>
                </div>
                <div className="w-1/5 justify-end text-end"><p className="text-[#BB8506] text-[20px]">${data.price}</p></div>
            </div>
            ))
        }
       
    </div>
    <Button text={buttonName}></Button>
    </div>
  )
}

export default Menu