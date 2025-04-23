import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Section du contenu principal */}
      <div className="flex justify-center m-5 flex-grow">
        <div className="lg:w-4/5 sm:w-full grid grid-cols-1 lg:grid-cols-2 gap-8 m-5">
          {/* Section coordonnées */}
          <div className="flex flex-col justify-center p-8 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#EF7970] mb-4">
              Contactez-moi
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Vous pouvez me contacter en remplissant le formulaire ou en
              utilisant les informations ci-dessous.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-[#5F66AC]  flex justify-center items-center">
                  <PhoneIcon className="w-5 m-1" /> +33 6 61 93 58 98
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#5F66AC]   flex justify-center items-center">
                  <PhoneIcon className="w-5 m-1" />
                  +351 xx xx xx xx
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#5F66AC]   flex justify-center items-center">
                  <EnvelopeIcon className="w-5 m-1 " />{" "}
                  adeline.porto.immo@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="flex flex-col justify-center p-8 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#EF7970] mb-4">
              Envoyez un message
            </h2>
            <form className="space-y-6">
              {/* Prénom, Nom et Téléphone sur la même ligne */}
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EF7970] focus:border-[#EF7970]"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EF7970] focus:border-[#EF7970]"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EF7970] focus:border-[#EF7970]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EF7970] focus:border-[#EF7970]"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#EF7970] focus:border-[#EF7970]"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#EF7970] text-white font-semibold rounded-lg shadow-md hover:bg-[#d16b62] focus:outline-none focus:ring-2 focus:ring-[#EF7970] focus:ring-opacity-50"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
