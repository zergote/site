export default function WorkExperience() {
  return (
    <div className="bg-white min-w-96">
      <div className="containner ml-4 mr-4 pt-5 max-w-screen-sm md:max-w-screen-md sm:ml-6 md:ml-24 lg:ml-32 lg:mr-32 xl:ml-96 xl:mr-96 lg:max-w-screen-md sm:mx-auto">
        <div>
          <h2 className="font-ainoHeadline text-2xl text-[#0000f0] mb-4">Trabajo</h2>
        </div>
        <div className="flex text-start">

          <dl className="flex flex-col justify-between mb-5 text-[#323334]">
            <dt className="text-md font-aino"><span className="underline decoration-blue-800 hover:text-blue-800">NOVEDADES SULMIRA</span> Feb, 2020 | Nov, 2023</dt>
            <dt className="text-lg font-ainoBold">Ingeniero de Computación</dt>
            <dt className="text-md font-ainoHeadline mb-1">#javascript #react #nodejs #postgresql</dt>
            <dd className="text-md font-aino">
              <p className="mb-3">En mi posición lideré la implementación de un sistema de seguimiento y análisis de ventas. Este sistema permitía el monitoreo de más de 600 productos, proporcionando insights valiosos sobre su desempeño en el mercado.</p>
              <p className="mb-3">Entre mis logros, destacan la identificación de los productos más vendidos y aquellos con mayor margen de ganancia, la optimización del proceso de compra con proveedores al tener un control más preciso sobre los precios de costos, y la implementación de un eficiente sistema de gestión de inventario.</p>
              <p className="mb-3">Además, mediante el análisis de tendencias, pude predecir con precisión cuándo un producto requeriría reposición o cuándo uno estaba perdiendo relevancia en el mercado, lo que ayudó a la empresa a mantener un inventario actualizado y rentable.</p>
              <p className="mb-3">Este proyecto culminó en mejorar la eficiencia operativa y la rentabilidad de la empresa.</p>
            </dd>
          </dl>
        </div>

        <div className="flex text-start">

          <dl className="flex flex-col justify-between mb-5 text-[#323334]">
            <dt className="text-md font-aino"><a href="https://www.digitel.com.ve/" className="underline decoration-blue-800 hover:text-blue-800">CORPORACION DIGITEL</a> Abr, 2018 | Dic, 2019</dt>
            <dt className="text-lg font-ainoBold">Ingeniero de Computación</dt>
            <dt className="text-md font-ainoHeadline mb-1">#javascript #react #redux #nodejs #expressjs #postgresql #nginx #Highcharts #websockets</dt>
            <dd className="text-md font-aino">
              <p className="mb-3">Desarrollé una herramienta web (React.js, Javascript, Redux, Redux-Saga, Websockets, Nginx) para medir el comportamiento de la red de telefonía (2G, 3G y 4G) de la Corporación Digitel.</p>
              <p>Implementé:</p>
              <ul className="list-[square] list-inside">

                <li>Un sistema de notificación para detectar las fallas en las estaciones de radio. (Socket.io, Microservicio)</li>
                <li>Procesamiento de los datos para obtener los KPIs y exponerlos al cliente mediante una API RESTful. (Node.js, Express.js, Oracle DB, PostgreSQL)</li>
                <li>Gráficas para visualización de los datos que permitieran seleccionar la granularidad y apilamiento de las estadísticas (Highcharts). Además de la preparación de servidores para el aprovisionamiento del sistema. (Linux, Docker, IPtables)</li>
              </ul>
              <p className="mt-3 mb-3">Esta herramienta ayuda a las operaciones de estudio, optimización y detección de fallas de la red.</p>
            </dd>
          </dl>
        </div>

        <div className="flex text-start">

          <dl className="flex flex-col justify-between mb-5 text-[#323334]">
            <dt className="text-md font-aino"><a href="https://twitter.com/PrensaSenifa" className="underline decoration-blue-800 hover:text-blue-800">SENIFA</a> 2021 Mar, 2013| Oct, 2016</dt>
            <dt className="text-lg font-ainoBold">Especialista en Infraestructura IT</dt>
            <dt className="text-md font-ainoHeadline mb-1">#redes #sysadmin #seguridad</dt>
            <dd className="text-md font-aino">
              <p className="mb-3">Mi responsabilidad clave fue el mantenimiento de servidores, la configuración de redes y la gestión de dispositivos remotos, asegurando el funcionamiento óptimo de los sistemas informáticos y la total disponibilidad de estos para soportar las operaciones vitales del negocio.</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  )
}