import React, { useState } from 'react'
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';


export const Faqs = ({ question, active, answer, onClick }) => {
    const toggle = () => {
        onClick(question);
    }

    return (
            <li className='py-3 w-full h-fit'>
                <div className='flex justify-between' onClick={toggle}>
                    <h2 className={`w-70% max-sm:w-72 font-semibold hover:text-rose-500 cursor-pointer ${active ? 'text-rose-500' : 'text-[#000000]'}`} >{question}</h2>
                    <button className="text-rose-500">
                        {active ? <FaCircleMinus  /> : <FaCirclePlus />}
                    </button>
                </div>
                <p className={`text-start py-3 mb-3 leading-tight ${active ? 'block' : 'hidden'} text-[#3f3c3e]`}>{answer}</p>
            </li>
    )
}


function FaqsPage() {
 
const faqs = [
  {
      question: "What are the best makeup products for sensitive skin?",
      answer: "For sensitive skin, it's best to use hypoallergenic and fragrance-free makeup products. Look for brands that specialize in sensitive skin, such as Clinique, BareMinerals, and Almay."
  },
  {
      question: "How can I make my makeup last all day?",
      answer: "To make your makeup last all day, start with a primer to create a smooth base. Use long-wearing foundations and powders, and set your makeup with a setting spray. Additionally, consider using waterproof mascara and eyeliner."
  },
  {
      question: "What is the best way to remove makeup?",
      answer: "The best way to remove makeup is to use a gentle makeup remover or cleansing oil. Follow up with a facial cleanser to ensure all residue is removed. It's important to be gentle, especially around the eye area, to avoid irritation."
  },
  {
      question: "How often should I clean my makeup brushes?",
      answer: "You should clean your makeup brushes at least once a week to prevent the buildup of bacteria and ensure your makeup application is smooth and hygienic. Use a gentle brush cleaner or a mixture of baby shampoo and water."
  },
  {
      question: "What are the essential makeup products for a beginner?",
      answer: "For a beginner, the essential makeup products include foundation or BB cream, concealer, mascara, eyebrow pencil, blush, and a neutral eyeshadow palette. These basics will help you create a variety of looks without overwhelming you."
  },
  {
      question: "How do I choose the right foundation shade?",
      answer: "To choose the right foundation shade, match the foundation to your jawline in natural light. The right shade should blend seamlessly into your skin without leaving a noticeable line. You can also ask for samples or test shades at a makeup counter."
  },
  {
      question: "What are some tips for achieving a natural makeup look?",
      answer: "For a natural makeup look, use a lightweight foundation or tinted moisturizer, and opt for neutral eyeshadows and blush. Define your brows and apply a coat of mascara. Finish with a nude or pink lip color for a fresh, effortless look."
  },
  {
      question: "How can I prevent my lipstick from smudging?",
      answer: "To prevent your lipstick from smudging, start by applying a lip liner to define your lips and create a base. Apply your lipstick and blot with a tissue. You can also dust a light layer of translucent powder over your lips to set the color."
  },
  {
      question: "What is the difference between bronzer and contour?",
      answer: "Bronzer is used to add warmth and a sun-kissed glow to your skin, typically applied to areas where the sun naturally hits. Contour is used to create shadows and define your facial features, often applied under the cheekbones, along the jawline, and the sides of the nose."
  },
  {
      question: "How do I care for my skin before applying makeup?",
      answer: "Before applying makeup, ensure your skin is clean and well-moisturized. Use a gentle cleanser, followed by a toner and moisturizer suitable for your skin type. Applying a primer can also help create a smooth base for your makeup."
  }
];


  const [active, setActive] = useState(false);
  const handleActive = (question) =>{
    setActive((pre)=> (pre === question ? null : question ));
  }
  return (
    // <div className="w-full  bg-gradient-to-r from-[#efdce8] via-[#faa3c5] via-30% to-[#e0d2d7] ">
    <div className="w-full">
      <div className="flex items-center flex-col justify-center w-full ">
      {/* <h1 className="text-4xl m-4 text-white">Divueens</h1> */}
        
        <div className="bg-white mb-12 px-12 py-8 max-sm:px-5 rounded-xl w-2/3 max-sm:w-3/4 h-fit">
          <div className="flex flex-row items-center text-2xl pb-10 gap-3">
            <FaRegCircleQuestion/>
            <h1 className="text-4xl font-bold ]">FAQs</h1>
          </div>
          <ul className="flex flex-col">
            {faqs.map((item, index)=>(
              <Faqs key={index} question={item.question} answer={item.answer} active={active === item.question}  onClick={handleActive} />
            ))}
          </ul>
        </div>
       
      </div>

    </div>

  )
}

export default FaqsPage
