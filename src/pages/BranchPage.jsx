
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
            mapaSrc="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1370.5260112017909!2d-89.2427610597222!3d13.692208318648888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ssv!4v1693698166736!5m2!1ses!2ssv"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
          <BranchCard
            imagenSrc="/public/Barber-branch-2.png"
            direccion="Boulevard Santa Elena Local #12, Plaza Madero, Antiguo Cuscatlan, La Libertad, El Salvador."
            horarios="Lunes a Sabado de 08:00 a.m. a 06:00 p.m., sin cerrar al mediodía."
            telefono="(503) 2522-5055"
            mapaSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.7966678628754!2d-89.2584524236828!3d13.670124499176863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632e2ff96c6d57%3A0x67c415e6189cebbd!2sPlaza%20Madero!5e0!3m2!1ses!2ssv!4v1693698296817!5m2!1ses!2ssv" 
          />
        </div>
      </div>
    </div>
  );
}

export default BranchPage;






