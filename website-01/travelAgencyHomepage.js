import React from 'react';
import { MapPin, Users, Calendar, Search, Menu } from 'lucide-react';

const DestinationCard = ({ title, description, location, groupSize, duration }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#F1FAEE] m-4">
    <img className="w-full h-48 object-cover" src="/api/placeholder/400/320" alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-[#1D3557]">{title}</div>
      <p className="text-[#457B9D] text-base">{description}</p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <div className="flex items-center text-[#1D3557] mb-2">
        <MapPin size={18} className="mr-2" />
        <span>{location}</span>
      </div>
      <div className="flex items-center text-[#1D3557] mb-2">
        <Users size={18} className="mr-2" />
        <span>{groupSize}</span>
      </div>
      <div className="flex items-center text-[#1D3557] mb-4">
        <Calendar size={18} className="mr-2" />
        <span>{duration}</span>
      </div>
      <button className="bg-[#E63946] hover:bg-[#457B9D] text-white font-bold py-2 px-4 rounded transition duration-300">
        Reservar ahora
      </button>
    </div>
  </div>
);

const TravelAgencyHomepage = () => {
  return (
    <div className="min-h-screen bg-[#F1FAEE]">
      {/* Navigation */}
      <nav className="bg-[#1D3557] p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-[#F1FAEE] text-xl font-bold">TuAgenciaDeViajes</span>
          <div className="flex items-center">
            <a href="#" className="text-[#F1FAEE] mx-2 hover:text-[#E63946]">Destinos</a>
            <a href="#" className="text-[#F1FAEE] mx-2 hover:text-[#E63946]">Sobre Nosotros</a>
            <a href="#" className="text-[#F1FAEE] mx-2 hover:text-[#E63946]">Contacto</a>
            <button className="text-[#F1FAEE] ml-4"><Menu /></button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-[#457B9D] text-[#F1FAEE] py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Descubre el Extremo Oriente</h1>
          <p className="text-xl mb-8">Experiencias auténticas para familias y pequeños grupos</p>
          <div className="flex justify-center">
            <input type="text" placeholder="Busca tu próxima aventura" className="p-2 rounded-l-lg w-64" />
            <button className="bg-[#E63946] p-2 rounded-r-lg"><Search /></button>
          </div>
        </div>
      </header>

      {/* Featured Destinations */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-[#1D3557] text-center mb-8">Destinos Destacados</h2>
          <div className="flex flex-wrap justify-center">
            <DestinationCard
              title="Aventura en Tokio"
              description="Explora la vibrante metrópolis de Tokio, desde sus templos ancestrales hasta sus bulliciosos distritos modernos."
              location="Tokio, Japón"
              groupSize="Grupo pequeño (máx. 8 personas)"
              duration="10 días / 9 noches"
            />
            <DestinationCard
              title="Seúl Cultural"
              description="Sumérgete en la fascinante mezcla de tradición y modernidad que ofrece la capital de Corea del Sur."
              location="Seúl, Corea del Sur"
              groupSize="Familia (4-6 personas)"
              duration="7 días / 6 noches"
            />
            <DestinationCard
              title="Playas de Tailandia"
              description="Relájate en las paradisíacas playas tailandesas y descubre la rica cultura del país de la sonrisa."
              location="Phuket, Tailandia"
              groupSize="Grupo pequeño (máx. 10 personas)"
              duration="12 días / 11 noches"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1D3557] text-[#F1FAEE] py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 TuAgenciaDeViajes. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default TravelAgencyHomepage;
