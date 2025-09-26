import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import Modal from "./Modal";

export default function Timeline() {
    const [photos, setPhotos] = useState([]);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    useEffect(() => {
        fetch("/uploads/images.json")
            .then((res) => res.json())
            .then((data) => setPhotos(data))
            .catch((err) => console.error("Error loading images:", err));
    }, []);

    return (
        <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4">
            {/* centralna linija */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-300 h-full hidden sm:block"></div>

            <div className="flex flex-col space-y-[-60px] sm:space-y-[-80px]">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`relative flex w-full 
              ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"} 
              justify-center`}
                    >
                        {/* marker – prikazuje se samo na većim ekranima */}
                        <span className="hidden sm:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-tr border-4 border-white rounded-full shadow-md"></span>

                        <PhotoCard
                            photo={photo}
                            align={index % 2 === 0 ? "left" : "right"}
                            onClick={() => setSelectedPhoto(photo)}
                        />
                    </div>
                ))}
            </div>

            {/* Modal */}
            <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
        </div>
    );
}
