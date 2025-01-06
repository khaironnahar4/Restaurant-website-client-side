

function Button({text}) {
  return (
    <div className="mt-12 flex justify-center">
        <button className="py-2 px-3 rounded-md hover:bg-[#1F2937] hover:text-white border-b-[#1F2937] border-b-4 uppercase">{text}</button>
    </div>
  )
}

export default Button