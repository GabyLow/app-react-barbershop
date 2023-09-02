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
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Imagen 1"
              style={imageStyle}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Imagen 2"
              style={imageStyle}
            />
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
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
