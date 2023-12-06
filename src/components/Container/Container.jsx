export default function Container({children, className=''}){

    return(
        <div className={`w-[90%] md:pl-52   text-white flex flex-col md:justify-start  md:items-start items-center  h-full md:py-14 py-4 pb-20 md:pb-0 md:gap-10 gap-8 ${className}`}>
            {children}
        </div>
    )
}