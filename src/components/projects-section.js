import { useState, useRef, useEffect } from "react"

export default function Project_section() {
    return (
        <section className="projects_cards_section" id="projects">
            <h2 className="card_header">Projects</h2>
            <div className="grid_wrapper">
                <Card1 />
                <Card2 />
                <Card3 />
                <Card4 />
            </div>
        </section>
    )
}

const Card1 = () => {
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
            ref.current.classList.add('card_slide_in');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <article className="project_card card_1" ref={ref}>
            <div>
                <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scale,f_auto,q_80/v1684590234/Screenshot-26_dju85t.png"
                    srcset="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scale,f_auto,q_80/v1684590234/Screenshot-26_dju85t.png 300w,
                    https://res.cloudinary.com/dvcx5l1vb/image/upload/w_600,c_scale,f_auto,q_80/v1684590234/Screenshot-26_dju85t.png 600w,
                    https://res.cloudinary.com/dvcx5l1vb/image/upload/w_900,c_scale,f_auto,q_80/v1684590234/Screenshot-26_dju85t.png 900w,
                    https://res.cloudinary.com/dvcx5l1vb/image/upload/w_1200,c_scale,f_auto,q_80/v1684590234/Screenshot-26_dju85t.png 1200w"
                    loading="lazy"
                    width="1282"
                    height="634"
                    alt="Cv maker app project user interface"
                />
            </div>
            <h3>CV Maker: A React-Based Web Application for Creating Professional Resumes</h3>
            <p>A web-based application using React, a popular JavaScript library for building user interfaces.
                CV Maker is designed to make it easy for users to create professional resumes and provides a range of features and options to help users create a resume that reflects their skills, experience, and qualifications.</p>
            <div className="project_link">
                <a href="https://ebukathedeveloper.github.io/resume-builder-app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
                <a href="https://github.com/EbukaTheDeveloper/resume-builder-app" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </ article>
    )
}

const Card2 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
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
            ref.current.classList.add('card_slide_in');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        < article className="project_card" ref={ref}>
            <div>
                <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scale,f_auto,q_80/v1684590157/weatherApp2_g2lxzl.png"
                    srcset="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scale,f_auto,q_80/v1684590157/weatherApp2_g2lxzl.png 300w,
                 https://res.cloudinary.com/dvcx5l1vb/image/upload/w_600,c_scale,f_auto,q_80/v1684590157/weatherApp2_g2lxzl.png 600w,
                  https://res.cloudinary.com/dvcx5l1vb/image/upload/w_900,c_scale,f_auto,q_80/v1684590157/weatherApp2_g2lxzl.png 900w,
                   https://res.cloudinary.com/dvcx5l1vb/image/upload/w_1200,c_scale,f_auto,q_80/v1684590157/weatherApp2_g2lxzl.png 1200w"
                    loading="lazy"
                    width="1257"
                    height="621"
                    alt="Weather app project user interface"
                />
            </div>
            <h3>Weather Web Application</h3>
            <p>Weather app built with HTML/CSS and JavaScript and asynchronous programming using async functions to make it more responsive and user-friendly.
                The app allows users to enter their location or use their current location to retrieve real-time weather data from an API,
                and displays the current weather conditions, temperature, wind speed, and other relevant information.</p>
            <div className="project_link">
                <a href="https://weather-forecastweb.netlify.app/" target="_blank" rel="noopener noreferrer">Live Preview</a>
                <a href="https://github.com/EbukaTheDeveloper/weather" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </ article>
    )
}

const Card3 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
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
            ref.current.classList.add('card_slide_in');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        < article className="project_card" ref={ref}>
            <div>
                <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scale,f_auto,q_80/v1684590201/Screenshot-28_sjr2us.png"
                    srcSet="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scale,f_auto,q_80/v1684590201/Screenshot-28_sjr2us.png 300w,
                https://res.cloudinary.com/dvcx5l1vb/image/upload/w_600,c_scale,f_auto,q_80/v1684590201/Screenshot-28_sjr2us.png 600w,
                https://res.cloudinary.com/dvcx5l1vb/image/upload/w_900,c_scale,f_auto,q_80/v1684590201/Screenshot-28_sjr2us.png 900w,
                https://res.cloudinary.com/dvcx5l1vb/image/upload/w_1200,c_scale,f_auto,q_80/v1684590201/Screenshot-28_sjr2us.png 1200w"
                    loading="lazy"
                    width="1267"
                    height="630"
                    alt="Furniture store project user interface"
                />
            </div>
            <h3>Furniture e-commerce store</h3>
            <p>The site serves as an all-in-one platform, offering a wide range of furniture products,
                from modern designs to timeless classics. With a focus on user-centric design and intuitive functionality, I aimed to provide a delightful and convenient shopping experience for customers. </p>
            <div className="project_link">
                <a href="https://ebukathedeveloper.github.io/furniture-ecommerce-site/#/" target="_blank" rel="noopener noreferrer">Live Preview</a>
                <a href="https://github.com/EbukaTheDeveloper/furniture-ecommerce-site" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </ article>
    )
}

const Card4 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
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
            ref.current.classList.add('card_slide_in');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        < article className="project_card" ref={ref}>
            <div>
                <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,f_auto,q_80/v1686912954/satellite-page_jzrymm.png"
                    srcSet="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,f_auto,q_80/v1686912954/satellite-page_jzrymm.png 300w,
                    https://res.cloudinary.com/dvcx5l1vb/image/upload/w_600,f_auto,q_80/v1686912954/satellite-page_jzrymm.png  600w,
                    https://res.cloudinary.com/dvcx5l1vb/image/upload/w_900,f_auto,q_80/v1686912954/satellite-page_jzrymm.png  900w,
                    https://res.cloudinary.com/dvcx5l1vb/image/upload/w_1200,f_auto,q_80/v1686912954/satellite-page_jzrymm.png  1200w"
                    loading="lazy"
                    width="1275" height="635" alt="internet satellite landing page project user interface"
                />
            </div>
            <h3>Satellite Internet landing page </h3>
            <p>A landing page built with the core languages of the web {'(HTML, JAVASCRIPT and CSS)'}. I added a scroll based animation with "intersection observer api" in javascript to make the page interactive. </p>
            <p class="figma_ui">A big thanks to <a href="https://figmaui4free.com/free-manage-satellite-internet-landing-page/" target="_blank" rel="noopener noreferrer">figmaui4free</a> for providing a free figma user interface file.</p>
            <div className="project_link">
                <a href="https://ebukathedeveloper.github.io/satellite-internet-landing-page/" target="_blank" rel="noopener noreferrer">Live Preview</a>
                <a href="https://github.com/EbukaTheDeveloper/satellite-internet-landing-page" target="_blank" rel="noopener noreferrer">Github</a>
            </div>

        </ article>
    )
}