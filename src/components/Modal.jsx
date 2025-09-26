import { useState } from "react";

export default function Modal({ photo, onClose }) {
  const [editing, setEditing] = useState(false);
  const [year, setYear] = useState(photo?.year || "");
  const [description, setDescription] = useState(photo?.description || "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // za poruke o grešci

  if (!photo) return null;

  const handleDelete = async () => {
    if (!password) return setError("⚠ Please enter password");

    const response = await fetch("/delete.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ id: photo.id, password }),
    });

    const text = await response.text();
    if (response.ok && text.includes("✅")) {
      onClose();
      window.location.reload();
    } else {
      setError("❌ Wrong password or error deleting file");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!password) return setError("⚠ Please enter password");

    const response = await fetch("/edit.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        id: photo.id,
        year,
        description,
        password,
      }),
    });

    const text = await response.text();
    if (response.ok && !text.includes("❌")) {
      setEditing(false);
      onClose();
      window.location.reload();
    } else {
      setError("❌ Wrong password or error editing file");
    }
  };

  const handleDownload = async () => {
    if (!password) return setError("⚠ Please enter password");

    const formData = new FormData();
    formData.append("id", photo.id);
    formData.append("password", password);

    const response = await fetch("/download.php", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const blob = await response.blob();
      if (blob.type.includes("text/html")) {
        setError("❌ Wrong password or error downloading file");
        return;
      }
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = photo.src.split("/").pop();
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } else {
      setError("❌ Wrong password or error downloading file");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn px-2">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-full max-w-md md:max-w-3xl max-h-[90vh] overflow-y-auto relative">
        {/* Close dugme */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black bg-white/80 rounded-full w-8 h-8 flex items-center justify-center shadow"
        >
          ✖
        </button>

        {/* Slika */}
        <img
          src={photo.src}
          alt={photo.year}
          className="w-full max-h-[50vh] object-contain rounded-t-2xl shadow-md bg-gray-50"
          loading="lazy"
        />

        {/* Info / kontrole */}
        <div className="p-4 md:p-6">
          {editing ? (
            <form onSubmit={handleEdit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Year
                </label>
                <input
                  type="text"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-sec outline-none"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div className="flex gap-3 flex-wrap">
                <button
                  type="submit"
                  className="bg-tr hover:bg-main text-black px-4 py-2 rounded-lg"
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
              <p className="text-tr font-heading font-semibold text-lg">
                {photo.year}
              </p>
              <p className="text-gray-700 italic">{photo.description}</p>

              {/* Buttons */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => setEditing(true)}
                  className="bg-main hover:bg-sec text-black px-4 py-2 rounded-lg"
                >
                  ✏ Edit
                </button>
                <button
                  onClick={handleDownload}
                  className="bg-main hover:bg-sec text-black px-4 py-2 rounded-lg"
                >
                  ⬇ Download
                </button>
                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-black px-4 py-2 rounded-lg"
                >
                  🗑 Delete
                </button>
              </div>

              {/* Password input u view modu */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-400 outline-none"
                  required
                />
              </div>

              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
