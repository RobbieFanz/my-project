import github from '/github.svg'
import linkedin from '/linkedin.svg'

export function Contacts(){
    return(
        <div className="relative z-10 flex h-auto w-full items-center justify-center">
                <div className="flex flex-col items-center justify-center md:gap-3 lg:gap-6 px-4 text-center">
                    <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter">
                        Welcome
                    </h1>
                    <p className="text-lg md:text-4xl lg:text-6xl text-white tracking-tighter font-semibold">

                            My name is Robert Fanzutti<br/>
                            This website is still under construction and is just a demo

                    </p>
                    <p className="text-lg md:text-2xl lg:text-3xl text-white tracking-tighter">
                        <div className="flex">
                            <div className="mr-20">
                                <a href="https://github.com/RobbieFanz" target="_blank" className="flex items-center gap-2 text-white"><img src={github} className="w-8"/>GitHub</a>
                            </div>
                            <a href="https://www.linkedin.com/in/robert-fanzutti-2b04752a4/" target="_blank" className="flex items-center gap-2 text-white"><img src={linkedin} className="w-8"/>LinkedIn</a>
                        </div>
                    </p>
                </div>
            </div>
    )

}