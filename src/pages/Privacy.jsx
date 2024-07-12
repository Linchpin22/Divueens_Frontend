
import React from 'react';

const PrivacyPolicies = [
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

function PrivacyPolicy() {
  return (
    <div className="bg-[rgb(249,249,250)]">
      <br />
      <div className="w-2/3 mx-auto rounded-xl bg-white px-[5%] py-4">
        <p className="text-center text-3xl font-bold py-4">DIVUEENS PRIVACY POLICIES</p>
        {PrivacyPolicies.map((item, index) => (
          <React.Fragment key={index}>
            <p className="text-lg font-semibold uppercase my-4">{item.title}</p>
            <p className="text-[14px]">{item.description}</p>
            <p className="text-[14px]">{item.description2}</p>
            <p className="text-[14px]">{item.description3}</p>
          </React.Fragment>
        ))}
      </div>
      <br />
    </div>
  );
}

export default PrivacyPolicy;