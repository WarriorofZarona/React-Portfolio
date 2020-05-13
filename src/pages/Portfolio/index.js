import React from "react";
import { ProjectsArr } from "../../utils/Projects";
import RowContainer from "../../components/RowContainer";
import ProjectImage from "../../components/ProjectImage"
import Line from "../../components/Line";
import ColSpacer from "../../components/ColSpacer";
import ContentWrapper from "../../components/ContentWrapper";
import ProjectContent from "../../components/ProjectContent"

function Portfolio() {

    return (
        ProjectsArr.map((project, index) => (
            <div key={project.id}>
                {index !== 0 ? <Line /> : ""}
                <RowContainer>
                    <ColSpacer />
                    <ProjectImage
                        title={project.title}
                        image={project.image} />
                    <ContentWrapper>
                        <ProjectContent
                            title={project.title}
                            description={project.description}
                            languages={project.languages} />
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
                    </ContentWrapper>
                </RowContainer>
            </div>
        ))
    )
};

export default Portfolio;