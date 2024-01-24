import ArticlesListView from "@/components/ArticlesListView/ArticlesListView";
import BottomNav from "@/components/BottomNav/BottomNav";
import PersonOverview from "@/components/PersonOverview/PersonOverview";
import ProjectsGallery from "@/components/ProjectsGallery/ProjectsGallery";
import StackSkills from "@/components/StackSkills/StackSkills";
import SubscripctionBox from "@/components/SubscriptionBox/SubscriptionBox";
import WorkExperience from "@/components/WorkExperienceBox/WorkExperience";
import WorkExperienceOverview from "@/components/WorkExperienceOverview/WorkExperienceOverview";

export default function Home() {
  //max-w-screen-2xl 
  return (
    <div className="pt-4">
      <PersonOverview />
      <WorkExperienceOverview />
      <ProjectsGallery />
      <ArticlesListView />
      <div className="mb-9 ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 sm:mr-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-72 xl:mr-72 2xl:ml-96 2xl:mr-96 lg:max-w-screen-md sm:mx-auto flex flex-col-reverse sm:flex-col-reverse md:flex-col-reverse lg:flex-row xl:flex-row 2xl:flex-row">
        <SubscripctionBox />
        <StackSkills />
      </div>


      <BottomNav />
    </div>
  )
}
