const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">À propos</h4>
            <p>
              Notre entreprise est dédiée à fournir des services de qualité et à
              satisfaire nos clients.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liens utiles</h4>
            <ul>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>+1 (234) 567-890</p>
            <p>email@example.com</p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
