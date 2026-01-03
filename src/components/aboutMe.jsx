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
import SpotlightCard from "./SpotlightCard";



export function AboutMe(){
  const h1Classname="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-center "
  const pClassname="text-lg xs:text-2xl md:text-3xl lg:text-4xl text-white tracking-tighter text-center "
  const svgClassname="w-7 xs:w-10 ml-3"
  const spotlightcarclass="mt-10 lg:mt-20 mx-3 sm:mx-5 md:mx-15 max-w-8xl justify-self-center "
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
    return(<>

            <h1 className="pt-39 text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter text-center">About Me</h1>
            <p className="text-lg md:text-4xl lg:text-6xl text-white tracking-tighter text-center">
            some text about me
            </p>

            <SpotlightCard className={spotlightcarclass}>
            <h1 className={h1Classname}>Skills</h1>
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-items-center items-center">

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
            </SpotlightCard>
            <SpotlightCard className={spotlightcarclass}>
              <h1 className={h1Classname + " mb-7"}>Experience</h1>
              <p className={pClassname+" pt-5"}>
              Associate Software Engineer at Infosys Limited <br/>
              June 2025 - Present<br/><br/>
              Recieved extensive training in Spring Boot React and SQL. Completed AI focused trainings for Go To Market Team        
              </p>
            </SpotlightCard>

            <div className="grid grid-cols-1 2xl:grid-cols-2 mb-50 mt-10 lg:mt-20 gap-10 lg:gap-20 px-3 sm:px-5 md:px-15">
              <SpotlightCard className="">
                <h1 className={h1Classname}>Certifications</h1>
                <p className={pClassname + "mt-5"}>
                Infosys Certified Spring Associate<br/><br/>
                Infosys Certified React Professional<br/><br/>
                </p>
              </SpotlightCard>

              <SpotlightCard className="">
                <h1 className={h1Classname}>Education</h1>
                <div className={"text-sm xs:text-lg md:text-2xl lg:text-3xl 2xl:text-2xl wl:text-3xl  text-white tracking-tighter " + "mt-5 grid grid-cols-3 items-center gap-4 mx-auto max-w-4xl"}>
                  <img className="w-20 xs:w-30 md:w-40 col-span-1 justify-self-end" src={central}/>
                  <p className="col-span-2 text-left">
                    Central Connecticut State University<br/>
                    B.S. in Computer Science Honors <br/>
                    Minor in Mathematics <br/>
                    Graduated May 2025
                  </p>
                </div>
              </SpotlightCard>
            </div>
            </>
    )

}