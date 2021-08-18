import React, {Component} from "react"

function Project(props){
return (
<div className="container"> 
  <div class="row">
  <div class="col s12 m6">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">{props.title}</span>
        <p>{props.description}</p>
      </div>
      <div class="card-action">
        <a href={props.github}>Github</a>
        <a href={props.app}>App</a>
      </div>
    </div>
  </div>
</div>
</div> 
        )
    }

export default Project