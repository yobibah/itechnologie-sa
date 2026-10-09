import Image from "next/image";

const PhotoView = ({ img = null, onClose }) => {
  if (!img) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
    
      <button
        type="button"
        onClick={onClose}
        className="absolute w-[40px] h-[40px] rounded-full bg-white right-5 top-5 text-3xl text-red-600 hover:text-red-500"
        aria-label="Fermer l'aperçu"
      >
        &times;
      </button>

      <Image
        src={img}
        alt={img}
   
      
        className="max-h-[90vh] max-w-full rounded-lg object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default PhotoView;
