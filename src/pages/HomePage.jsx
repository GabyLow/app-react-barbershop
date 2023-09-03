import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  const headerHeight = "100%";

  
  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    height: headerHeight,
    opacity: 0.9,
  };

  return (
    <>
      <header style={{ height: headerHeight }}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img
              src="/public/Banner 1.png"
              alt="Imagen 1"
              style={imageStyle}
            />
          </div>
          <div>
            <img
              src="/public/Banner 2.png"
              alt="Imagen 2"
              style={imageStyle}
            />
          </div>
          <div>
            <img
              src="/public/Banner 3.png"
              alt="Imagen 3"
              style={imageStyle}
            />
          </div>
        </Carousel>
      </header>
    </>
  );
}

export default HomePage;
