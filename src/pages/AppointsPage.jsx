
import AppointsCard from '../components/AppointsCard';

const AppointsPage = () => {
  return (
    <div>
      {/* Otros elementos de la página */}
      <AppointsCard />
      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-6xl font-bold text-orange-200 font-mate-sc mb-4">Nuestros Talentosos Barberos</h2>
          <div className="mx-auto max-w-2xl">
            <img
              src="/team-barber.png" // Ruta de la imagen grupal de los barberos
              alt="Barberos"
              className="w-full rounded-lg shadow-md hover:shadow-xl transition"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointsPage;

