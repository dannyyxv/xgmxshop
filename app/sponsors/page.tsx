import { FC } from "react";
import Header from "@/components/Header";

const sponsors = [
  { name: "ASUS", logo: "asus.png" },
  { name: "Corsair", logo: "corsair.png" },
  { name: "Razer", logo: "razer.png" },
  { name: "Logitech", logo: "logitech.png" },
  { name: "MSI", logo: "msi.png" },
  { name: "SteelSeries", logo: "steelseries.png" },
];

const SponsorsPage: FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-purple-500">
          Our Sponsors
        </h1>
        <p className="text-lg text-center text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-red-500 to-red-500 mb-10">
  XGMX is proud to carry and be sponsored by some of the industry's finest brands.
</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="bg-transparent rounded-lg shadow-md p-4 flex items-center justify-center w-full h-32"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SponsorsPage;
