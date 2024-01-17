import PersonOverview from "@/components/PersonOverview/PersonOverview";

export default function Home() {
  //max-w-screen-2xl 
  return (
    <div className="min-w-96">
      <div className="containner ml-4 mr-4 py-3 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-md sm:mx-auto">
        <PersonOverview />
      </div>
    </div>
  )
}
