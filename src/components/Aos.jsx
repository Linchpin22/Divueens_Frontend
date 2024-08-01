import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Aos = ({ children }) => {

    useEffect(() => {
        AOS.init({
            // global settings for aos animation
            duration: 1000,
            offset: 200, // offset {in px} from the original trigger point
            easing: 'ease',
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