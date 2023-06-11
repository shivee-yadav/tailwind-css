import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import PremierImages from "../config/TempPosters.config";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-32 md: w-full h-full p-2">
          <h1 className="text-2xl font-bold text-gray-800">
            {" "}
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-navCol-800 py-16 ">
          <div className="container mx-auto px-32 ">
            <div className="flex">
              <img
                src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                alt="Premier"
                className="w-full h-full  px-3"
              />
            </div>
            <PosterSlider
              images={PremierImages}
              title="Premieres"
              subtitle="Brand new releases every Friday" isDark
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-32">
        <PosterSlider
        images={PremierImages}
        title="Online Streaming Events"
        isDark={false}
        />
      </div>


      <div className="container mx-auto px-32">
        <PosterSlider
        images={PremierImages}
        title="Online Streaming Events"
        isDark={false}
        />
      </div>
    </>
  );
};

export default HomePage;
