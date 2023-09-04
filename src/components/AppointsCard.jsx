import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AppointsCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [selectedTime, setSelectedTime] = useState("");

  // Horario de la sucursal (de 8:00am a 18:00pm en intervalos de 30 minutos)
  const availableTimes = [
    "08:00 AM",
    "08:30 AM",
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
  ];

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8000/api/*DB*", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const patient = await response.json();
      console.log(patient);
      navigate("/patients");
    } catch (error) {
      console.log("ESTO ES UN ERROR POR SI FALLA La API", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto columns-3 p-4 bg-zinc-950/80 rounded-xl shadow-md">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-semibold text-orange-200">
          Programa una cita
        </h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            {...register("name", { required: true })}
            placeholder="Tu Nombre"
          />
          {errors.name && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="number"
            {...register("age")}
            placeholder="Tu Fecha de cumpleaños"
          />
          {errors.age && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            {...register("num_afi")}
            placeholder="Tu numero de teléfono"
          />
          {errors.num_afi && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <input
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            {...register("email")}
            placeholder="Tu Correo electrónico"
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
        </div>
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            {...register("branch")}
          >
            <option value="">Selecciona una sucursal</option>
            <option value="branch1">San Benito</option>
            <option value="branch2">Santa Elena</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            {...register("barber")}
          >
            <option value="">Selecciona un estilista</option>
            <option value="barber1">Barbero1</option>
            <option value="barber2">Barbero2</option>
            <option value="barber3">Barbero3</option>
            <option value="barber4">Barbero4</option>
            <option value="barber5">Barbero5</option>
            <option value="barber6">Barbero6</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            {...register("drink")}
          >
            <option value="">Selecciona tu Bebida</option>
            <option value="drink1">Agua</option>
            <option value="drink2">Soda</option>
            <option value="drink3">Café</option>
            <option value="drink4">Té</option>
            <option value="drink1">Cerveza</option>
            <option value="drink2">Whisky</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            {...register("music")}
          >
            <option value="">Selecciona el genero musical</option>
            <option value="drink1">Salsa</option>
            <option value="drink2">Reggae</option>
            <option value="drink3">Pop</option>
            <option value="drink4">Rock</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            <option value="">Selecciona una hora</option>
            {availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
  <div className="font-semibold text-yellow-100 mb-4">
    Selecciona los servicios:
  </div>
  <div className="grid grid-cols-2 gap-4">
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        {...register("service1")}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2 text-yellow-100">Corte con estilo</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        {...register("service2")}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2 text-yellow-100">Afeitado</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        {...register("service3")}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2 text-yellow-100">Corte para Niño</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        {...register("service3")}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2 text-yellow-100">Estilo de Barba</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        {...register("service3")}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2 text-yellow-100">Afeitado con Estilo</span>
    </label>
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        {...register("service3")}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
      <span className="ml-2 text-yellow-100">Tratamiento de Cabello</span>
    </label>
  </div>
</div>
        */
        <div className="text-center">
          <button
            className="bg-orange-200 hover:bg-blue-700 text-grey font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
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
