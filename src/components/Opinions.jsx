import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, UserRound } from 'lucide-react'


// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Kenned Dsouza",
    image: "./person1.jpg",
    quote: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
    color: "bg-red-500"  },
  {
    id: 2,
    name: "Laura Dsouza",
    image: "./person2.jpg",
    quote: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
  {
    id: 3,
    name: "Jackson Dsouza",
    image: "./person4.jpg",
    quote: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
  {
    id: 4,
    name: "Sarah Dsouza4",
    image: "./person3.jpg",
    quote: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
]

export default function Opinions() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="w-full min-h-[70vh] max-w-8xl my-1 px-2 sm:px-4 py-2 sm:py-12 relative overflow-hidden">
      <h2 className="text-xl sm:text-2xl md:text-5xl font-bold mb-6 sm:mb-12 md:mb-24 text-orange-600 text-center px-4 sm:px-8 md:px-[29rem]">
        Here's what pet owners have to say about Fetch! Pet Care...
      </h2>
      <div className="flex items-center justify-center h-[300px] sm:h-[400px]">
        {testimonials.map((testimonial, index) => {
          let offset = index - currentIndex
          if (offset < 0) offset += testimonials.length
          return (
            <div
              key={testimonial.id}
              className={`rounded-3xl p-4 sm:p-10 absolute w-full max-w-2xl transition-all duration-500 ease-in-out
                ${offset === 0 ? 'z-20 opacity-100 scale-100 bg-blue-500' : 
                  offset === 1 || offset === testimonials.length - 1 ? 'z-10 opacity-100 scale-75 bg-orange-600' : 
                  'opacity-0 scale-65'}
                ${offset === 1 ? 'translate-x-[35%] sm:translate-x-[55%]' : 
                  offset === testimonials.length - 1 ? '-translate-x-[35%] sm:-translate-x-[55%]' : ''}`}
            >
              <div className="flex flex-col items-center text-center gap-2 sm:gap-4">
                <div className="w-16 h-16 sm:w-28 sm:h-28 rounded-full border-4 border-white overflow-hidden">
                {testimonial.image? 
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  : <UserRound fill="#ffffff"className="w-full h-full object-cover bg-white" />}
                </div>
                <h3 className="text-base sm:text-lg md:text-3xl text-white">{testimonial.name}</h3>
                <p className="text-sm sm:text-md md:text-2xl text-white/90 leading-relaxed font-open-sans opacity-80">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/3 md:top-1/2 md:translate-y-1/2 left-4 sm:left-10 md:left-40 z-30 bg-orange-600 hover:bg-orange-800 text-white rounded-full p-1 sm:p-2 focus:outline-none"
        aria-label="Previous testimonial"
      >
        <ArrowLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/3 md:top-1/2 md:translate-y-1/2  right-4 sm:right-10 md:right-40 z-30 bg-orange-600 hover:bg-orange-800 text-white rounded-full p-1 sm:p-2 focus:outline-none"
        aria-label="Next testimonial"
      >
        <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </div>
  )
}
