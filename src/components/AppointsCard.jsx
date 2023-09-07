import { useForm } from "react-hook-form";
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const apiUrl = "http://localhost:8000/api/barberdb";

const AppointsCard = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 
  const navigate = useNavigate();

  
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);


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


  const barberAvailability = [
    { date: "2023-09-10", times: ["09:00 AM", "10:00 AM", "11:00 AM"] },
    { date: "2023-09-11", times: ["08:00 AM", "12:00 PM", "01:00 PM"] },
 
  ];


  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const onSubmit = async (data) => {
    try {
     
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


      const response = await fetch("http://localhost:8000/api/barberdb", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

     
      const barberdb = await response.json();
      console.log(barberdb);

      navigate("/barberdb");
    } catch (error) {
      console.log("THIS IS AN ERROR IF API DOES NOT WORK", error);
    }
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setBarberAvailability(data);
      })
      .catch((error) => {
        console.error("Error al obtener la disponibilidad del barbero:", error);
      });
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
            {...register("client_name", { required: true })}
            placeholder="Tu Nombre"
          />
          {errors.client_name && (
            <span className="text-red-500">Este campo es obligatorio</span>
          )}
        </div>

        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            {...register("client_email", { required: true })}
            placeholder="Tu Correo electrónico"
          />
          {errors.client_email && (
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
              {...register("client_birthday", { required: true })}
              title="Por favor, ingresa tu fecha de cumpleaños"
            />
            {errors.client_birthday && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="tel"
              {...register("client_phone", { required: true })}
              placeholder="Tu número de teléfono"
            />
            {errors.client_phone && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("branch_id", { required: true })}
            >
              <option value="">Selecciona una sucursal</option>
              <option value="1">San Benito</option>
              <option value="2">Santa Elena</option>
            </select>
            {errors.branch_id && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("barber_id", { required: true })}
            >
              <option value="">Selecciona un estilista</option>
              <option value="1">El Rockero</option>
              <option value="2">El Pirata</option>
              <option value="3">La Sirena</option>
              <option value="4">El Mago</option>
              <option value="5">El Jefe</option>
              <option value="6">El Artista</option>
            </select>
            {errors.barber_id && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("drink_id", { required: true })}
            >
              <option value="">Selecciona tu Bebida</option>
              <option value="1">Agua</option>
              <option value="2">Soda</option>
              <option value="3">Café</option>
              <option value="4">Té</option>
              <option value="5">Cerveza</option>
              <option value="6">Whisky</option>
            </select>
            {errors.drink_id && (
              <span className="text-red-500">Este campo es obligatorio</span>
            )}
          </div>

          <div className="mb-2">
            <select
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              {...register("music_id", { required: true })}
            >
              <option value="">Selecciona el género musical</option>
              <option value="1">Salsa</option>
              <option value="2">Reggae</option>
              <option value="3">Pop</option>
              <option value="4">Rock</option>
              <option value="5">Reggaetón</option>
              <option value="6">Ambiental</option>
            </select>
            {errors.music_id && (
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
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 shadow-sm"
            calendarClassName="bg-white text-gray-800 rounded-lg shadow-md"
            wrapperClassName="w-full"
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
              {...register("service_id", { required: true })} value="1"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Corte con estilo</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("service_id")} value="4"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Afeitado</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("service_id")} value="2"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Corte para Niño</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("service_id")} value="5"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Estilo de Barba</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("service_id")} value="3"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Afeitado con Estilo</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("service_id")} value="6"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-yellow-100">Tratamiento de Cabello</span>
          </label>
        </div>
        {errors.service_id && (
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
