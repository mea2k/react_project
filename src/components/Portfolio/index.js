import { useEffect, useState } from "react";
import { Filters, Projects } from "./const";
import ProjectList from "./ProjectList"
import Toolbar from "./Toolbar"


const Portfolio = () => {

    const [selectedFilter, setSelectedFilter] = useState('');

    let filteredProjects = [];
    if (Projects) {
        Projects.map((v) => {
            if (!selectedFilter || selectedFilter === 'All' || v.category === selectedFilter )
                filteredProjects.push(v);
        })

       // console.log("Total: " + filteredProjects.length);
    }

    function selectFilter(filter) {
        console.log(filter);
        setSelectedFilter(filter);
    }



    return (
        <div>
            <h1>Portfolio</h1>
            <h3>Компонент Portfolio</h3>
            <Toolbar
                filters={Filters}
                selected={selectedFilter}
                handleSelectFilter={selectFilter}
            />
            <ProjectList projects={filteredProjects} />
        </div>
    )
};



export default Portfolio;