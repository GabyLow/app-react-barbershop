import PropTypes from 'prop-types';
const BranchCard = ({ imagenSrc, direccion, horarios, telefono, mapaSrc }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg mx-4 my-4">
      <img src={imagenSrc} alt="Imagen de la sucursal" className="w-300 h-300" />
      <div className="px-6 py-4">
        <h2 className="font-semibold text-orange-200  text-xl mb-2">Dirección:</h2>
        <p className="text-white">{direccion}</p>
        <h2 className="font-semibold text-orange-200  text-xl mt-4 mb-2">Horarios:</h2>
        <p className="text-white">{horarios}</p>
        <h2 className="font-semibold text-orange-200  text-xl mt-4 mb-2">Teléfono:</h2>
        <p className="text-white">{telefono}</p>
      </div>
      <div className="px-6 py-4">
        <iframe
          title="Mapa de la sucursal"
          src={mapaSrc}
          width="100%"
          height="300"
          style={{ border: '0' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
};

BranchCard.propTypes = {
    imagenSrc: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    horarios: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    mapaSrc: PropTypes.string.isRequired,
  };

export default BranchCard;
