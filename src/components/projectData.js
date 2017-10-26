import React, {Component} from 'react';

class ProjectData extends Component {
  render() {
    let herDataList = this.props.items

    return (
      <div className="project project-list">
        <span className="project__title">{herDataList.projectName}</span>
      </div>
    )
  }
}

export default ProjectData;
