import React from "react";
import Slider from "../components/CSR/Slider"
import { useEffect } from 'react'
import bgImageCSR from '../assets/CSR/cardBgmobile.png'

function DivueensCSR() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('slidein');
              entry.target.classList.remove('slideout', 'normal-hidden');
            } else {
              entry.target.classList.add('slideout');
              entry.target.classList.remove('slidein');
    
            }
          });
        });
    
        const revobserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revslidein');
              entry.target.classList.remove('revslideout', 'reverse-hidden');
            } else {
              entry.target.classList.add('revslideout');
              entry.target.classList.remove('revslidein');
    
            }
          });
        });
    
        const hiddenElements = document.querySelectorAll('.normal-hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    
        const revHiddenElements = document.querySelectorAll('.reverse-hidden');
        revHiddenElements.forEach((el)=>revobserver.observe(el));
    
        return () => {
          // Clean up observer on unmount
          hiddenElements.forEach((el) => observer.unobserve(el));
          revHiddenElements.forEach((el)=> revobserver.unobserve(el));
        };
      }, []);


    const cardHeadings = {
        1: "Pratham Education Foundation",
        2: "Smile Foundation",
        3: "Self Employed Women's Asscociation (SEWA).",
        4: "SankalpTaru Foundation",
        5: "BAIF Development Research Foundation"
    };

    const cardParas = {
        1: "Pratham is an innovative learning organization created to improve the quality of education in India. Established in 1995 to provide education to children in the slums of Mumbai, Pratham has grown in both scope and scale, with programs today reaching children and youth across the countryAs one of the largest non-governmental organizations in the country, Pratham focuses on high-quality, low-cost and replicable interventions to address gaps in the education system. Working directly with children and youth as well as through large-scale collaborations with government systems, ",
        2: "Established in 2002. Smile Foundation is an Indian development organization, impacting the lives of over 15 lakh children and their families every year. We have more than 400 projects on education, healthcare, livelihood. and women empowerment in over 2,00o remote villages and urban slums across 25 states of India.Smile Foundation runs various healthcare programs, including mobile hospital services and healthcare awareness campaigns, targeting underserved communities in rural and urban India.  ",
        3: "SELF EMPLOYED WOMEN'S ASSOCIATION (SEWA) is the single largest Central Trade union registered on 12th April, 1972 with a membership of over 2.9 million poor, self-employed women workers from the informal economy across 18 states in India.SEWA empowers self-employed women through organizing, capacity building, and advocacy. They provide support in areas like micro-finance, healthcare, and social security.",
        4: "SankalpTaru focuses on environmental conservation through tree plantation drives and community-based forest management, promoting sustainable practices across various regions in India. At SankalpTaru Foundation, we are committed to leveraging cutting-edge technology to combat global warming and climate change. Our initiatives span across 28 states in India, integrating technological advancements to ensure transparency, accountability, and sustainability in our tree plantation efforts.",
        5: "BAIF works on rural development through sustainable livelihood solutions, natural resource management, and community health, aiming to enhance the quality of life in rural areas. BAIF Development Research Foundation has adopted the Gandhian approach to rural prosperity with emphasis on Climate Change Mitigation and Resilient and Sustainable Community Livelihoods. With its multidisciplinary team of about 6000 employees and associates, BAIF is implementing major Nature-positive programmes such as Livestock Development, Natural Resources Management, Agri-Horti-Forestry (Wadi) and Agrobiodiversity Conservation for Sustainable Livelihoods and Enriched Environment. "
    };
    return (
        <div className="DivueensCSR min-h-screen bg-gray-300 pt-1 overflow-hidden">
            <div className="banner mb-4 min-h-52 relative">
                <img src="../assets/CSR/TopBanner.jpg" alt="Banner" className="h-full w-full object-cover hidden lg:block" />
                <img src="../assets/CSR/TopBanner_mobile.jpg" alt="BannerMobile" className="h-full w-full object-cover lg:hidden" />
            </div>
            <div className="content flex min-h-52 p-6 flex-col gap-6 lg:flex-row lg:justify-between">
                <div className="text flex h-full w-full lg:w-1/2 flex-col gap-4 normal-hidden lg:p-7">
                    <h1 className="text-4xl font-bold">{cardHeadings[1]}</h1>
                    <p className="text-wrap text-left text-xl">{cardParas[1]}<a href='https://www.pratham.org/' className="text-blue-600">..... Read More</a></p>
                </div>
                <div className="image lg:h-1/3 lg:w1/3 reverse-hidden overflow-hidden lg:p-7">
                    <img src="../assets/CSR/pratham.png" alt="Pratham" className="h-full w-full rounded-md" />
                </div>
            </div>
            <div className="content box-border flex min-h-52 w-full flex-col gap-6 lg:flex-row-reverse lg:justify-between bg-cover bg-center bg-no-repeat bg-fixed p-6" style={{backgroundImage:`url(${bgImageCSR})`}}>
                <div className="text flex h-full w-full lg:w-1/2 flex-col gap-4 reverse-hidden lg:p-7">
                    <h1 className="text-4xl font-bold">{cardHeadings[2]}</h1>
                    <p className="text-wrap text-left text-xl">{cardParas[2]}<br /> <a href="https://www.smilefoundationindia.org/our-story/" className="text-blue-600">..... Read More</a></p>
                </div>
                <div className="image lg:h-1/3 lg:w1/3 normal-hidden overflow-hidden lg:p-7">
                    <img src="../assets/CSR/smilefoundation.jpg" alt="Smile Foundation" className="h-full w-full rounded-md" />
                </div>
            </div>
            <div className="content flex flex-col gap-6 min-h-52 lg:flex-row lg:justify-between p-6">
                <div className="text flex h-full w-full lg:w-1/2 flex-col gap-4 normal-hidden lg:p-7">
                    <h1 className="text-4xl font-bold">{cardHeadings[3]}</h1>
                    <p className="text-wrap text-left text-xl">{cardParas[3]}<br /><a href="https://www.sewa.org/about-us/" className="text-blue-600">..... Read More</a></p>
                </div>
                <div className="image lg:h-1/3 lg:w-1/3 reverse-hidden rounded-md overflow-hidden px-7 py-7 pr-11">
                    <img src="../assets/CSR/sewa.jpeg" alt="SEWA" className="h-full w-full rounded-md" />
                </div>
            </div>
            <div className="content box-border flex min-h-52 w-full flex-col gap-6 lg:flex-row-reverse lg:justify-between bg-cover bg-center bg-no-repeat bg-fixed p-6" style={{backgroundImage:`url(${bgImageCSR})`}}>
                <div className="text flex h-full w-full lg:w-1/2 flex-col gap-4 reverse-hidden lg:p-7">
                    <h1 className="text-4xl font-bold">{cardHeadings[4]}</h1>
                    <p className="text-wrap text-left text-xl">{cardParas[4]}<br /><a href="https://sankalptaru.org/" className="text-blue-600">..... Read More</a></p>
                </div>
                <div className="image lg:h-1/3 lg:w-1/3 normal-hidden lg:p-7 overflow-hidden">
                    <img src="../assets/CSR/sankalpTaru.jpg" alt="SankalpTaru" className="h-full w-full rounded-md" />
                </div>
            </div>
            <div className="content flex flex-col min-h-52 gap-6 lg:flex-row lg:justify-between p-6">
                <div className="text flex h-full w-full lg:w-1/2 flex-col gap-4 normal-hidden lg:p-7">
                    <h1 className="text-4xl font-bold">{cardHeadings[5]}</h1>
                    <p className="text-wrap text-left text-xl">{cardParas[5]}<br /><a href="https://baif.org.in/who-we-are/overview" className="text-blue-600">..... Read More</a></p>
                </div>
                <div className="image lg:h-1/3 lg:w-1/3 reverse-hidden lg:p-7 overflow-hidden">
                    <img src="../assets/CSR/BAIF.jpeg" alt="BAIF" className="h-full w-full rounded-md" />
                </div>
            </div>
            <Slider />            
        </div>

    )
}

export default DivueensCSR