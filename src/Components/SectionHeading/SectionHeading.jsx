
function SectionHeading({subHeading, heading}) {
  return (
    <div className="flex flex-col justify-center items-center text-center mb-12">
        <p className="text-[20px] text-[#D99904]">--- {subHeading} ---</p>
        <h1 className="text-[40px] inline border-t-4 border-b-4 mt-4 py-5 px-[65px] uppercase">{heading}</h1>
    </div>
  )
}

export default SectionHeading