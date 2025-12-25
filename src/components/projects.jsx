import { AboutMe } from "./aboutMe";
import GlassSurface from "./GlassSurface";

import SpotlightCard from "./SpotlightCard";
import projectImg from '/project.png'

export function Projects(){
    return(<>
        <div className="pt-35">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter text-center">Projects</h1>
        <SpotlightCard className="grid grid-cols-1 text-center xl:grid-cols-2 xl:text-left m-4 xs:m-4 md:m-15 gap-4 max-w-7xl justify-self-center justify-items-center" spotlightColor="rgba(255, 255, 255, 0.11)">
            <img className="col-span-1 rounded-md self-center" src={projectImg} alt="project" />
            <p className="col-span-1 self-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores dicta ipsa nihil dolores doloribus aliquid autem blanditiis enim eaque reprehenderit ullam, in architecto at doloremque ipsum, laudantium ad? Distinctio.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sapiente a nostrum accusamus accusantium modi iste architecto iusto est. Delectus eligendi temporibus officiis dignissimos praesentium, voluptatum recusandae eaque adipisci atque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo nam nihil ullam, maxime perferendis ut laboriosam atque aut consequuntur at quae eius, tempora odit ipsa? Assumenda, dolorem? Dolores
            </p>
        </SpotlightCard>
        <SpotlightCard className="grid grid-cols-1 text-center xl:grid-cols-2 xl:text-left m-3 xs:m-4 md:m-15 gap-4 max-w-7xl justify-self-center justify-items-center" spotlightColor="rgba(255, 255, 255, 0.11)">
            <img className="col-span-1 rounded-md self-center xl:order-last" src={projectImg} alt="project" />
            <p className="col-span-1 self-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum maiores dicta ipsa nihil dolores doloribus aliquid autem blanditiis enim eaque reprehenderit ullam, in architecto at doloremque ipsum, laudantium ad? Distinctio.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sapiente a nostrum accusamus accusantium modi iste architecto iusto est. Delectus eligendi temporibus officiis dignissimos praesentium, voluptatum recusandae eaque adipisci atque!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo nam nihil ullam, maxime perferendis ut laboriosam atque aut consequuntur at quae eius, tempora odit ipsa? Assumenda, dolorem? Dolores
            </p>
           
        </SpotlightCard>
        </div>
   
    </>)
    
}