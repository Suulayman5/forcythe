type IProps = {
    text: string
}
export const Button = ({text}: IProps)=>{
    return (
        <div className="w-fit mx-auto mb-5">
            <div className="relative w-fit">
                    <button className="w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full bg-white text-black relative z-10 font-semibold hover:bg-[#064386] hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md"> {text}</button>
                <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed hover:border-[#064386]"></div>
            </div>
        </div>
    )
}