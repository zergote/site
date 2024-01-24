export default function WorkExperienceOverview() {
  return (
    <div className="containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-24 lg:ml-32 lg:mr-32 xl:ml-96 xl:mr-96 lg:max-w-screen-md sm:mx-auto">
      <div>
        <h2 className="font-ainoHeadline text-2xl text-[#0000f0] mb-4">Trabajo</h2>
      </div>

      <div className="flex text-start">
        <dl className="flex flex-col justify-between mb-5 text-[#323334]">
          <dt className="text-base font-aino"><span className="underline decoration-blue-800 hover:text-blue-800">NOVEDADES SULMIRA</span> Feb, 2020 | Nov, 2023</dt>
          <dt className="text-lg font-ainoBold">Ingeniero de Computación</dt>
          <dt className="text-base font-ainoHeadline mb-1">#javascript #react #nodejs #postgresql</dt>
          <dd className="text-base font-aino">
            <p className="mb-3">En mi posición lideré la implementación de un sistema de seguimiento y análisis de ventas. Este sistema permitía el monitoreo de más de 600 productos, proporcionando insights valiosos sobre su desempeño en el mercado. <a href="/about#novedadessulmira" className="underline">Más detalles.</a></p>
          </dd>
        </dl>
      </div>

      <div className="flex text-start">

        <dl className="flex flex-col justify-between mb-5 text-[#323334]">
          <dt className="text-base font-aino"><a href="https://www.digitel.com.ve/" className="underline decoration-blue-800 hover:text-blue-800">CORPORACION DIGITEL</a> Abr, 2018 | Dic, 2019</dt>
          <dt className="text-lg font-ainoBold">Ingeniero de Computación</dt>
          <dt className="text-base font-ainoHeadline mb-1">#javascript #react #redux #nodejs #expressjs #postgresql #nginx #highcharts #websockets</dt>
          <dd className="text-base font-aino">
            <p className="mb-3">Desarrollé una herramienta web para medir el comportamiento de la red de telefonía (2G, 3G y 4G) de la Corporación Digitel. <a href="/about#digitel" className="underline">Más detalles.</a></p>
          </dd>
        </dl>
      </div>

      <div className="flex text-start">

        <dl className="flex flex-col justify-between mb-5 text-[#323334]">
          <dt className="text-base font-aino"><a href="https://twitter.com/PrensaSenifa" className="underline decoration-blue-800 hover:text-blue-800">SENIFA</a> 2021 Mar, 2013| Oct, 2016</dt>
          <dt className="text-lg font-ainoBold">Especialista en Infraestructura IT</dt>
          <dt className="text-base font-ainoHeadline mb-1">#redes #sysadmin #seguridad</dt>
          <dd className="text-base font-aino">
            <p className="mb-3">Mi responsabilidad clave fue el mantenimiento de servidores, la configuración de redes y la gestión de dispositivos remotos.  <a href="/about#senifa" className="underline">Más detalles.</a></p>
          </dd>
        </dl>
      </div>
    </div>
  )
}