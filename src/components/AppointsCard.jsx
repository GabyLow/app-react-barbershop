import { useForm } from "react-hook-form";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointsCard = () => {
  // Inicialización del formulario y manejo de errores
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Navegación de la página
  const navigate = useNavigate();

  // Estado para almacenar la hora seleccionada
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);


  // Horario de la sucursal (de 8:00am a 18:00pm en intervalos de 60 minutos)
  const availableTimes = [
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  // Horario disponible del barbero (deberías obtener esto de tu API)
  const barberAvailability = [
    { date: "2023-09-10", times: ["09:00 AM", "10:00 AM", "11:00 AM"] },
    { date: "2023-09-11", times: ["08:00 AM", "12:00 PM", "01:00 PM"] },
    // Agrega más fechas disponibles según tus necesidades
  ];

  // Maneja el cambio en la selección de hora
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // Maneja el cambio en la selección de fecha
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Maneja el envío del formulario
  const onSubmit = async (data) => {
    try {
      // Verifica si la fecha y hora seleccionadas están disponibles para el barbero
      const selectedDateTime = selectedDate
        ? selectedDate.toISOString().split("T")[0] + " " + selectedTime
        : null;

      const isAvailable = barberAvailability.some((availability) => {
        return (
          availability.date === selectedDateTime.split(" ")[0] &&
          availability.times.includes(selectedDateTime.split(" ")[1])
        );
      });

      if (!isAvailable) {
        console.log("La fecha y hora seleccionadas no están disponibles.");
        return;
      }

      // Hace una solicitud a la API con los datos del formulario
      const response = await fetch("http://localhost:8000/api/*DB*", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Obtener la respuesta de la API (podemos modificar esto según necesidades)
      const db_name = await response.json();
      console.log(db_name);

      // Navegar a una página de confirmación o a donde desee
      navigate("/db_name");
    } catch (error) {
      console.log("THIS IS AN ERROR IF API DOES NOT WORK", error);
    }
  };

  useEffect(() => {
    // Podemos cargar la disponibilidad del barbero desde la API aquí
    // Se Actualiza el estado "barberAvailability" con los datos recibidos
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-zinc-950/80 rounded-xl shadow-md">
    <div className="text-center mb-4">
      <h2 className="text-2xl font-semibold text-orange-200">
        Programa una cita
      </h2>
    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            {...register("name", { required: true })}
            placeholder="Tu Nombre"
          />
          {errors.name && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            {...register("email", { required: true })}
            placeholder="Tu Correo electrónico"
          />
          {errors.email && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-2">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="date"
              {...register("b_date", { required: true })}
              title="Por favor, ingresa tu fecha de cumpleaños"
            />
            {errors.b_date && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="tel"
              {...register("num_tel", { required: true })}
              placeholder="Tu número de teléfono"
            />
            {errors.num_tel && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("branch", { required: true })}
            >
              <option value="">Selecciona una sucursal</option>
              <option value="branch1">San Benito</option>
              <option value="branch2">Santa Elena</option>
            </select>
            {errors.branch && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("barber", { required: true })}
            >
              <option value="">Selecciona un estilista</option>
              <option value="barber1">El Rockero</option>
              <option value="barber2">El Pirata</option>
              <option value="barber3">La Sirena</option>
              <option value="barber4">El Mago</option>
              <option value="barber5">El Jefe</option>
              <option value="barber6">El Artista</option>
            </select>
            {errors.barber && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("drink", { required: true })}
            >
              <option value="">Selecciona tu Bebida</option>
              <option value="drink1">Agua</option>
              <option value="drink2">Soda</option>
              <option value="drink3">Café</option>
              <option value="drink4">Té</option>
              <option value="drink1">Cerveza</option>
              <option value="drink2">Whisky</option>
            </select>
            {errors.drink && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("music", { required: true })}
            >
              <option value="">Selecciona el género musical</option>
              <option value="music1">Salsa</option>
              <option value="music2">Reggae</option>
              <option value="music3">Pop</option>
              <option value="music4">Rock</option>
              <option value="music5">Reggaetón</option>
              <option value="music6">Ambiental</option>
            </select>
            {errors.music && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-yellow-100 font-semibold mb-2">
            Selecciona una fecha:
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()} // Establece la fecha mínima para seleccionar
            dateFormat="yyyy-MM-dd"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-sm"
            calendarClassName="bg-white text-gray-800 rounded-lg shadow-md" // Personaliza el calendario
            wrapperClassName="w-full" // Personaliza el contenedor del calendario
            // Agrega más personalización según tus necesidades
          />
          {errors.selectedDate && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-yellow-100 font-semibold mb-2">
            Selecciona una hora:
          </label>
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={selectedTime}
            onChange={handleTimeChange}
            {...register("selectedTime", { required: true })}
          >
            <option value="">Selecciona una hora</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.selectedTime && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-yellow-100 font-semibold mb-2">
          Selecciona los servicios:
        </label>
        <div className="grid grid-cols-2 gap-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("services", { required: true })}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Corte con estilo</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("services")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Afeitado</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("services")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Corte para Niño</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("services")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Estilo de Barba</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("services")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Afeitado con Estilo</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("services")}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Tratamiento de Cabello</span>
          </label>
        </div>
        {errors.services && (
          <span className="text-red-500">Selecciona al menos un servicio</span>
        )}
      </div>

      <div className="text-center">
        <button
          className="w-full sm:w-auto bg-orange-200 hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
          type="submit"
        >
          Agenda Tu Cita
        </button>
      </div>
    </form>
  </div>
);
};

export default AppointsCard;
