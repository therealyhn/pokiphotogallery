import PhotoCard from "./PhotoCard";

const photos = [
    {
        id: 1,
        src: "https://placehold.co/1920x1080", // zameni pravim fotkama
        year: "2023",
        description: "The moment we said 'I do' under the autumn sky, surrounded by family and friends.",
    },
    {
        id: 2,
        src: "https://placehold.co/1920x1080",
        year: "2024",
        description: "Our first dance together, filled with joy and love.",
    },
    {
        id: 3,
        src: "https://placehold.co/1920x1080",
        year: "2025",
        description: "Celebrating new beginnings with family and godchildren.",
    },
    {
        id: 4,
        src: "https://placehold.co/1920x1080",
        year: "2025",
        description: "Celebrating new beginnings with family and godchildren.",
    },
    {
        id: 5,
        src: "https://placehold.co/1920x1080",
        year: "2025",
        description: "Celebrating new beginnings with family and godchildren.",
    },
];

export default function Timeline() {
    return (
        <div className="relative w-full max-w-7xl mx-auto">
            {/* centralna linija */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-300 h-full"></div>

            <div className="flex flex-col">
                {photos.map((photo, index) => (
                    <div
                        key={photo.id}
                        className={`relative flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                        {/* marker tačka */}
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 border-4 border-white rounded-full shadow"></span>

                        <PhotoCard photo={photo} align={index % 2 === 0 ? "left" : "right"} />
                    </div>
                ))}
            </div>

        </div>
    );
}
