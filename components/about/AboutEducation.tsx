import React from 'react'

const AboutEducation = () => {
  return (
    <div className="bg-stone-900 text-white rounded-bl-xl rounded-tr-xl p-4 flex flex-col gap-4 w-full max-w-fit ">
      <div className="font-semibold text-xl">EDUCATION</div>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">
          Bachelor of Information Communications and Technology
        </span>
        <span className="font-semibold">
          with <span className="text-xl text-sky-400">Distinction</span>
        </span>
        <span className="font-semibold">at Western Sydney University</span>
      </div>
    </div>
  );
}

export default AboutEducation