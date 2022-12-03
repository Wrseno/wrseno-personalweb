import React from "react";
import Link from "next/link";

const AboutCard = () => {
  return (
<>    
    <div className="flex flex-wrap relative">
        <h1 className="w-full text-3xl font-bold text-center">About Me</h1>
            <div className="w-16 h-1.5 rounded-full bg-primary absolute lg:left-96 lg:top-12 left-24 top-10"></div>
        <div className="w-full self-center">
            <h1 className="text-lg font-bold lg:text-xl lg:mt-24 mt-14">Who Am I</h1>
                <p className="text-base mb-4 dark:text-slate-300">I am a web developer from <span className="text-gradient font-bold">Wonogiri, Indonesia.</span> Working in <span className="font-bold">Web Development</span> and I also love to create video on <span className="font-bold"><Link href="https://youtube.com/zeyxofficial" >Youtube</Link></span>.
                    <br/> I start learning Web Development in early 2022, after following <span className="font-bold">LKS Web Technologies</span>. 
                <br/> Until now I&#39;m still learning about <span className="font-bold">Programming</span>. 
            </p>
        </div>
    </div>

    <div className="w-full self-center my-8">
        <h1 className="text-lg font-bold mb-4 lg:text-xl">What I&#39;m Doing</h1>
            <ul className="grid lg:grid-cols-2 md:grid-cols-2">
                <li  className="p-1 border-gradient rounded-lg my-2 mx-2">
                    <div className="gradient-content lg:flex justify-start items-start gap-5 rounded-lg p-6">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="rgb(220 38 38)" className="mx-auto lg:my-4" viewBox="0 0 16 16">
                                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                            </svg>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-center lg:text-start">Web Development</h4>
                            <p className="dark:text-slate-300">Build and learn about Web Development or Programming.</p>
                        </div>
                    </div>
                </li>

                <li  className="p-1 border-gradient rounded-lg my-2 mx-2">
                    <div className="gradient-content lg:flex justify-start items-start gap-5 rounded-lg p-6">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="rgb(220 38 38)" className="mx-auto lg:my-4"viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                                <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
                            </svg>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-center lg:text-start">Design</h4>
                            <p className="dark:text-slate-300">Make high quality designs. Like a professional.</p>
                        </div>
                    </div>
                </li>

                <li  className="p-1 border-gradient rounded-lg my-2 mx-2">
                    <div className="gradient-content lg:flex justify-start items-start gap-5 rounded-lg p-6">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="rgb(220 38 38)" className="mx-auto lg:my-4" viewBox="0 0 16 16">
                            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                            </svg>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-center lg:text-start">3D Modeling</h4>
                            <p className="dark:text-slate-300">Create 3d assets or models for editing and graphic design.</p>
                        </div>
                    </div>
                </li>

                <li  className="p-1 border-gradient rounded-lg my-2 mx-2">
                    <div className="gradient-content lg:flex justify-start items-start gap-5 rounded-lg p-6">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="rgb(220 38 38)" className="mx-auto lg:my-4" viewBox="0 0 16 16">
                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                            </svg>
                        </div>

                        <div>
                            <h4 className="text-base font-semibold text-center lg:text-start">Photography</h4>
                            <p className="dark:text-slate-300">I like photography, even though I&#39;m not an expert in this field.</p>
                        </div>
                    </div>
                </li>
            </ul>
    </div>
</>
  )
}

export default AboutCard;