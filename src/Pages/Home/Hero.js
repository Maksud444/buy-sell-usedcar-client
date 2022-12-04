import React from 'react';
import hero from '../../assets/hero-1.jpeg';

const Hero = () => {
	
    return (
		<div className='mt-8'>
		<section className="p-6 dark:bg-gray-800 dark:text-gray-100">
			<div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
				<div className="w-full px-20 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">

					<h1 className="text-5xl font-extrabold dark:text-gray-50">Buy And Sell <br /> Your Best Products </h1>
					<p className="my-8">
						<span className="font-medium dark:text-gray-50">Good Quality At Cheap Used Car Price SUV / Off-road Vehicle / Pickup Truck BMW X3 Second Car Used Used Cars And Their Prices</span>
					</p>
					<form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">

						<button type="button" className="w-full py-2 font-semibold rounded btn btn-primary text-white">Buy Or Sell</button>
					</form>
				</div>
				<img src={hero} alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
			</div>
		</section>
	</div>
    );
};

export default Hero;