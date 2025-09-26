import { useState } from "react";

export default function Modal({ photo, onClose }) {
    const [editing, setEditing] = useState(false);
    const [year, setYear] = useState(photo?.year || new Date().getFullYear());
    const [description, setDescription] = useState(photo?.description || "");
    const [password, setPassword] = useState("");

    if (!photo) return null;

    const handleDelete = async () => {
        if (!password) return alert("Enter password first");

        await fetch("/delete.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ id: photo.id, password }),
        });

        onClose();
        window.location.reload();
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        if (!password) return alert("Enter password first");

        await fetch("/edit.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                id: photo.id,
                year,
                description,
                password,
            }),
        });

        setEditing(false);
        onClose();
        window.location.reload();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            {/* Modal box - centriran i uži */}
            <div className="bg-white rounded-xl shadow-lg max-w-3xl w-auto mx-auto relative">
                {/* Close dugme */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-black"
                >
                    ✖
                </button>

                {/* Slika */}
                <div className="flex justify-center items-center p-4">
                    <img
                        src={photo.src}
                        alt={photo.year}
                        loading="lazy"
                        className="max-h-[80vh] max-w-full object-contain mx-auto rounded"
                    />
                </div>

                {/* Tekst i kontrole */}
                <div className="p-6">
                    {editing ? (
                        <form onSubmit={handleEdit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Year</label>
                                <input
                                    type="text"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Description</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    className="w-full border rounded-lg p-2"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full border rounded-lg p-2"
                                    required
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    type="submit"
                                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditing(false)}
                                    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <>
                            <p className="text-main font-heading font-semibold text-lg">
                                {photo.year}
                            </p>
                            <p className="text-gray-700 italic">{photo.description}</p>



                            <div className="mt-4 flex gap-3">
                                <button
                                    onClick={() => setEditing(true)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                                >
                                    ✏ Edit
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                                >
                                    🗑 Delete
                                </button>
                                
                                <div className="mt-4">
                                    <label className="block text-sm font-medium">Password</label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full border rounded-lg p-2"
                                        required
                                    />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
