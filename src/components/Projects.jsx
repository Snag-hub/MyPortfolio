import React from 'react'

const data = [
  {
    title: 'Sorting Algorithm Visualizer (JavaScript)',
    Desc: 'Made a Sorting Algorithm Visualizer using JavaScript. Where users can visualize different sorting algorithms like Bubble Sort, Insertion Sort, Selection Sort, Merge Sort, Quick Sort, Heap Sort, etc.',
    demo: 'https://snag-hub.github.io/Sorting-Visualizer/',
    code: 'https://github.com/Snag-hub/Sorting-Visualizer'
  },
  {
    title: 'B2S Local E-Market Place (PHP, SQL, HTML, CSS, JavaScript)',
    Desc: 'Made a Local E-Market Place using PHP, SQL, HTML, CSS and JavaScript. Where users can buy and sell 2nd hand and used products.',
    demo: '#',
    code: 'https://github.com/Snag-hub/B2S-Local-E-Marketplace'
  },
  {
    title: 'Online Examination System (PHP, SQL, HTML, CSS, JavaScript)',
    Desc: 'Made an Online Examination System using PHP, SQL, HTML, CSS and JavaScript. Where users can give online exams and check their results.',
    demo: '#',
    code: 'https://github.com/Snag-hub/OnlineExamPortal'
  },
]

function Projects() {
  return (
    <>
      <div className="">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h1 className="text-2xl text-indigo-600 font-black tracking-wide uppercase">Projects</h1>
          </div>
        </div>
        <div className=" max-w-5xl m-auto h-auto flex justify-center items-center sm:flex-row md:flex-row flex-col ">
          {data.map((item, index) => (
            <div className=" shadow overflow-hidden sm:rounded-lg mt-5 mr-5" key={index}>
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-300">
                  {item.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  {item.Desc}
                </p>
                <p className="mt-4 max-w-2xl text-sm text-gray-500">
                  <a className='bg-blue-500 hover:bg-blue-700 ml-4 text-white font-bold py-2 px-4 rounded-full' href={item.demo} target="_blank" rel="noreferrer">Code</a>
                  <a className='bg-blue-500 hover:bg-blue-700 ml-4 text-white font-bold py-2 px-4 rounded-full' href={item.code} target="_blank" rel="noreferrer">Demo</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects