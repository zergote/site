export default function EducationBox() {
  return (
    <div className="ml-4 mr-4 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-72 xl:mr-72 2xl:ml-96 2xl:mr-96 lg:max-w-screen-md sm:mx-auto print:pt-2">
      <div>
        <h2 className="font-ainoHeadline text-2xl text-[#0000f0] mb-4 print:text-black print:mb-0 print:text-xl" id="resume">Educación</h2>
      </div>
      <div className="flex text-start">
        <dl className="flex flex-col justify-between mb-5 text-[#323334] print:mb-2">
          <dt className="text-base print:text-sm"><span className="font-ainoBold">Autodidacta 40+ certificados</span> | <span className="text-sm bg-[#bae6e8] p-0.5 print:text-xs print:bg-white">Linkedin Learning y otras plataformas | Online | 2010 - Presente</span></dt>
          <dt className="text-base print:text-sm"><span className="font-ainoBold">Ingeniero en Computación</span> | <span className="text-sm bg-[#ffc491] p-0.5 print:text-xs print:bg-white"><a href="https://udo.education/" className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0]" target="_blank" rel="noopener noreferrer">Universidad de Oriente</a> | Barcelona, Venezuela | 2019</span></dt>
        </dl>
      </div>
    </div>
  )
}
