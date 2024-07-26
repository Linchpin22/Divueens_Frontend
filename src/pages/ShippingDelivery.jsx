import React from 'react';

const Ship = [
    {
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, at repellendus eaque magnam et delectus assumenda laboriosam id! Esse sequi aliquid ullam eligendi sed ratione odio sunt sint cumque beatae.'
    },
    {
        title:'Heading 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
        description2:'',
        description3:'',
    },
    {
        title: 'Heading2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
        description2:'',
        description3:'',
    },
    {
        title: 'Heading 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
        description2:'',
        description3:'',
    },
    {
        title: 'Heading 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
        description2:'',
        description3:'',
    },
    {
        title: 'Heading 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
        description2:'',
        description3:'',
    },
    {
        title: 'Heading 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
        description2:'',
        description3:'',
    },
    {
        title: 'Heading 7',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
        description2:'',
        description3:'',
    },
    {
        title: 'Heading 8',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio accusantium obcaecati consequuntur amet. Quasi odio inventore reiciendis fugiat atque impedit qui! Hic assumenda aliquid doloribus quos! Amet hic pariatur distinctio.',
        description2:'',
        description3:'',
    },
];

function ShippingDelivery() {
  return (
    <div className="bg-[rgb(249,249,250)] font-Montserrat;">
      <br />
      <div className="w-[70%] max-sm:w-[90%] mx-auto rounded-xl bg-rose-100 px-[5%] py-4">
        <p className="text-center text-2xl font-semibold max-sm:text-xl py-4">Shipping and Delivery</p>
        {Ship.map((item, index) => (
          <React.Fragment key={index}>
            <p className="text-lg font-semibold max-sm:text-base uppercase my-4">{item.title}</p>
            <p className="text-base text-slate-500 my-2 max-sm:text-sm">{item.description}</p>
            <p className="text-base text-slate-500 max-sm:text-sm">{item.description2}</p>
            <p className="text-base text-slate-500 max-sm:text-sm">{item.description3}</p>
          </React.Fragment>
        ))}
      </div>
      <br />
    </div>
  );
}

export default ShippingDelivery;