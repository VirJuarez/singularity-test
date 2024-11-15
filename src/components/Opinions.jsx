import React, { useState } from 'react'
import { ArrowLeft, ArrowRight, UserRound } from 'lucide-react'


// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Kenned Dsouza1",
    image: "",
    quote: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
    color: "bg-red-500"  },
  {
    id: 2,
    name: "Kenned Dsouza2",
    image: "",
    quote: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
  {
    id: 3,
    name: "Kenned Dsouza3",
    image: "",
    quote: "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
  {
    id: 4,
    name: "Kenned Dsouza4",
    image: "",
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
    <div className="w-full h-screen max-w-8xl mx-auto px-4 py-12 relative">
      <h2 className="text-2xl md:text-5xl font-bold mb-12 md:mb-24 text-orange-600 text-center px-[29rem]">Here's what pet owners have to say about Fetch! Pet Care...</h2>
      <div className="flex items-center justify-center h-[400px]">
        {testimonials.map((testimonial, index) => {
          let offset = index - currentIndex
          if (offset < 0) offset += testimonials.length
          return (
            <div
              key={testimonial.id}
              className={`rounded-3xl p-10 absolute w-full max-w-2xl transition-all duration-500 ease-in-out
                ${offset === 0 ? 'z-20 opacity-100 scale-100 bg-blue-500' : 
                  offset === 1 || offset === testimonials.length - 1 ? 'z-10 opacity-100 scale-75 bg-orange-600' : 
                  'opacity-0 scale-65'}
                ${offset === 1 ? 'translate-x-[55%]' : 
                  offset === testimonials.length - 1 ? '-translate-x-[55%]' : ''}`}
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden">
                {testimonial.image? 
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  : <UserRound fill="#ffffff"className="w-full h-full object-cover bg-white" />}
                </div>
                <h3 className="text-lg md:text-3xl  text-white">{testimonial.name}</h3>
                <p className="text-white/90 text-md md:text-2xl  leading-relaxed font-open-sans opacity-80">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 translate-y-1/2 left-40 z-30 bg-orange-600 hover:bg-orange-800 text-white rounded-full p-2 focus:outline-none"
        aria-label="Previous testimonial"
      >
        <ArrowLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 translate-y-1/2 right-40 z-30 bg-orange-600 hover:bg-orange-800 text-white rounded-full p-2 focus:outline-none"
        aria-label="Next testimonial"
      >
        <ArrowRight className="w-8 h-8" />
      </button>
    </div>
  )
}
