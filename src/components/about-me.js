import { useState, useRef, useEffect } from "react"

const AboutMe = () => {
    const ref = useRef(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        },
            { threshold: 0.3 }
        );
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isIntersecting]);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('slide_in_about-me');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <section className="about_me_section" id="about-me" ref={ref}>
            <h2>About Me</h2>
            <div>
                <p>Hello there! My name is Igweonu Ebuka, and I am a passionate front-end developer with a strong affinity for crafting captivating user interfaces for websites. Welcome to my portfolio website!</p>
                <p>I have always been fascinated by the seamless blend of art and technology, and this curiosity led me to embark on a journey into the world of web development. With each line of code, I strive to create visually appealing and user-friendly experiences that leave a lasting impact on visitors.</p>
                <p>As a front-end developer, I possess a diverse set of skills and expertise in HTML, CSS, and JavaScript, which enables me to bring design concepts to life. I enjoy the process of transforming wireframes and mockups into pixel-perfect, responsive websites that provide an intuitive and engaging experience.</p>
            </div>
        </section>
    )
}

export default AboutMe