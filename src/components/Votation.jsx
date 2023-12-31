import React, { useState } from 'react';

export default function Votar() {

  
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageClick = (index) => {
      // Si la imagen ya está seleccionada, deselecciónala
      if (selectedImage === index) {
        setSelectedImage(null);
      } else {
        // Si no está seleccionada, selecciónala
        setSelectedImage(index);
      }
    };
  
  return (
    <>

    <div className="container mx-auto p-4 lg:h-screen static items-center justify-center">
      <p className='mb-8'>Seleccione el candidato que desee votar, luego haga click en el botón "Emitir Voto".</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-40 space-x-4 ">
        {/* La libertad Avanza */}
        <div
          className={`max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer ${
            selectedImage === 0 ? 'border-4 border-blue-800' : ''
          }`}
          onClick={() => handleImageClick(0)}
        >
          <img
            src="https://www.infobae.com/new-resizer/a6nyxy5sjWEiH6jT-ZbOxk4hCoY=/992x1488/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MWLCHTTJERC4LOSZGNHXXWZSXE.jpg"
            alt="Milei"
            className="w-full h-auto object-cover rounded-lg   transition duration-300 ease-in-out hover:scale-105 hover:border-4 border-blue-700 "
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
            <h1 className="text-2xl font-semibold text-center">JAVIER MILEI</h1>
            <p className="mt-2 text-center">VICTORIA VILLARUEL</p>
            <p className="mt-2  text-sm text-center">La Libertad Avanza</p>
          </div>
        </div>
        {/* Unión por la Patria */}
        <div
          className={`max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer ${
            selectedImage === 1 ? 'border-4 border-blue-800' : ''
          }`}
          onClick={() => handleImageClick(1)}
        >
          <img
            src="https://barilochedigital.com/wp-content/uploads/2023/10/Massa-Sergio.jpg"
            alt="Massa"
            className="w-full h-full object-cover rounded-lg  transition duration-300 ease-in-out hover:scale-105 hover:border-4 border-blue-700"
          />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
            <h1 className="text-2xl font-semibold text-center">SERGIO MASSA</h1>
            <p className="mt-2 text-center">AGUSTIN ROSSI</p>
            <p className="mt-2  text-sm text-center">Unión Por La Patria</p>
          </div>
        </div>
      </div>
      <div className="absolute top-40 right-4 ">
      <button type="button" className="px-6 py-3.5 text-base font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Emitir Voto</button>
        </div>
    </div>
    
    </>
  );
}
