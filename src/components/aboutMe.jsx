import { Skill } from "./skill";
import reactsvg from "/react.svg";
import springsvg from "/spring.svg";
import javasvg from "/java.svg";
import pythonsvg from "/python.svg";
import javascriptsvg from "/javascript.svg";
import vscodesvg from "/vscode.svg";
import eclipsesvg from "/eclipse.svg";
import postmansvg from "/postman.svg";
import mysqlsvg from "/mysql.svg";
import bootstrapsvg from "/bootstrap.svg";
import tailwindsvg from "/tailwind.svg";
import mavensvg from "/maven.svg";
import vitesvg from "/vite.svg";
import RVFsvg from "/RVF.svg";
import central from "/Central_Connecticut_State_University_Seal.png"



export function AboutMe(){
  const h1Classname="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter text-center mt-30"
  const pClassname="text-lg md:text-2xl lg:text-4xl text-white tracking-tighter font-semibold text-center "
  const svgClassname="w-10 ml-3"
     const frameworks = [
        {
          label: 'SpringBoot',
          svg: <img className={svgClassname} src={springsvg}/>
        },
        {
          label: 'React',
          svg: <img className={svgClassname} src={reactsvg}/>
        },
        {
          label: 'TailwindCSS',
          svg: <img className={svgClassname} src={tailwindsvg}/>
        },
        {
          label: 'Bootstrap',
          svg: <img className={svgClassname} src={bootstrapsvg}/>
        },
        
    ];

    const tools = [
        {
          label: 'Eclipse',
          svg: <img className={svgClassname} src={eclipsesvg}/>
        },
        {
          label: 'VS code',
          svg: <img className={svgClassname} src={vscodesvg}/>
        },
        {
          label: 'Postman',
          svg: <img className={svgClassname} src={postmansvg}/>
        },
    ];

    const langs = [
        {
          label: 'Java',
          svg: <img className={svgClassname} src={javasvg}/>
        },
        {
          label: 'JavaScript',
          svg: <img className={svgClassname} src={javascriptsvg}/>
        },
        {
          label: 'Python',
          svg: <img className={svgClassname} src={pythonsvg}/>
        },
    ];

    const database = [
        {
          label: 'MySQL',
          svg: <img className={svgClassname} src={mysqlsvg}/>
        },
    ];

    const build = [
        {
          label: 'Maven',
          svg: <img className={svgClassname} src={mavensvg}/>
        },
        {
          label: 'Vite',
          svg: <img className={svgClassname} src={vitesvg}/>
        },
    ];
    const cloud = [
        {
          label: 'not comleted yet',
          svg: <img className={svgClassname} src={RVFsvg}/>
        },
    ];
    return(

        <div className="pt-39">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter text-center">About Me</h1>
            <p className="text-lg md:text-4xl lg:text-6xl text-white tracking-tighter font-semibold text-center">
            some text about me
            </p>
            <h1 className={h1Classname}>Skills</h1>
            <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center items-center">

                <div className="col-span-1">
                    <Skill items={langs} name='Languages' cols={'grid-cols-3'}/>
                </div>
                <div className="col-span-1">
                    <Skill items={frameworks} name='Frameworks' cols={'grid-cols-2'}/>
                </div>
                <div className="col-span-1">
                    <Skill items={tools} name='Tools' cols={'grid-cols-3'}/>
                </div>

                <div className="col-span-1">
                    <Skill items={database} name='Database' cols={'grid-cols-1'}/>
                </div>

                <div className="col-span-1">
                    <Skill items={build} name='Build Tools' cols={'grid-cols-2'}/>
                </div>

                <div className="col-span-1">
                    <Skill items={cloud} name='Cloud' cols={'grid-cols-1'}/>
                </div>
            </div>

            <h1 className={h1Classname}>Experience</h1>
            <p className={pClassname}>
            Associate Software Engineer at Infosys Limited <br/>
            June 2025 - Present
            </p>

            <h1 className={h1Classname}>Certifications</h1>
            <p className={pClassname + "mt-5"}>
            Infosys Certified Spring Associate<br/><br/>
            Infosys Certified React Professional<br/><br/>
            </p>

            <h1 className={h1Classname}>Education</h1>
            <div className={pClassname + "mb-30 mx-20"}>
            <div className="flex items-center text-center justify-self-center">Central Connecticut State University <img className={svgClassname} src={central}/></div>
            Bachelor of science in computer science honors <br/>
            Minor in mathematics <br/>
            Graduated May 2025
            </div>
        </div>
    )

}