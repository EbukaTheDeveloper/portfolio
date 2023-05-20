import { useState, useRef, useEffect } from "react";

export default function Hero_section() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    useEffect(() => {
        ref1.current.classList.add('slide-in');
        ref2.current.classList.add('slide-in');
        return () => {
            ref1.current.classList.remove('slide-in');
            ref2.current.classList.remove('slide-in');
        }
    }, []);
    return (
        <article className="hero_section">
            <div>
                <h1 ref={ref1} className="hero_header">
                    <span className="hero_span_1">Hello i'm Igweonu Ebuka,</span>
                    <span>Frontend Developer</span>
                </h1>
                <p className="hero_text" ref={ref2}>
                    As a person who loves science and technology, i'm passionate about building and designing accessible and responsive user interface of a website and also make the web a better place with my skills.
                </p>
            </div>
            <div className="balls_wrapper">
                <div className="elipse_1_wrapper">
                    <div className="elipse_1"></div>
                </div>
                <div className="elipse_2">
                </div>
                <div className="img_wrapper">
                    <div className="profile_img">
                        <img src="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scalef_auto,q_80,e_art:incognito/v1683975035/My_project-1_eoshby.png"
                            srcSet="https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scale,f_auto,q_80,e_art:incognito/v1683975035/My_project-1_eoshby.png 300w,
                            https://res.cloudinary.com/dvcx5l1vb/image/upload/w_600,c_scale,f_auto,q_80,e_art:incognito/v1683975035/My_project-1_eoshby.png 600w,
                            https://res.cloudinary.com/dvcx5l1vb/image/upload/w_900,c_scale,f_auto,q_80,e_art:incognito/v1683975035/My_project-1_eoshby.png 900w,
                            https://res.cloudinary.com/dvcx5l1vb/image/upload/w_300,c_scale,f_auto,q_80,e_art:incognito/v1683975035/My_project-1_eoshby.png 1200w"
                            alt="Igweonu ebuka"
                            width="250" height="250"
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}