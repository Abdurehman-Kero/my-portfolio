import React, { useState, useEffect } from "react";
import { bannerImg as defaultBanner } from "../../assets/index";

const RightBanner = () => {
  const [bannerImage, setBannerImage] = useState(defaultBanner);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBannerImage();
  }, []);

  const fetchBannerImage = async () => {
    try {
      const response = await fetch("https://porfoliobe.abdurehman.com/api/banner/active");
      const data = await response.json();

      // If there's a custom image URL from the database, use it
      if (data.image_url && data.image_url !== defaultBanner) {
        // Check if it's a full URL or needs to be resolved from assets
        if (data.image_url.startsWith("http")) {
          setBannerImage(data.image_url);
        } else {
          // If it's a path like '/assets/images/...', you might need to handle differently
          setBannerImage(data.image_url);
        }
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching banner image:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full lgl:w-1/2 flex justify-center items-center">
        <div className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full bg-gray-800 animate-pulse" />
      </div>
    );
  }

  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      {/* Image with reduced opacity border */}
      <img
        className="w-[180px] h-[180px] md:w-[280px] md:h-[280px] rounded-full object-cover border-4 border-designColor/30 shadow-2xl"
        src={bannerImage}
        alt="Banner"
      />
    </div>
  );
};

export default RightBanner;
