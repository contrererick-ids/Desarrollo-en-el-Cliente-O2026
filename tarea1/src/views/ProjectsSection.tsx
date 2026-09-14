const projects = [
    {
        title: "Python Blood Analysis Report Parser",
        description: "A Python application for parsing and analyzing blood test reports.",
        image: "../../src/assets/blood_analysis.jpeg",
        githubUrl: "https://github.com/your-username/blood-analysis-parser",
    },
    {
        title: "Huffman Compressor and Decompressor with C",
        description: "Implementation of the Huffman coding algorithm in C for data compression.",
        image: "../../src/assets/huffman_compressor_tree.jpg",
        githubUrl: "https://github.com/your-username/huffman-compressor",
    },
    {
        title: "Python Newsletter Platform with AWS",
        description: "A Python-based newsletter platform deployed on AWS infrastructure.",
        image: "../../src/assets/newsletter-platform.png",
        githubUrl: "https://github.com/your-username/newsletter-platform",
    },
];

function ProjectsSection() {
    return (
        <div id="projects" className="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project-card" key={project.title}>
                        <img
                            className="project-card-image"
                            src={project.image}
                            alt={project.title}
                        />
                        <div className="project-card-body">
                            <h3 className="project-card-title">{project.title}</h3>
                            <p className="project-card-description">{project.description}</p>
                            <a className="project-card-button" href={project.githubUrl} target="_blank" rel="noopener noreferrer"> View on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsSection;