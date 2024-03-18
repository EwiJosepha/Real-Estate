import React from "react";

const PropertyImageCard: React.FC = () => {

    // State to store the uploaded images
    // const [uploadedImages, setUploadedImages] = useState<string[]>([]);

    // Function to handle image upload
    // const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const files = Array.from(event.target.files || []);

    //     const formData = new FormData();

    //     // Upload each image to Cloudinary
    //     for (const file of files) {
    //         formData.append('file', file);
    //         formData.append('upload_preset', 'your_cloudinary_upload_preset');

    //         const response = await fetch('', {
    //             method: 'POST',
    //             body: formData,
    //         });

    //         const data = await response.json();

    //         // Store the uploaded image URL
    //         setUploadedImages((prevImages) => [...prevImages, data.secure_url]);
    //     }
    // };
    return (
        <div className="p-4 shadow shadow-blue rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Photo and Video Upload</h3>
            {/* <div className="mb-4">
        <label htmlFor="mainImage" className="block">
            Main Image
        </label>
        <input
            type="file"
            id="mainImage"
            className="w-full"
        onChange={ }
        />
    </div> */}
            <div className="mb-4">
                <label htmlFor="additionalImages" className="block">
                    Image Attachment*
                </label>
                <input
                    type="file"
                    id="additionalImages"
                    className="w-full"
                    multiple
                />
            </div>
            {/* field for uplaoded images */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Uploaded Images</h3>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <img src='' alt="Uploaded" className="w-full h-40 object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PropertyImageCard