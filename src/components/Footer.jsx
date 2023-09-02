import footpic from '../assets/foot-img.png';

const Footer = () => {
  const logoWidth = "50px";

  const containerStyle = {
    display: "flex",
    alignItems: "center", 
    justifyContent: "center",
  };

  return (
    <footer className="bg-zinc-950/80 text-white py-4 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto text-center" style={containerStyle}>
        <img src={footpic} alt="Logo" style={{ width: logoWidth, marginRight: "10px" }}/>
        <p>&copy; 2023 WeGo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer; 
