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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4">
            {/* Fullscreen container; content centered but image large */}
            <div className="relative w-full h-full max-w-none max-h-full flex flex-col">
                {/* Close btn top-right */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-30 bg-white/90 rounded-full p-2 shadow hover:bg-white"
                    aria-label="Close"
                >
                    ✖
                </button>

                {/* Image area - occupies available vertical space, centered */}
                <div className="flex-1 flex items-center justify-center">
                    <img
                        src={photo.src}
                        alt={photo.year}
                        loading="lazy"
                        // image scales to fit viewport while retaining aspect
                        className="max-h-[92vh] max-w-full object-contain rounded"
                    />
                </div>

                {/* Controls panel (overlay-like, pinned to bottom) */}
                <div className="bg-white/95 backdrop-blur-sm border-t px-6 py-5">
                    {editing ? (
                        <form onSubmit={handleEdit} className="max-w-3xl mx-auto space-y-4">
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
                                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
                                    Save
                                </button>
                                <button type="button" onClick={() => setEditing(false)} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="max-w-3xl mx-auto">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-lg font-semibold">{photo.year}</p>
                                    <p className="text-gray-700 italic">{photo.description}</p>
                                </div>

                                <div className="ml-auto flex items-center gap-3">
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        className="border rounded-lg p-2 mr-2"
                                    />
                                    <button onClick={() => setEditing(true)} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">✏ Edit</button>
                                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">🗑 Delete</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
