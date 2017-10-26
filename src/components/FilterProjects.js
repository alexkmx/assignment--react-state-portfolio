import React, { Component } from 'react';
import { projectData } from '../data/datasource';
// import ProjectData from './projectData';

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`

       <div className="project project--«...PROJECT-TYPE...»">
         <span className="project__title">«...PROJECT-NAME...»</span>
       </div>

       -- substitute values for PROJECT-TYPE and PROJECT-NAME


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state

        Hint: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() in the render() method `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() then .map()
 */



class FilterProjects extends Component {
constructor(){
  super();
  this.state = {
    dataType: 'all'
  }
}

_clicked(val) {
  this.setState({
    dataType: val
  })
}

viewList(projectData) {
  let jsxArray = projectData.map(function(userObj) {

    let userClassValStatus
    let statusText

    if(userObj.solo === true){
      statusText = true
      userClassValStatus = 'project project--solo'
    }else {
      statusText = false
      userClassValStatus = 'project project--team'
    }

    return (
      <div className={userClassValStatus}>
        <span className="project__title">{userObj.projectName}</span>
      </div>
    )
  })
  return jsxArray
}

  render() {

    // let herProjects = projectData.map(function(obj) {
    //   // console.log(obj);
    //   return <ProjectData items={obj} />
    // })

    let herLists = projectData.filter(user => {
      if(this.state.dataType === 'all')
      return true;
      if(user.solo === true && this.state.dataType === 'true')
      return true;
      if(user.solo === false && this.state.dataType === 'false')
      return true;
      })

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" className="project-type project-type--all project-type--selected"onClick={ ()=>{this._clicked('all') } }>
              All
            </span>

            <span data-ptype="solo" className="project-type project-type--solo "onClick={ ()=>{this._clicked('true') } }>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className="project-type project-type--team"onClick={ ()=>{this._clicked('false') } }>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>


          {this.viewList(herLists)}

          </div>
        </section>

    );
  }
}

export default FilterProjects;
