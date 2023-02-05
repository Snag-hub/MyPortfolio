import React from 'react'

const data = [
  {
    title: 'BBA(CA) (Bachelor of Business Administration and Computer Applications)',
    university: 'University of Pune (Savitribai Phule Pune University)',
    year: '2019 - 2022',
    cgpa: '8.58 CGPA'
  },
  {
    title: 'Higher Secondary Certificate (HSC)',
    university: 'Jammu and Kashmir State Board of School Education (JKBOSE)',
    year: '2017 - 2019',
    cgpa: ''
  },
]

function Education() {
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-2xl text-indigo-600 font-black tracking-wide uppercase">Education</h1>
          </div>
        </div>
        <div className="max-w-5xl m-auto h-auto flex justify-center items-center sm:flex-row md:flex-row flex-col ">
          {data.map((item, index) => (
            <div className=" shadow overflow-hidden sm:rounded-lg mt-5 mr-5" key={index}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-300">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {item.university}
                </p>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {item.year}
                </p>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {item.cgpa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default Education