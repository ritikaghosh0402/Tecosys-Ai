
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import { ThreeDCard } from "../common/ThreeDCard";
import { FeaturesData } from '../../data/Constant'

export function Features() {
  return (
    <div className="flex flex-col overflow-hidden w-full">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl font-semibold text-richblack-25  mx-auto">
            <p className="w-8/12 mx-auto">
            Discover how our advanced AI technologies are revolutionizing communication and efficiency.
            </p>
              <span className="text-4xl md:text-[4rem] font-bold mt-1 leading-none">
              Unparalleled Features 
              {/* for Enhanced Interaction */}
              </span>
            </h1>
          </>
        }
        className="w-full bg-white border-yellow-200"
      >
        <div className="bg-transparent justify-center grid grid-cols-3 ">
          {FeaturesData.map((feature, index) =>
            <ThreeDCard key={index} title={feature.title} description={feature.description} />
          )}
        </div>
      </ContainerScroll>
    </div>
  );
}

// export const users = [
//   {
//     name: "Manu Arora",
//     designation: "Founder, Algochurn",
//     image: "https://picsum.photos/id/10/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Sarah Singh",
//     designation: "Founder, Sarah's Kitchen",
//     image: "https://picsum.photos/id/11/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "John Doe",
//     designation: "Software Engineer, Tech Corp",
//     image: "https://picsum.photos/id/12/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Jane Smith",
//     designation: "Product Manager, Innovate Inc",
//     image: "https://picsum.photos/id/13/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Robert Johnson",
//     designation: "Data Scientist, DataWorks",
//     image: "https://picsum.photos/id/14/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Emily Davis",
//     designation: "UX Designer, DesignHub",
//     image: "https://picsum.photos/id/15/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Michael Miller",
//     designation: "CTO, FutureTech",
//     image: "https://picsum.photos/id/16/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Sarah Brown",
//     designation: "CEO, StartUp",
//     image: "https://picsum.photos/id/17/300/300",
//   },
//   {
//     name: "James Wilson",
//     designation: "DevOps Engineer, CloudNet",
//     image: "https://picsum.photos/id/18/300/300",
//     badge: "Something",
//   },
//   {
//     name: "Patricia Moore",
//     designation: "Marketing Manager, MarketGrowth",
//     image: "https://picsum.photos/id/19/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Richard Taylor",
//     designation: "Frontend Developer, WebSolutions",
//     image: "https://picsum.photos/id/20/300/300",
//   },
//   {
//     name: "Linda Anderson",
//     designation: "Backend Developer, ServerSecure",
//     image: "https://picsum.photos/id/21/300/300",
//   },
//   {
//     name: "William Thomas",
//     designation: "Full Stack Developer, FullStack",
//     image: "https://picsum.photos/id/22/300/300",
//     badge: "Badger",
//   },
//   {
//     name: "Elizabeth Jackson",
//     designation: "Project Manager, ProManage",
//     image: "https://picsum.photos/id/23/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "David White",
//     designation: "Database Administrator, DataSafe",
//     image: "https://picsum.photos/id/24/300/300",
//     badge: "Advocate",
//   },
//   {
//     name: "Jennifer Harris",
//     designation: "Network Engineer, NetConnect",
//     image: "https://picsum.photos/id/25/300/300",
//   },
//   {
//     name: "Charles Clark",
//     designation: "Security Analyst, SecureIT",
//     image: "https://picsum.photos/id/26/300/300",
//   },
//   {
//     name: "Susan Lewis",
//     designation: "Systems Analyst, SysAnalyse",
//     image: "https://picsum.photos/id/27/300/300",
//   },
//   {
//     name: "Joseph Young",
//     designation: "Mobile Developer, AppDev",
//     image: "https://picsum.photos/id/28/300/300",
//     badge: "Mentor",
//   },
//   {
//     name: "Margaret Hall",
//     designation: "Quality Assurance, BugFree",
//     image: "https://picsum.photos/id/29/300/300",
//     badge: "Developer",
//   },
// ];

