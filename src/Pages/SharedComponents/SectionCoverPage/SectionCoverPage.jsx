import "./sectionCoverPage.css"


function SectionCoverPage({img, heading}) {
  return (
    <div className={` w-full max-h-[700px] relative overflow-hidden`}>
        <img src={img} alt="image" className="w-full h-full object-cover object-center overflow-hidden"/>
        <div className="flex justify-center items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-30">
            <div className="text-white text-center bg-[#0008] lg:py-32 md:py-20 py-14 px-6">
                <h1 className="text-[45px] font-semibold font-2 uppercase">{heading}</h1>
                <p className="lg:px-20 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam aliquid optio hic nostrum,
                     inventore minus quam libero numquam mollitia eos facilis repellat quia tempora.</p>
            </div>
        </div>
    </div>
  )
}

export default SectionCoverPage