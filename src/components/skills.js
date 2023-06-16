import { useState, useRef, useEffect } from "react"
export default function SkillsSection() {
    return (
        <section className="skills_section" id="skills">
            <h2>Technologies</h2>
            <Skill_1 />
            <Skill_2 />
            <Skill_3 />
            <Skill_4 />
            <Skill_5 />
            <Skill_6 />
            <Skill_7 />
        </section>
    )
}

const Skill_1 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }, { threshold: 0.2 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('html_bar_fill');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned])
    return (
        <div className="skill_bar_section">
            <div className="details">
                <span>Html</span>
                <span>90%</span>
            </div>
            <div className="bar">
                <div id="html_bar" ref={ref}></div>
            </div>
        </div>
    )
}

const Skill_2 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }, { threshold: 0.2 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('css_bar_fill');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <div className="skill_bar_section">
            <div className="details">
                <span>Css</span>
                <span>90%</span>
            </div>
            <div className="bar">
                <div id="css_bar" ref={ref}></div>
            </div>
        </div>
    )
}

const Skill_3 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }, { threshold: 0.2 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('js_bar_fill');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <div className="skill_bar_section">
            <div className="details">
                <span>Javascript</span>
                <span>85%</span>
            </div>
            <div className="bar">
                <div id="js_bar" ref={ref}></div>
            </div>
        </div>
    )
}

const Skill_4 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }, { threshold: 0.2 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('react_bar_fill');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <div className="skill_bar_section">
            <div className="details">
                <span>React</span>
                <span>80%</span>
            </div>
            <div className="bar">
                <div id="react_bar" ref={ref}></div>
            </div>
        </div>
    )
}

const Skill_5 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }, { threshold: 0.2 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('git_bar_fill');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <div className="skill_bar_section">
            <div className="details">
                <span>Git</span>
                <span>50%</span>
            </div>
            <div className="bar">
                <div id="git_bar" ref={ref}></div>
            </div>
        </div>
    )
}
const Skill_6 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }, { threshold: 0.2 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('webpack_bar_fill');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <div className="skill_bar_section">
            <div className="details">
                <span>Webpack</span>
                <span>60%</span>
            </div>
            <div className="bar">
                <div id="webpack_bar" ref={ref}></div>
            </div>
        </div>
    )
}
const Skill_7 = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasTransitioned, setHasTransitioned] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }, { threshold: 0.2 });
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        if (isIntersecting && !hasTransitioned) {
            ref.current.classList.add('linux_bar_fill');
            setHasTransitioned(true);
        }
    }, [isIntersecting, hasTransitioned]);
    return (
        <div className="skill_bar_section">
            <div className="details">
                <span>Linux</span>
                <span>40%</span>
            </div>
            <div className="bar">
                <div id="linux_bar" ref={ref}></div>
            </div>
        </div>
    )
}