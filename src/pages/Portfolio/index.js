import React from "react";
import { ProjectsArr } from "../../utils/Projects";
import RowContainer from "../../components/RowContainer";
import ProjectImage from "../../components/ProjectImage"
import Line from "../../components/Line";

function Portfolio() {

    return (
        ProjectsArr.map((project, index) => (
            <div key={project.id}>
                {index !== 0 ? <Line /> : ""}
                <RowContainer>
                    <div className="col-lg-1"></div>
                    <ProjectImage title={project.title} image={project.image} />

                    <div className="col-lg-5">
                        <div className="text-center mt-3">
                            <h3 className="text-info"><u>{project.title}</u></h3>
                            <div className="text-secondary">{project.description}
                            </div>
                            <div className="text-secondary"><em>{project.languages.map((languages, index, arr) => {
                                if (index === arr.length - 1) {
                                    return languages
                                } else {
                                    return languages + " | "
                                }
                            })}</em>
                            </div>
                        </div>
                        {/* Component? */}
                        <div className="row">
                            <div className="col-1"></div>
                            <div className="col-5">
                                <a href={project.github}><button type="button"
                                    className="btn btn-info rounded"><i className="fab fa-github"></i>
                                      Github</button></a>
                            </div>
                            <div className="col-5">
                                <a href={project.deployed ? project.deployed : project.demo}><button type="button"
                                    className="btn btn-info rounded"><i className={project.deployed ? "far fa-see" : "fab fa-youtube"}></i>{project.deployed ? "View Deployed" : "View Demo"}</button></a>
                            </div>
                        </div>
                    </div>
                </RowContainer>
            </div>
        ))
    )
};

export default Portfolio;