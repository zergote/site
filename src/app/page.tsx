import ArticlesListView from "@/components/ArticlesListView/ArticlesListView";
import BottomNav from "@/components/BottomNav/BottomNav";
import PersonOverview from "@/components/PersonOverview/PersonOverview";
import ProjectsGallery from "@/components/ProjectsGallery/ProjectsGallery";
import StackSkills from "@/components/StackSkills/StackSkills";
import SubscripctionBox from "@/components/SubscriptionBox/SubscriptionBox";
import WorkExperience from "@/components/WorkExperienceBox/WorkExperience";

export default function Home() {
  //max-w-screen-2xl 
  return (
    <div className="min-w-96">
      <PersonOverview />
      <WorkExperience />
      <div className="containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md sm:mx-auto">
        <div className="flex flex-col sm:flex-row">
          <SubscripctionBox />
          <StackSkills />
        </div>
        <ProjectsGallery />
        <ArticlesListView />
        <ArticlesListView />
        <BottomNav />
      </div>
    </div>
  )
}
