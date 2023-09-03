
import BranchCard from '../components/BranchCard';

function BranchPage() {
  return (
    <div className="bg-zinc-950/80 min-h-screen flex justify-center items-center">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
          <BranchCard
            imagenSrc="/public/Barber-branch-1.png"
            direccion="Boulevard del Hipodromo #1204, Col. San Benito, San Salvador, El salvador."
            horarios="Lunes a Sabado de 08:00 a.m. a 06:00 p.m., sin cerrar al mediodía."
            telefono="(503) 2522-9999"
           
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
          <BranchCard
            imagenSrc="/public/Barber-branch-2.png"
            direccion="Boulevard Santa Elena Local #12, Plaza Madero, Antiguo Cuscatlan, La Libertad, El Salvador."
            horarios="Lunes a Sabado de 08:00 a.m. a 06:00 p.m., sin cerrar al mediodía."
            telefono="(503) 2522-5055"
          
          />
        </div>
      </div>
    </div>
  );
}

export default BranchPage;






