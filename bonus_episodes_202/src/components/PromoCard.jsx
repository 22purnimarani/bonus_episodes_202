import { Link } from "react-router-dom";
const PromoCard = ({ Image, buttonDescription, Description, linkTo }) => {
  return (
    <section id="promo">
    <div className="flex-grow border border-gray-200 rounded-lg shadow-md overflow-hidden relative">
      <img 
        src={Image} 
        alt="Promotional Offer" 
        className="w-full h-80 object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white bg-black bg-opacity-25">
        <div>
          <h2 className="text-2xl font-bold">Limited Time Offer!</h2>
          <p className="mt-2">
            {Description}
          </p>
        </div>
        <button className="mt-4 flex self-start px-4 py-2 bg-green-500 font-semibold rounded hover:bg-green-600 transition duration-200 group">
        <span>{buttonDescription}</span>
        <Link to={linkTo} >
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 w-5 h-5 transfrom translate-y-1 transition-transform transform group-hover:translate-x-1 group-hover:translate-y-1"
            viewBox="0 0 256 256"
          >
            <path 
              fill="currentColor" 
              d="m221.66 133.66l-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" 
            />
          </svg>
          </Link>
        </button>
      </div>
    </div>
    </section>
  );
};

export default PromoCard;