import React, { useState } from 'react';
import capture from "../assets/Capture.png"
import capture2 from "../assets/Capture2.png"


export default function Comp1() {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recom', label: 'Recommended' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="h-[200px] overflow-y-scroll">
            <p className="text-gray-400 text-[23px] font-extralight p-8">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero natus vitae impedit dolor accusamus, minus nobis quibusdam ducimus quo culpa, est voluptatum neque vel dolore libero unde pariatur. Commodi, quae. Architecto, doloribus aliquid sequi nesciunt, ad quasi ratione quas recusandae reprehenderit quo eum deleniti alias, iusto provident labore placeat natus at a amet voluptates. Deserunt excepturi doloremque, voluptatem nihil aliquid accusantium facilis. Obcaecati recusandae minima fuga error magni distinctio, necessitatibus voluptates perferendis voluptate voluptatibus doloremque cum natus aspernatur, vero enim in. Perferendis sit nisi perspiciatis optio iusto, libero neque eum nihil earum quidem porro officiis? Eius nostrum temporibus fugiat facere!
            </p>
            
            
           
          </div>
        );
      case 'experiences':
        return (
          <div className="text-gray-400 text-[23px] font-extralight p-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo, repellendus quae tempora nostrum aperiam ad provident sequi iusto, doloremque pariatur velit praesentium necessitatibus veritatis? Distinctio ipsa repudiandae modi esse. </p>
          </div>
        );
      case 'recom':
        return (
          <div className="text-gray-400 text-[23px] font-extralight p-8">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quo, repellendus quae tempora nostrum aperiam ad provident sequi iusto, doloremque pariatur velit praesentium necessitatibus veritatis? Distinctio ipsa repudiandae modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, quod. </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-[#363c43] rounded-[30px] overflow-hidden p-3 shadow-lg shadow-black relative">
        <div className='absolute top-10 left-3'>
              <img src={capture} alt="" />
            </div>
          <div className='absolute top-45 left-0'>
              <img src={capture2} alt="" />
            </div>
        <div className="flex gap-5 justify-center border bg-[#171717] border-gray-200 w-[500px] mx-auto rounded-xl mt-5 px-2 py-1 relative">
          
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-4 text-[20px] transition-all duration-300 w-[500px] ${
                activeTab === tab.id
                  ? 'text-white bg-[#363c43] rounded-xl font-extrabold'
                  : 'text-white  hover:text-white hover:bg-[#363c43] hover:rounded-xl  '
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

       
        <div className="p-3 pt-4 w-full h-[250px] ">
          <div className="">
            {renderContent()}
          </div>
        </div>
      </div>

     
    </>
  );
}
