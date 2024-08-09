import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Aos = ({ children }) => {

    useEffect(() => {
        AOS.init({
            // global settings for aos animation
            delay: 100,
            duration: 1200,
            offset: 100, // offset {in px} from the original trigger point
            easing: 'ease',
            mirror: false,
            once: true, // whether animation should happen only once - while scrolling
        })
    }, [])


    return (
        <div>
            {children}
        </div>
    )
}

export default Aos