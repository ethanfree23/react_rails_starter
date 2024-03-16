import React from 'react';
import Cloud from '../img/clouds.jpg'

function CTA() {
  return (
    <div className="bg-white p-8">
      <div className="relative isolate overflow-hidden">
        <img src={Cloud} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div className="ring-gray-300 ring-2 shadow-lg px-6 py-24 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-2xl text-center backdrop-blur-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              It has never tasted better to be<br />a true Texan.
              <br />
              Order your beef today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Get started right here. Simply create an account, select quantity, and pay. Within a month you will have your first round of cuts delviered.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA;