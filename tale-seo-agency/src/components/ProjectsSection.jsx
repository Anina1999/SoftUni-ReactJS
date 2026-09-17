import ProjectItem from "./ProjectItem";

const projects = [
    {
        imageUrl: "assets/images/projects-01.jpg",
        altText: "digital agency",
        title: "Digital Agency HTML Templates",
        link: "#",
    },
    {
        imageUrl: "assets/images/projects-01.jpg",
        altText: "digital agency",
        title: "Digital Agency HTML Templates",
        link: "#",
    },
    {
        imageUrl: "assets/images/projects-02.jpg",
        altText: "admin dashboard",
        title: "Admin Dashboard CSS Templates",
        link: "#",
    },
    {
        imageUrl: "assets/images/projects-03.jpg",
        altText: "responsive layouts",
        title: "Best Responsive Website Layouts",
        link: "#",
    },
    {
        imageUrl: "assets/images/projects-04.jpg",
        altText: "HTML CSS Layouts",
        title: "HTML CSS Layouts for your websites",
        link: "#",
    },
    {
        imageUrl: "assets/images/projects-02.jpg",
        altText: "Bootstrap 5 Themes",
        title: "Bootstrap 5 Themes for Free",
        link: "#",
    },
    {
        imageUrl: "assets/images/projects-03.jpg",
        altText: "Mobile Friendly Website Layouts",
        title: "Mobile Friendly Website Layouts",
        link: "#",
    },
];

export default function ProjectsSection() {
    return (
        <div className="projects section" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>
                                Discover Our <em>Work</em> &amp; <span>Projects</span>
                            </h2>
                            <div className="line-dec" />
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doers
                                eiusmod.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="projects-grid">
                            {projects.map((project, index) => (
                                <ProjectItem
                                    key={index}
                                    imageUrl={project.imageUrl}
                                    altText={project.altText}
                                    title={project.title}
                                    link={project.link}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
