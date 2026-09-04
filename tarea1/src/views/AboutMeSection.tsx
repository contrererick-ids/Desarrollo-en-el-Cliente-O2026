function AboutMeSection() {
    return (
        <div id="about-me" className="about-me-section">
            <h2>About Me</h2>
            <div className="about-description">
                <div className="about-text">
                    <p>I'm a curious and self-taught software developer. I'm more focus to web development but also interested in mobile, native development and data science.</p>
                    <p>Currently working hard on Quick-Chem, a FastAPI + React project aim to provide quick, easy and useful tools for chemistry students.</p>
                </div>
                <div className="experience-education-list">
                    <div className="experience-list">
                        <h3><i className="bi bi-briefcase-fill"></i>Experience</h3>
                        <ul>
                            <h4>TyT Contact Center (2023 - Present)</h4>
                            <p>Customer Service for Corporate Accounts</p>
                            <h4>Herbalife (2021-2022)</h4>
                            <p>Data Scientist Intern</p>
                            <h4>Instituto de Capacitación Lagos (2022 - Present)</h4>
                            <p>Graphic Design Instructor</p>
                        </ul>
                    </div>
                    <div className="education-list">
                        <h3><i className="bi bi-book-fill"></i> Education</h3>
                        <ul>
                            <h4>Instituto Tecnológico y de Estudios Superiores de Occidente (ITESO)</h4>
                            <p>Bachelor of Science in Software Development (Expected Grad Date: Dec 2027)</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMeSection;