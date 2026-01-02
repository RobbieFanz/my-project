
export function Skill({items, name, cols}){
    
    return<>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tighter text-center mt-5 mb-3">{name}</h1>
            <div className={"grid  gap-2 justify-items-center mb-15 "+cols}>
                {items.map((item, index) => (
                    <div key={index} className="text-lg md:text-xl lg:text-2xl text-white tracking-tighter font-semibold text-center flex col-span-1 items-center">
                    {item.label}{item.svg}
                    </div>
                ))}
                
            </div>
    </>
}