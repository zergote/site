export default function WorkExperienceOverview() {
  return (
    <div className="containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 xl:ml-72 xl:mr-72 2xl:ml-96 2xl:mr-96 lg:max-w-screen-md sm:mx-auto print:pt-2">
      <div>
        <h2 className="font-ainoHeadline text-2xl text-[#0000f0] mb-4 print:text-black print:mb-0 print:text-xl" id="resume">Trabajo</h2>
      </div>

      <div className="flex text-start">
        <dl className="flex flex-col justify-between mb-5 text-[#323334] print:mb-0">
          <dt className="text-base font-aino print:text-xs"><span className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0]">NOVEDADES SULMIRA</span> Ago, 2021 | Nov, 2023</dt>
          <dt className="text-lg font-ainoBold print:text-sm">Ingeniero de Computación</dt>
          <dt className="text-base font-ainoHeadline mb-1 print:text-xs">#javascript #react #nodejs #postgresql</dt>
          <dd className="text-base font-aino print:text-xs">
            <p className="mb-3">En mi posición lideré la implementación de un sistema de seguimiento y análisis de ventas. Este sistema permitía el monitoreo de más de 600 productos, proporcionando insights valiosos sobre su desempeño en el mercado. <a href="/about#novedadessulmira" className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0] print:hidden">Más detalles.</a></p>
          </dd>
        </dl>
      </div>

      <div className="flex text-start">

        <dl className="flex flex-col justify-between mb-5 text-[#323334] print:mb-0">
          <dt className="text-base font-aino print:text-xs"><a href="https://www.digitel.com.ve/" className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0]" target="_blank" rel="noopener noreferrer">CORPORACION DIGITEL</a> Abr, 2018 | Dic, 2019</dt>
          <dt className="text-lg font-ainoBold print:text-sm">Ingeniero de Computación</dt>
          <dt className="text-base font-ainoHeadline mb-1 print:text-xs">#javascript #react #redux #nodejs #expressjs #postgresql #nginx #highcharts #websockets</dt>
          <dd className="text-base font-aino print:text-xs">
            <p className="mb-3">Desarrollé una herramienta web para medir el comportamiento de la red de telefonía (2G, 3G y 4G) de la Corporación Digitel. <a href="/about#digitel" className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0] print:hidden">Más detalles.</a></p>
          </dd>
        </dl>
      </div>

      <div className="flex text-start">

        <dl className="flex flex-col justify-between mb-5 text-[#323334] print:mb-0">
          <dt className="text-base font-aino print:text-xs"><a href="https://twitter.com/PrensaSenifa" className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0]" target="_blank" rel="noopener noreferrer">SENIFA</a> Feb, 2013| Ago, 2016</dt>
          <dt className="text-lg font-ainoBold print:text-sm">Especialista en Infraestructura IT</dt>
          <dt className="text-base font-ainoHeadline mb-1 print:text-xs">#redes #sysadmin #seguridad</dt>
          <dd className="text-base font-aino print:text-xs">
            <p className="">Mi responsabilidad clave fue el mantenimiento de servidores, la configuración de redes y la gestión de dispositivos remotos.  <a href="/about#senifa" className="underline text-[#323334] decoration-[#323334] hover:decoration-[#0000f0] hover:text-[#0000f0]] print:hidden">Más detalles.</a></p>
          </dd>
        </dl>
      </div>
    </div>
  )
}