/* eslint-disable jsx-a11y/alt-text */
import NavigationBar from "@/components/navigationBar";
import Portofolio from "@/components/Portofolios";

export default function Home() {
    const footer = [
        {
            logo: "/social/github.png",
            href: "github.com/hkldtrinanda",
        },
        {
            logo: "/social/lid.png",
            href: "https://www.linkedin.com/in/hkldtrinanda/",
        },
    ];

    return (
        <>
            <NavigationBar></NavigationBar>
            {/* Profile */}
            <section>
                <div className="bg-gray-100" id="profile">
                    <div className="container px-4 mx-auto">
                        <div className="relative pt-24 mb-16 xl:mb-0 z-20">
                            <span className="block mb-9 font-medium tracking-widest uppercase text-center text-sm text-gray-300 items-center">Hi, Welcome</span>
                            <h1 className="max-w-3xl mx-auto font-heading font-medium text-center text-6xl md:text-10xl leading-tight">I`M HAIKAL DANUNG TRINANDA</h1>
                        </div>
                    </div>
                    <div className="relative xl:-mt-32 max-w-max mx-auto ">
                        <img src="/widget3.png" alt="" className="items-center" />
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-24 2xl:py-44 overflow-hidden" id="about">
                <div className="container px-4 mx-auto">
                    <div className="text-center">
                        <span className="text-sm text-gray-300 uppercase">Who Am I?</span>
                        <h2 className="mt-8 mb-24 font-heading font-medium text-xl md:text-4xl xl:text-7xl">Here you can recognize me</h2>
                    </div>
                    <div className="flex flex-wrap items-center justify-center -mx-4 mb-16 md:mb-28">
                        <div className="w-full sm:w-2/3 max-w-4xl px-4 mx-auto mb-16 sm:mb-0 ">
                            <div className="relative mb-5 px-8 md:px-20 bg-white rounded-xl shadow-lg py-14">
                                <img className="absolute top-0 right-0 mr-12 transform -translate-y-1/2" src="/quote-2.svg" alt="" />
                                <p className="text-lg md:text-xl font-heading font-medium">
                                    A student from Jakarta who is currently pursuing a bachelor's degree at one of the state Universities in Jakarta by taking the Game Technology Study Program
                                </p>
                            </div>
                            <div className="flex flex-wrap -mx-4 ">
                                <div className="w-full lg:w-1/2 px-4 lg:flex-grow mb-8 lg:mb-0" data-aos="fade-right" data-aos-duration="1000">
                                    <div className="h-full flex items-center py-5 px-8 md:px-20 bg-white rounded-xl shadow-lg">
                                        <div className="flex items-center justify-center text-left">
                                            <img className="mr-8 object-cover rounded-full w-20" src="/Untitled1111.png" alt="" />
                                            <div>
                                                <h4 className="text-xl font-heading font-medium mb-2">Haikal D Trinanda</h4>
                                                <a href="http://runes.asia">
                                                    <p className="text-gray-400 hover:text-gray-600 duration-300 font-medium">Runes</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 px-4 lg:flex-grow" data-aos="fade-left" data-aos-duration="1000">
                                    <div className="h-full pl-12 pr-4 bg-white rounded-xl shadow-lg py-12">
                                        <div className="flex items-center">
                                            <div className="mr-4 ">
                                                <a href="#" className=" text-base rounded-full py-4 px-8 duration-300 hover:bg-opacity-70 bg-sky-500 text-white border-transparent">
                                                    My Resume
                                                </a>
                                            </div>
                                            <a href="#" className="font-medium text-base rounded-full px-8 py-4 border-transparent bg-gray-100 duration-300 hover:bg-gray-300">
                                                My CV
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-auto px-4 mb-4 xl:mb-0 text-center order-last">
                            <a className="inline-block" href="#"></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Portofolio */}
            <Portofolio></Portofolio>
            {/* Footer */}
            <section className="bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="pt-10 pb-12">
                        <div className="relative lg:pb-8 mb-8 flex flex-wrap lg:border-b lg:border-gray-300">
                            <p className="w-full lg:w-auto text-gray-400 text-sm text-center lg:text-left order-last lg:order-first inline-block">© 2022. All rights reserved.</p>
                            <div className="mb-6 lg:mb-0 lg:ml-auto w-full lg:w-auto order-first lg:order-last text-center lg:text-center">
                                <a href="#">
                                    <img className="inline-block lg:h-10 md:h-6 sm:h-6 " src="/he_blck.png" alt="" width="auto" />
                                </a>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="grid grid-cols-2">
                                {footer.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <a className="inline-block w-10 mr-2 p-2 rounded" href={item.href}>
                                                <img src={item.logo} alt="" className="mx-auto hover:bg-opacity-50" />
                                            </a>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
