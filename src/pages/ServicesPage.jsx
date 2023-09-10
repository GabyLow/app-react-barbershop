
function ServiceList() {

  const servicesData = [
    {
      title: 'Corte de Cabello',
      duration: '60 minutos',
      description: 'Un corte moderno y a la moda.',
      price: '20',
    },
    {
      title: 'Afeitado',
      duration: '60 minutos',
      description: 'Afeitado profesional completo.',
      price: '15',
    },
    {
      title: 'Corte para Niño',
      duration: '60 minutos',
      description: 'Corte infantil a la moda.',
      price: '15',
    },
    {
      title: 'Estilo de Barba',
      duration: '60 minutos',
      description: 'Corte profesional con estilo.',
      price: '20',
    },
    {
      title: 'Afeitado con estilo',
      duration: '60 minutos',
      description: 'Estilo con cuchillas de precisión.',
      price: '20',
    },
    {
      title: 'Tratamiento de Cabello',
      duration: '60 minutos',
      description: 'Nutrición para cabello saludable.',
      price: '20',
    },
  
  ];

  return (
    <div className="bg-zinc-950/80 min-h-screen">
      <div className="flex justify-center items-center">
        <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 p-12">
          <div className="flex flex-wrap -mx-4">
            {servicesData.map((service, index) => (
              <div key={index} className="w-full sm:w-1/2 p-4">
                <div className="bg-zinc-800/70 p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl text-orange-200 font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-300">{service.description}</p>
                  <p className="text-gray-400 mt-2">{`Duración: ${service.duration}`}</p>
                  <p className="text-orange-200 text-xl font-bold">${service.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;



