import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShippingFast, faUndoAlt, faHeadset, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const ServiceSection = () => {
  return (
    <div className="flex justify-evenly px-6 py-12 mt-16 bg-ivory bg-opacity-30">
      {/* Free Shipping */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faShippingFast} className="text-4xl text-sage mb-2" />
        <p className="text-lg font-semibold text-olive-green">Free Shipping</p>
        <p className="text-lg text-olive-green font-normal">Free Shipping for orders over ₹500</p>
      </div>

      {/* Returns */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faUndoAlt} className="text-4xl text-sage mb-2" />
        <p className="text-lg font-semibold text-olive-green">Returns</p>
        <p className="text-lg font-normal text-olive-green">Within 30 days for an exchange </p>
      </div>

      {/* Online Support */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faHeadset} className="text-4xl text-sage mb-2" />
        <p className="text-lg font-semibold text-olive-green">Online Support</p>
        <p className="text-lg font-normal text-olive-green">Mon-Sun, 10AM to 6PM </p>
      </div>

      {/* Payment */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faCreditCard} className="text-4xl text-sage mb-2 " />
        <p className="text-lg font-semibold text-olive-green">Payment</p>
        <p className="text-lg font-normal text-olive-green">Pay with Multiple Credit Cards</p>
      </div>
    </div>
  );
}

export default ServiceSection;
