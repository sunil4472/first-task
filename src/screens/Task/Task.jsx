import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const Task = () => {
  // Course data for the three cards
  const courseData = [
    {
      type: "All Courses",
      count: "23",
      description: "courses you're powering through right now.",
      bgColor: "bg-[#c33241]",
      textColor: "text-[#f9ebec]",
      width: "w-[592px]",
      icons: true,
    },
    {
      type: "Upcoming Courses",
      count: "05",
      description: "exciting new courses waiting to boost your skills.",
      bgColor: "bg-[#f9ebec]",
      textColor: "text-[#c33241]",
      width: "w-[280px]",
      rotated: true,
      illustration: "/assets/arrow.png",
    },
    {
      type: "Ongoing Courses",
      count: "10",
      description: "currently happening—don't miss out on the action!",
      bgColor: "bg-[#f9ebec]",
      textColor: "text-[#c33241]",
      width: "w-[280px]",
      rotated: true,
      illustration: "/assets/arrow.png",
    },
  ];

  // Course icons data
  const courseIcons = [
    {
      src: "/assets/react.png",
      alt: "React icon",
      className: "w-[93px] h-[93px] top-[-9px] left-[-9px] ",
    },
    {
      src: "/assets/like.png",
      alt: "Web development icon",
      className: "w-[79px] h-[83px] -top-1 -left-0.5 rotate-[-7.22deg]",
      wrapperClass:
        "relative w-[75px] h-[75px] overflow-hidden rotate-[7.22deg] shadow-[0px_9.76px_29.27px_-3.66px_#1018281a,0px_9.76px_29.27px_-3.66px_#1018280d]",
    },
    {
      isVueIcon: true,
      wrapperClass:
        "relative w-[55.75px] h-[75px] rotate-[-8.97deg] shadow-[0px_9.76px_29.27px_-3.66px_#1018281a,0px_9.76px_29.27px_-3.66px_#1018280d]",
    },
    {
      src: "/assets/color.png",
      alt: "Design icon",
      className: "relative w-[89.57px] h-[89.57px]",
    },
  ];

  // Vue icon SVG paths
  const vueIconPaths = [
    {
      src: "/assets/vue.png",
      className: "absolute w-[63px] h-14 top-[5px] left-1 rotate-[8.97deg]",
    },
  ];

  return (
    <main className="bg-white flex flex-row justify-center w-full">
      <section className="bg-white w-full max-w-[1440px] min-h-[854px]">
        <div className="flex flex-col w-full items-start gap-5 px-28 py-[60px] relative top-[68px]">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full">
            <div className="flex flex-col items-start gap-12 relative self-stretch w-full">
              <>
                {/* Header section */}
                <header className="inline-flex flex-col items-start gap-5 relative">
                  <p className="relative w-fit mt-[-1.00px] font-skillshikshya-1-desktop-body-feature-standard font-[number:var(--skillshikshya-1-desktop-body-feature-standard-font-weight)] text-[#414141] text-[length:var(--skillshikshya-1-desktop-body-feature-standard-font-size)] tracking-[var(--skillshikshya-1-desktop-body-feature-standard-letter-spacing)] leading-[var(--skillshikshya-1-desktop-body-feature-standard-line-height)] [font-style:var(--skillshikshya-1-desktop-body-feature-standard-font-style)]">
                    Explore our classes and master trending skills!
                  </p>

                  <h1 className="relative w-fit font-skillshikshya-1-mobile-headings-display-3 font-[number:var(--skillshikshya-1-mobile-headings-display-3-font-weight)] text-transparent text-[length:var(--skillshikshya-1-mobile-headings-display-3-font-size)] tracking-[var(--skillshikshya-1-mobile-headings-display-3-letter-spacing)] leading-[var(--skillshikshya-1-mobile-headings-display-3-line-height)] whitespace-nowrap [font-style:var(--skillshikshya-1-mobile-headings-display-3-font-style)]">
                    <span className="text-[#2a2a2a] font-skillshikshya-1-mobile-headings-display-3 [font-style:var(--skillshikshya-1-mobile-headings-display-3-font-style)] font-[number:var(--skillshikshya-1-mobile-headings-display-3-font-weight)] tracking-[var(--skillshikshya-1-mobile-headings-display-3-letter-spacing)] leading-[var(--skillshikshya-1-mobile-headings-display-3-line-height)] text-[length:var(--skillshikshya-1-mobile-headings-display-3-font-size)]">
                      Dive Into
                    </span>

                    <span className="text-[#1da077] font-skillshikshya-1-mobile-headings-display-3 [font-style:var(--skillshikshya-1-mobile-headings-display-3-font-style)] font-[number:var(--skillshikshya-1-mobile-headings-display-3-font-weight)] tracking-[var(--skillshikshya-1-mobile-headings-display-3-letter-spacing)] leading-[var(--skillshikshya-1-mobile-headings-display-3-line-height)] text-[length:var(--skillshikshya-1-mobile-headings-display-3-font-size)]">
                      {" "}
                      What&apos;s Hot Right Now! 🔥
                    </span>
                  </h1>
                </header>

                {/* Cards section */}
                <div className="flex w-full max-w-[1216px] items-start justify-center gap-8 relative">
                  {/* Main card */}
                  <Card
                    className={`relative ${courseData[0].width} h-[461px] ${courseData[0].bgColor} rounded-[32px] overflow-hidden border-none`}
                  >
                    <CardContent className="p-0 h-full">
                      <div className="absolute w-[15px] h-[15px] top-[453px] -left-2 bg-[#f9ebec] rounded-[7.5px]" />

                      {/* View all courses button */}
                      <Button
                        variant="link"
                        className="inline-flex items-center gap-2 absolute top-10 right-10 p-0 h-auto no-underline hover:no-underline"
                      >
                        <span className="relative w-fit mt-[-1.00px] font-skillshikshya-1-desktop-body-highlight-accent font-[number:var(--skillshikshya-1-desktop-body-highlight-accent-font-weight)] text-[#f9ebec] text-[length:var(--skillshikshya-1-desktop-body-highlight-accent-font-size)] text-center tracking-[var(--skillshikshikshya-1-desktop-body-highlight-accent-letter-spacing)] leading-[var(--skillshikshya-1-desktop-body-highlight-accent-line-height)] [font-style:var(--skillshikshya-1-desktop-body-highlight-accent-font-style)]">
                          View all Courses
                        </span>
                        <ArrowRightIcon className="w-5 h-5 text-bold text-[#f9ebec]  animate-arrow-float" />
                      </Button>

                      {/* Course icons */}
                      {courseData[0].icons && (
                        <div className="inline-flex items-center gap-[42px] absolute top-[126px] left-[66px]">
                          {courseIcons.map((icon, index) =>
                            icon.isVueIcon ? (
                              <div
                                key={`vue-icon-${index}`}
                                className={icon.wrapperClass}
                              >
                                <div className="relative w-[71px] h-[92px] top-[-9px] left-[-7px]">
                                  {vueIconPaths.map((path, pathIndex) => (
                                    <img
                                      key={`vue-path-${pathIndex}`}
                                      className={path.className}
                                      alt={`Vector ${pathIndex}`}
                                      src={path.src}
                                    />
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div
                                key={`icon-${index}`}
                                className={icon.wrapperClass || ""}
                              >
                                <img
                                  className={icon.className}
                                  alt={icon.alt || `Course icon ${index}`}
                                  src={icon.src}
                                />
                              </div>
                            )
                          )}
                        </div>
                      )}

                      {/* Course count and description */}
                      <div className="absolute w-[442px] h-[147px] top-[274px] left-[75px]">
                        <div className="inline-flex items-center gap-6 absolute top-[9px] left-0">
                          <div className="relative w-[200px] h-[138px] mt-[-1.00px] [font-family:'Nohemi-Bold',Helvetica] font-bold text-[#f9ebec] text-[150px] text-center tracking-[0] leading-[180.0px] whitespace-nowrap">
                            {courseData[0].count}
                          </div>

                          <div className="flex flex-col w-[218px] items-start gap-3 relative">
                            <h2 className="relative w-fit mt-[-1.00px] font-skillshikshya-1-desktop-headings-heading-4 font-[number:var(--skillshikshya-1-desktop-headings-heading-4-font-weight)] text-[#f9ebec] text-[length:var(--skillshikshya-1-desktop-headings-heading-4-font-size)] text-center tracking-[var(--skillshikshya-1-desktop-headings-heading-4-letter-spacing)] leading-[var(--skillshikshya-1-desktop-headings-heading-4-line-height)] [font-style:var(--skillshikshya-1-desktop-headings-heading-4-font-style)]">
                              {courseData[0].type}
                            </h2>

                            <p className="relative self-stretch font-skillshikshya-1-desktop-body-highlight-standard font-[number:var(--skillshikshya-1-desktop-body-highlight-standard-font-weight)] text-[#f9ebec] text-[length:var(--skillshikshya-1-desktop-body-highlight-standard-font-size)] tracking-[var(--skillshikshya-1-desktop-body-highlight-standard-letter-spacing)] leading-[var(--skillshikshya-1-desktop-body-highlight-standard-line-height)] [font-style:var(--skillshikshya-1-desktop-body-highlight-standard-font-style)]">
                              {courseData[0].description}
                            </p>
                          </div>
                        </div>

                        <div className="top-0 left-[187px] text-white absolute [font-family:'Nohemi-Bold',Helvetica] font-bold text-[64px] text-center tracking-[0] leading-[76.8px] whitespace-nowrap">
                          +
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Secondary cards */}
                  {courseData.slice(1).map((course, index) => (
                    <div
                      key={`course-wrapper-${index + 1}`}
                      className="relative group"
                    >
                      {/* Hover element positioned above and outside the card */}
                      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none group-hover:pointer-events-auto">
                        <div className="rounded-2xl">
                          <div className="text-center">
                            <div className=" px-4 py-2 rounded-full font-bold text-sm transform transition-transform duration-200">
                              Click me
                            </div>{" "}
                            <img
                              src={course.illustration}
                              alt={`${course.type} illustration`}
                              className="w-16 h-16 mx-auto mb-3"
                            />
                          </div>
                        </div>
                      </div>

                      <Card
                        className={`relative ${course.width} h-[461px] ${courseData[0]} bg-[#faebec] rounded-[32px] overflow-hidden border-none cursor-pointer`}
                      >
                        <CardContent className="p-0 h-full">
                          <div className="relative w-[676px] h-[596px] top-[-41px] left-[20px]">
                            <div className="absolute w-[596px] h-[596px] top-0 left-0 bg-[#f9ebec] rounded-[298px]" />

                            <div
                              className={`left-[${
                                index === 0 ? "158px" : "175px"
                              }] inline-flex flex-col items-center justify-center gap-6 absolute top-28`}
                            >
                              <div
                                className={`${
                                  index === 0
                                    ? "ml-[-4.50px] mr-[-4.50px]"
                                    : "ml-[-22.00px] mr-[-22.00px]"
                                } flex flex-col w-[218px] items-center justify-center gap-3 relative flex-[0_0_auto] -rotate-90`}
                              >
                                <h2 className="relative self-stretch mt-[-1.00px] font-skillshikshya-1-desktop-headings-heading-4 font-[number:var(--skillshikshya-1-desktop-headings-heading-4-font-weight)] text-[#c33241] text-[length:var(--skillshikshya-1-desktop-headings-heading-4-font-size)] tracking-[var(--skillshikshya-1-desktop-headings-heading-4-letter-spacing)] leading-[var(--skillshikshya-1-desktop-headings-heading-4-line-height)] [font-style:var(--skillshikshya-1-desktop-headings-heading-4-font-style)]">
                                  {course.type}
                                </h2>

                                <p className="relative self-stretch font-skillshikshya-1-desktop-body-highlight-standard font-[number:var(--skillshikshya-1-desktop-body-highlight-standard-font-weight)] text-[#c33241] text-[length:var(--skillshikshya-1-desktop-body-highlight-standard-font-size)] tracking-[var(--skillshikshya-1-desktop-body-highlight-standard-letter-spacing)] leading-[var(--skillshikshya-1-desktop-body-highlight-standard-line-height)] [font-style:var(--skillshikshya-1-desktop-body-highlight-standard-font-style)]">
                                  {course.description}
                                </p>
                              </div>

                              <div className="relative w-fit [font-family:'Nohemi-Bold',Helvetica] font-bold text-[#c33241] text-[150px] text-center tracking-[0] leading-[180.0px] whitespace-nowrap">
                                {course.count}
                              </div>
                            </div>

                            <Button
                              variant="link"
                              className="inline-flex items-center gap-2 absolute top-[111px] left-[515px] p-0 h-auto"
                            >
                              <span className="relative w-fit mt-[-1.00px] font-skillshikshya-1-desktop-body-highlight-accent font-[number:var(--skillshikshya-1-desktop-body-highlight-accent-font-weight)] text-[#f9ebec] text-[length:var(--skillshikshya-1-desktop-body-highlight-accent-font-size)] text-center tracking-[var(--skillshikshya-1-desktop-body-highlight-accent-letter-spacing)] leading-[var(--skillshikshya-1-desktop-body-highlight-accent-line-height)] [font-style:var(--skillshikshya-1-desktop-body-highlight-accent-font-style)]">
                                View all Courses
                              </span>
                              <ArrowRightIcon className="w-5 h-5 text-[#f9ebec]" />
                            </Button>

                            <div
                              className={`top-[290px] left-[200px] text-[#c33241] absolute [font-family:'Nohemi-Bold',Helvetica] font-bold text-[64px] text-center tracking-[0] leading-[76.8px] whitespace-nowrap hover:rotate-2`}
                            >
                              +
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
