import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const apiUrl = "http://localhost:8000/api/barberdb";

const AppointmentsForm = () => {
  const [clientData, setClientData] = useState({
    client_name: "",
    client_phone: "",
    client_birthday: "",
    client_email: "",
  });

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const [confirmation, setConfirmation] = useState("");

  const [branchesOptions, setBranchesOptions] = useState([]);
  const [barbersOptions, setBarbersOptions] = useState([]);
  const [servicesOptions, setServicesOptions] = useState([]);
  const [drinksOptions, setDrinksOptions] = useState([]);
  const [musicOptions, setMusicOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        // Obtiene opciones de sucursales desde la API de Laravel
        const branchesResponse = await fetch(`http://localhost:8000/api/branches`);
        if (branchesResponse.ok) {
          const branchesData = await branchesResponse.json();
          const formattedBranches = branchesData.map((branch) => ({
            value: branch.id,
            label: branch.name,
          }));
          setBranchesOptions(formattedBranches);
        }

        // Obtiene opciones de barberos desde la API de Laravel
        const barbersResponse = await fetch(`http://localhost:8000/api/barbers`);
        if (barbersResponse.ok) {
          const barbersData = await barbersResponse.json();
          const formattedBarbers = barbersData.map((barber) => ({
            value: barber.id,
            label: barber.name,
          }));
          setBarbersOptions(formattedBarbers);
        }

        // Obtiene opciones de servicios desde la API de Laravel
        const servicesResponse = await fetch(`http://localhost:8000/api/services`);
        if (servicesResponse.ok) {
          const servicesData = await servicesResponse.json();
          const formattedServices = servicesData.map((service) => ({
            value: service.id,
            label: service.name,
          }));
          setServicesOptions(formattedServices);
        }

        // Obtiene opciones de bebidas desde la API de Laravel
        const drinksResponse = await fetch(`http://localhost:8000/api/drinks`);
        if (drinksResponse.ok) {
          const drinksData = await drinksResponse.json();
          const formattedDrinks = drinksData.map((drink) => ({
            value: drink.id,
            label: drink.name,
          }));
          setDrinksOptions(formattedDrinks);
        }

        // Obtiene opciones de género musical desde la API de Laravel
        const musicResponse = await fetch(`http://localhost:8000/api/music`);
        if (musicResponse.ok) {
          const musicData = await musicResponse.json();
          const formattedMusic = musicData.map((genre) => ({
            value: genre.id,
            label: genre.name,
          }));
          setMusicOptions(formattedMusic);
        }
      } catch (error) {
        console.error("Error al obtener opciones:", error);
      }
    };

    fetchOptions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        ...clientData,
        branch_id: selectedBranch.value,
        barber_id: selectedBarber.value,
        service_id: selectedService.value,
        drink_id: selectedDrink.value,
        music_id: selectedMusic.value,
        selectedDateTime: selectedDate
          ? selectedDate.toISOString().split("T")[0] + " " + selectedTime
          : null,
      };

      const response = await fetch(`http://localhost:8000/api/schedule/create-appointment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      setConfirmation(data.message);
    } catch (error) {
      console.error("Error al crear la cita:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-zinc-950/80 rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold text-orange-200 text-center mb-4">
        Programa una cita
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Datos del cliente */}
        <input
          type="text"
          placeholder="Nombre"
          value={clientData.client_name}
          onChange={(e) =>
            setClientData({ ...clientData, client_name: e.target.value })
          }
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="text"
          placeholder="Teléfono"
          value={clientData.client_phone}
          onChange={(e) =>
            setClientData({ ...clientData, client_phone: e.target.value })
          }
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="date"
          placeholder="Fecha de Cumpleaños"
          value={clientData.client_birthday}
          onChange={(e) =>
            setClientData({ ...clientData, client_birthday: e.target.value })
          }
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={clientData.client_email}
          onChange={(e) =>
            setClientData({ ...clientData, client_email: e.target.value })
          }
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />

        {/* Selección de opciones */}
        <Select
          options={branchesOptions}
          onChange={(selectedOption) => setSelectedBranch(selectedOption)}
          placeholder="Selecciona una sucursal"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <Select
          options={barbersOptions}
          onChange={(selectedOption) => setSelectedBarber(selectedOption)}
          placeholder="Selecciona un barbero"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <Select
          options={servicesOptions}
          onChange={(selectedOption) => setSelectedService(selectedOption)}
          placeholder="Selecciona un servicio"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <Select
          options={drinksOptions}
          onChange={(selectedOption) => setSelectedDrink(selectedOption)}
          placeholder="Selecciona una bebida"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <Select
          options={musicOptions}
          onChange={(selectedOption) => setSelectedMusic(selectedOption)}
          placeholder="Selecciona un género musical"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />

        {/* Fecha y hora */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          minDate={new Date()}
          dateFormat="yyyy-MM-dd"
          placeholderText="Selecciona una fecha"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-sm"
          calendarClassName="bg-white text-gray-800 rounded-lg shadow-md"
          wrapperClassName="w-full"
        />
        <input
          type="text"
          placeholder="Selecciona una hora"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />

        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-orange-200 hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          >
            Agenda Tu Cita
          </button>
        </div>
      </form>

      {/* Mostrar confirmación */}
      {confirmation && (
        <div className="text-center mt-4 text-yellow-100">{confirmation}</div>
      )}
    </div>
  );
};

export default AppointmentsForm;





