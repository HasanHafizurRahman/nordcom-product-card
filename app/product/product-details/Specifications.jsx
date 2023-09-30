import React, { useState } from "react";

const Specifications = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <div className="p-6 border border-primary-31 mt-[-1px] rounded-tl-sm rounded-tr-sm">
        <h2 className="font-medium">Specifications</h2>
      </div>
      <div className="p-6 border border-primary-31 mt-[-1px]">
        {/* General */}
        <h4>General</h4>
        <div className="flex space-x-5 pt-6">
          <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
            In The Box
          </span>
          <span className="text-sm">
            Handset, Adaptor, Micro USB Cable, TPU Case, Sim Ejector Pin, Quick
            Start Guide, Warranty Card, Xclub Card
          </span>
        </div>
        <div className="flex space-x-5 pt-6 ">
          <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
            Model Number
          </span>
          <span className="text-sm">X6516</span>
        </div>
        <div className="flex space-x-5 pt-6 ">
          <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
            Model Name
          </span>
          <span className="text-sm">Smart 7 HD</span>
        </div>
        {!showMore && (
          <>
            <div style={{ opacity: 0.5 }}>
              <div className="flex space-x-5 pt-6 ">
                <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                  Color
                </span>
                <span className="text-sm">Ink Black</span>
              </div>
            </div>
            <div style={{ opacity: 0.2 }}>
              <div className="flex space-x-5 pt-6">
                <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                  Browse Type
                </span>
                <span className="text-sm">Smartphones</span>
              </div>
            </div>
            <div className="p-6 border border-primary-31 mt-[-1px] ml-[-25px] mr-[-25px]">
              <button
                onClick={() => setShowMore(true)}
                className="text-primary-19 font-medium hover:underline"
              >
                Read More
              </button>
            </div>
          </>
        )}
        {showMore && (
          <>
            <div className="flex space-x-5 pt-6 ">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Color
              </span>
              <span className="text-sm">Ink Black</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Browse Type
              </span>
              <span className="text-sm">Smartphones</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                SIM Type
              </span>
              <span className="text-sm">Dual Sim</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Hybrid Sim Slot
              </span>
              <span className="text-sm">No</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Touchscreen
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                OTG Compatible
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Sound Enhancements
              </span>
              <span className="text-sm">DTS Sound</span>
            </div>
          </>
        )}
      </div>
      {showMore && (
        <>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Display Features */}
            <h4>Display Features</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Display Size
              </span>
              <span className="text-sm">16.76 cm (6.6 inch)</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Processor Type
              </span>
              <span className="text-sm">Spreadtrum SC9863A1</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Processor Core
              </span>
              <span className="text-sm">Octa Core</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Primary Clock Speed
              </span>
              <span className="text-sm">1.6 GHz</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Operating Frequency
              </span>
              <span className="text-sm">
                2G GSM: B2/B3/B5/B8, 3G WCDMA: B1/B5/B8, 4G LTE:
                B1/B3/B5/B8/B38/B40/B41 (120M)
              </span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Memory & Storage Features */}
            <h4>Memory & Storage Features</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Internal Storage
              </span>
              <span className="text-sm">64 GB</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                RAM
              </span>
              <span className="text-sm">2 GB</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Expandable Storage
              </span>
              <span className="text-sm">1 TB</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Supported Memory Card Type
              </span>
              <span className="text-sm">MicroSD</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Memory Card Slot Type
              </span>
              <span className="text-sm">Dedicated Slot</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Call Log Memory
              </span>
              <span className="text-sm">Yes</span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Camera Features */}
            <h4>Camera Features</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Primary Camera Available
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Primary Camera
              </span>
              <span className="text-sm">8MP + AI Lens</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Primary Camera Features
              </span>
              <span className="text-sm">
                AI Dual Camera: 8 MP + AI Lens, Camera Features: Portrait, HDR,
                AI 3D Beauty, Video Features: HD Video Recording
              </span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Secondary Camera Available
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Secondary Camera
              </span>
              <span className="text-sm">5MP Front Camera</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Secondary Camera Features
              </span>
              <span className="text-sm">
                5MP Front Camera: Camera Features:AI Portrait, Face Beauty,
                Video Features: HD Video Recording
              </span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Flash
              </span>
              <span className="text-sm">
                Rear: Dual LED Flash|Front: LED Flash
              </span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Digital Zoom
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Dual Camera Lens
              </span>
              <span className="text-sm">Primary Camera</span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Call Features */}
            <h4>Call Features</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Phone Book
              </span>
              <span className="text-sm">Yes</span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Connectivity Features */}
            <h4>Connectivity Features</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Network Type
              </span>
              <span className="text-sm">2G, 3G, 4G</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Supported Networks
              </span>
              <span className="text-sm">4G LTE, GSM, WCDMA</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Internet Connectivity
              </span>
              <span className="text-sm">4G, 3G, EDGE, GPRS, Wi-Fi</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                3G
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                GPRS
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Pre-installed Browser
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Bluetooth Support
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Bluetooth Version
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                v4.2
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Wi-Fi
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Wi-Fi Version
              </span>
              <span className="text-sm">IEEE 802.11 b/g/n</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Wi-Fi Hotspot
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                NFC
              </span>
              <span className="text-sm">No</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Infrared
              </span>
              <span className="text-sm">No</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                USB Connectivity
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                EDGE
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Map Support
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                GPS Support
              </span>
              <span className="text-sm">Yes</span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Other Details */}
            <h4>Other Details</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Smartphone
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                SIM Size
              </span>
              <span className="text-sm">Nano Sim</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                User Interface
              </span>
              <span className="text-sm">XOS 12 (Based on Android 12 GO)</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                SMS
              </span>
              <span className="text-sm">Yes</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Sensors
              </span>
              <span className="text-sm">
                Fingerprint Sensor, Ambient Light Sensor, Proximity Sensor,
                Gyroscope (By Software), E-Compass
              </span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Other Features
              </span>
              <span className="text-sm">
                Power Marathon Tech, Video Assistant, Xhide, XClone, Peek Proof,
                Kids Mode, Photo Compressor, 360 Flashlight, Social Turbo, Eye
                Care, Game Mode, Smart Panel, AI Gallery, Mem-Fusion,
                Anti-Bacterial Back Panel, Gesture, Wave Pattern, Face &
                Fingerprint Unlock, Upto 2GB Virtual RAM, Peak Brightness
                500nits
              </span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                GPS Type
              </span>
              <span className="text-sm">A-GPS</span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Multimedia Features */}
            <h4>Multimedia Features</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                DLNA Support
              </span>
              <span className="text-sm">No</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Audio Formats
              </span>
              <span className="text-sm">MP3, MIDI, AMR, WAV</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Video Formats
              </span>
              <span className="text-sm">3GP, MP4, AVI</span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Battery & Power Features */}
            <h4>Battery & Power Features</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Battery Capacity
              </span>
              <span className="text-sm">5000 mAh</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Battery Type
              </span>
              <span className="text-sm">Lithium Ion Polymer</span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Dimensions */}
            <h4>Dimensions</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Width
              </span>
              <span className="text-sm">75.51 mm</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Height
              </span>
              <span className="text-sm">163.88 mm</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Depth
              </span>
              <span className="text-sm">8.65 mm</span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Weight
              </span>
              <span className="text-sm">196 g</span>
            </div>
          </div>
          <div className="p-6 border border-primary-31 mt-[-1px]">
            {/* Warranty */}
            <h4>Warranty</h4>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Warranty Summary
              </span>
              <span className="text-sm">
                1 Year on Handset and 6 Months on Accessories
              </span>
            </div>
            <div className="flex space-x-5 pt-6">
              <span className="text-sm text-primary-34 whitespace-normal min-w-[150px] max-w-[150px]">
                Domestic Warranty
              </span>
              <span className="text-sm">1 Year</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Specifications;
