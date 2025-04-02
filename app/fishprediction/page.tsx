'use client'; // Required for using hooks like useState and useEffect

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from "@/components/navbar"
// import MapComponent from '@/components/MapComponent'; // Keep your existing MapComponent import

export default function Home() {
  // State for the species selection and heatmap
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [heatmapHtml, setHeatmapHtml] = useState('');
  const [isLoadingHeatmap, setIsLoadingHeatmap] = useState(false);
  const [heatmapError, setHeatmapError] = useState<string | null>(null);

  // List of available species (should match your Flask backend)
  const availableSpecies = [
    'Sardine', 'Mackerel', 'Anchovy', 'Tuna', 'Snapper',
    'Grouper', 'Prawns', 'Crabs', 'Seer Fish', 'Pomfret'
  ];

  // Fetch heatmap HTML when selectedSpecies changes
  useEffect(() => {
    // Function to fetch the heatmap from Flask
    async function fetchHeatmap(speciesName: string) {
      if (!speciesName) {
        setHeatmapHtml(''); // Clear heatmap if no species selected
        return;
      }

      setIsLoadingHeatmap(true);
      setHeatmapError(null);
      setHeatmapHtml(''); // Clear previous heatmap while loading

      try {
        const response = await fetch('http://localhost:5000/heatmap', { // Flask endpoint
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ species: speciesName }), // Send selected species
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        setHeatmapHtml(html); // Set the fetched HTML string

      } catch (error: any) {
        console.error("Could not fetch heatmap:", error);
        setHeatmapError("Failed to load heatmap. Is the Flask server running?");
      } finally {
        setIsLoadingHeatmap(false);
      }
    }

    fetchHeatmap(selectedSpecies);

  }, [selectedSpecies]); // Dependency array: re-run effect when selectedSpecies changes

  // Handler for species dropdown change
  const handleSpeciesChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSpecies(event.target.value);
  };

  return (
    <div>
        <Navbar />
    
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-12 lg:p-24">
        
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-8">
        {/* Your existing header content */}
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Fish Migration & Prediction 
          {/* <code className="font-mono font-bold">src/app/page.tsx</code> */}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://googlesolution.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg" // Make sure this path is correct
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      {/* Species Selection Section */}
      <div className="w-full max-w-5xl mb-8 p-4 border rounded-lg bg-gray-50 dark:bg-zinc-800/50">
        <h2 className="text-xl font-semibold mb-3">Select Species for Heatmap</h2>
        <label htmlFor="speciesSelect" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Choose a fish species:
        </label>
        <select
          id="speciesSelect"
          value={selectedSpecies}
          onChange={handleSpeciesChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">-- Select a Species --</option>
          {availableSpecies.map((sp) => (
            <option key={sp} value={sp}>{sp}</option>
          ))}
        </select>
      </div>

      {/* Heatmap Display Section */}
      <div className="w-full max-w-5xl mb-8 border rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
         <h2 className="text-xl font-semibold mb-3 p-4">Species Heatmap</h2>
         {isLoadingHeatmap && <p className="p-4 text-center">Loading heatmap...</p>}
         {heatmapError && <p className="p-4 text-center text-red-500">{heatmapError}</p>}
         {heatmapHtml && !isLoadingHeatmap && (
           <div
             style={{ width: '100%', height: '500px' }} // Adjust height as needed
             dangerouslySetInnerHTML={{ __html: heatmapHtml }}
            />
         )}
         {!selectedSpecies && !isLoadingHeatmap && !heatmapError && (
            <p className="p-4 text-center text-gray-500">Please select a species to view the heatmap.</p>
         )}
      </div>


      {/* Optional: Keep your original MapComponent if needed for other purposes */}
      {/* <div className="w-full max-w-5xl mb-8">
        <h2 className="text-xl font-semibold mb-3">Coastal Points Map</h2>
        <MapComponent />
      </div> */}

      {/* Your existing grid/link section (optional) */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
       {/* ... your link elements ... */}
      </div>
    </main>
    </div>
  );
}