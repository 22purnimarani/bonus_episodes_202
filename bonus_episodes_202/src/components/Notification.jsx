import React from "react";

const Notification = () => {
  return (
    <div className=" inset-x-0 top-0 z-50 bg-opacity-35">
      
    <div className="bg-terracotta ">
        <div className="mx-auto max-w-full py-1 px-3 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
                <div className="flex flex-1 items-center lg:mr-3 lg:flex-none">
                    <p className="ml-3 text-center font-medium font-yeseva text-white">
                    🎉 Free Shipping on <span className="font-semibold">Everything</span> above <span className="font-black">₹499</span> + <span className="font-black">10% OFF</span> with code <span className="font-black">SAVE10</span>!
                    </p>
                </div>
                <div className="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto"><a
                        className="flex items-center justify-center rounded-md border bg-ivory text-terracotta border-transparent px-4 py-2 text-sm font-medium shadow-sm hover:bg-warm-sand"
                        href="#pricing">Buy now
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Notification