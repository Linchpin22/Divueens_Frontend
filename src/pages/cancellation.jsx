import React from 'react';

const cancellationPolicyData = [
    {
        title: 'Cancellation before shipment (Only valid on orders placed & delivery in India):',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'How will I get refunded for the cancelled orders and how long will this process take?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'What if I used discount vouchers or loyalty points during time of payment and I have to cancel my order?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'Returns, Replacements and Refunds:',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'Which are the items that cannot be returned/exchanged?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'Categories not eligible for Return:',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'I have received a damaged or defective item/wrong product in my order, how should I proceed?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
    {
        title: 'How will I get refunded for the returned orders and how long will this process take?',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
    },
];

function ReturnPolicy() {
  return (
    <div className="py-3 mb-5 md:py-8 md:mb-8">
      <br />
      <div className="w-[70%] max-sm:w-[90%] px-4 bg-rose-100/70 shadow-lg  mx-auto md:px-10 py-10">
        <p className="text-center text-xl text-rose-900 font-bold mb-6 max-sm:text-lg">CANCELLATION AND RETURN POLICY</p>
        {cancellationPolicyData.map((item, index) => (
          <div key={index} 
          className='lg:pl-7'>
            <p className="text-black font-semibold max-sm:text-base p-2">{index+1}. {item.title}</p>
            <p className="w-[90%] text-slate-500 max-sm:text-sm text-sm mb-5 my-1 px-[2%] max-lg:w-[100%]">{item.description}</p>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default ReturnPolicy;