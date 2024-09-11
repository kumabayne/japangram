"use client";

import { create } from "@/actions/create";
import { Button } from "@/components/ui/button";
import { IconCirclePlus } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import UploadGallery from "./upload-gallery";

export default function CloudinaryUpload() {
  const [formData, setFormData] = useState({ files: [], images: [] });

  const handleChange = (e: Event) => {
    if (
      "target" in e &&
      typeof e.target === "object" &&
      e.target !== null &&
      (e.target as HTMLInputElement).files &&
      (e.target as HTMLInputElement).files.length
    ) {
      const src = URL.createObjectURL(e.target.files[0]);

      setFormData({
        ...formData,
        files: [...formData.files, e.target.files[0]],
        images: [...formData.images, src],
      });
    }
  };

  return (
    <form
      action={create}
      encType="multipart/form-data"
      className="border border-slate-200 dark:border-slate-500 rounded p-6 mb-6"
    >
      <div className="mb-6">
        <label htmlFor="image" className="block font-semibold text-sm mb-2">
          Select an Image to Upload
        </label>
        {formData.images.length > 0 && (
          <UploadGallery images={formData.images} />
        )}
        <div className="inline-flex h-8 w-8 relative">
          <input
            id="media"
            className="border-slate-400 rounded focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 opacity-0 w-8 h-8"
            onChange={handleChange}
            type="file"
            name="media[]"
            multiple={true}
            required
          />
          <IconCirclePlus className="w-8 h-8 pointer-events-none absolute z-10 inset-0" />
        </div>
      </div>
      <Button>Submit</Button>
    </form>
  );
}
