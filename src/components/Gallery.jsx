import Timeline from "./Timeline";

export default function Gallery() {
    return (
        <section className="py-16 bg-gray-50">
            <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 relative">
                POKI PHOTO GALLERY
                <span className="block w-24 h-[3px] bg-orange-500 mx-auto mt-4"></span>
            </h1>
            <Timeline />
        </section>
    );
}
