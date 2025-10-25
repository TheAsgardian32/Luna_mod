import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Plus, X } from 'lucide-react';
import capture from "../assets/Capture.png"
import capture2 from "../assets/Capture2.png"


export default function ImageGallery() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef(null);

  const handleAddImage = (e) => {
    const files = Array.from(e.target.files);

    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages(prev => [...prev, {
            id: Date.now() + Math.random(),
            url: event.target.result,
            name: file.name
          }]);
        };
        reader.readAsDataURL(file);
      }
    });

    e.target.value = '';
  };

  const handleRemoveImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
    if (currentIndex >= images.length - 1 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(Math.max(0, images.length - 3), prev + 1));
  };

  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < images.length - 3;

  return (
    <div className="flex items-center justify-center bg-[#363c43] p-8 rounded-[30px] shadow-lg shadow-black relative">
      <div className='absolute top-10 left-3'>
              <img src={capture} alt="" />
            </div> 
        <div className='absolute top-40 left-0'>

              <img src={capture2} alt="" />


            </div> 
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[20px] px-8 text-white bg-[#282d32] ml-10 p-2 rounded-xl"> Gallery</h2>
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 border text-[13px] font-extrabold outline-amber-200 border-white bg-[#42474e] rounded-full text-white hover:bg-blue-700 transition-colors"
            >
              <Plus size={20} />
              ADD IMAGE
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleAddImage}
              className="hidden"
            />
            <div className="flex items-center justify-between gap-3 mb-2 mt-0 pt-0">
              <button
                onClick={handlePrevious}
                disabled={!canGoPrevious}
                className={`p-2 rounded-full  ${canGoPrevious
                    ? 'bg-gray-500 hover:bg-gray-300 text-white hover:text-black'
                    : 'bg-gray-500 text-white  cursor-not-allowed'
                  } transition-colors`}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                disabled={!canGoNext}
                className={`p-2 rounded-full ${canGoNext
                    ? 'bg-gray-500 hover:bg-gray-300 text-white hover:text-black'
                    : 'bg-gray-500 text-white cursor-not-allowed'
                  } transition-colors`}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

        </div>

        <div>

          {images.length === 0 ? (
            <div className="flex items-center justify-center h-40 bg-[#363c43] rounded-lg">
              <p className="text-gray-500 text-center">
                No images yet.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden p-2 ">
              <div
                className="flex gap-4 transition-transform duration-500 ease-in-out overflow-visible p-3"
                style={{ transform: `translateX(-${currentIndex * (100 / 3 + 1.33)}%)` }}
              >
                {images.map((image) => (
                  <div
                    key={image.id}
                    className="relative group bg-gray-500 rounded-lg overflow-hidden shadow-md hover:shadow-xl  shrink-0 grayscale hover:grayscale-0 hover:-rotate-2 hover:z-20 hover:relative transition-all duration-500 ease-in-out"
                    style={{ width: 'calc(33.333% - 0.67rem)' }}
                  >
                    <div className="aspect-square">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <button
                      onClick={() => handleRemoveImage(image.id)}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                    
                  </div>
                ))}

                {images.length < 3 && Array.from({ length: 3 - images.length }).map((_, i) => (
                  <div
                    key={`empty-${i}`}
                    className="aspect-square bg-gray-500 rounded-lg   shrink-0"
                    style={{ width: 'calc(33.333% - 0.67rem)' }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
