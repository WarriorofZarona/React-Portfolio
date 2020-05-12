import React, { useState, useEffect } from "react";
import { ProjectsArr } from "../utils/Projects";

function Portfolio() {

    return (
        ProjectsArr.map(project => (
            <div>
                <hr className="my-3" />

                <div className="row">

                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <img src={project.image}
                            className="rounded mx-auto d-block img-fluid img-thumbnail imgsize" alt={project.title} />

                    </div>

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
                </div>
            </div>
        ))
    )
};

export default Portfolio;