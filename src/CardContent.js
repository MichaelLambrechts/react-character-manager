import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { HashRouter as Router, Route, Link } from "react-router-dom";


class CardContent extends React.Component {

  render() {
    const { isLoading } = this.props;
    const addCharacter =
      <div className="col-12"> 
      <Link to={"/Add"} type="button" className="mb-5 btn btn-secondary"><i class="fas fa-plus-square fa-5x"></i></Link>
      </div>

    const userDetails = this.props.sendData.map(index =>
      <div
        className="col-xs-12 col-md-6 col-xl-4 p-5 border border-secondary mx-auto mt-4 text-center d-flex flex-column"
        style={{ maxWidth: "300px", minHeight: "250px" }}
      >
        <div className="mb-auto">
          <img
            className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
            src={'data:image/jpeg;base64,' + index.image}
            alt={index.name}
            style={{ width: "100px", height: "100px" }}
          />
          <h4 className="border-bottom pb-2 mb-3">{index.name}</h4>
          <span className="text-muted-5">{index.shortDescription}</span>
        </div>
        
          <div class="mt-5 btn-group" role="group" aria-label="Basic example">
            <Link to={`/Edit/${index.id}`} type="button" class="btn btn-light"><i class="far fa-edit fa-2x"></i></Link>
            <Link to={`/See/${index.id}`} type="button" class="btn btn-light"><i class="far fa-eye fa-2x"></i></Link>
            <Link to={`/Delete/${index.id}`} type="button" class="btn btn-light"><i class="fas fa-trash-alt fa-2x"></i></Link>
          </div>
      </div>

    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (

      <div className="d-flex flex-wrap mt-5">
        {addCharacter}
        {isLoading ? loadingMessage : userDetails}
      </div>
    );
  }
}
export default CardContent;
