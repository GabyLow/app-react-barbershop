
import BranchCard from '../components/BranchCard';

function BranchPage() {
  return (
    <div className="bg-zinc-950/80 min-h-screen flex justify-center items-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
          <BranchCard
            imagenSrc="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            direccion="Boulevard del Hipodromo #1204, Col. San Benito, San Salvador, El salvador."
            horarios="Lunes a Sabado de 08:00 a.m. a 06:00 p.m., sin cerrar al mediodía."
            telefono="(503) 2522-9999"
            mapaSrc="URL_MAPA_SUCURSAL_1"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
          <BranchCard
            imagenSrc="https://media.quincemil.com/imagenes/2022/05/28012746/Peluqueria_M%C3%A1gica-8-1706x960.jpg"
            direccion="Boulevard Santa Elena #2521, Urb. Santa Elena, Antiguo Cuscatlan, La Libertad, El Salvador."
            horarios="Lunes a Sabado de 08:00 a.m. a 06:00 p.m., sin cerrar al mediodía."
            telefono="(503) 2522-5055"
            mapaSrc="URL_MAPA_SUCURSAL_2"
          />
        </div>
      </div>
    </div>
  );
}

export default BranchPage;






