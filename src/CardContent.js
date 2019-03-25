import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";


class CardContent extends React.Component {

  render() {

    const { isLoading } = this.props;

    const addCharacter = 
    <div className = "col-12"> <button type ="button" className = "btn btn-secondary"><i class="fas fa-plus-square fa-5x"></i></button></div>;
   
    const userDetails = this.props.sendData.map(index =>
      <div
        className="col-xs-12 col-md-6 col-xl-4 p-5 border border-secondary mx-auto mt-4 text-center "
        style={{ maxWidth: "300px", minHeight: "250px" }}
      >
        <img
          className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
          src={'data:image/jpeg;base64,' + index.image}
          alt={index.name}
          style={{ width: "100px", height: "100px" }}
        />
        <h4 className="border-bottom pb-2 mb-3">{index.name}</h4>
        <span className="text-muted-5">{index.shortDescription}</span>
        <div class="mt-5 btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-light"><i class="far fa-edit"></i></button>
          <button type="button" class="btn btn-light"><i class="far fa-eye"></i></button>
          <button type="button" class="btn btn-light"><i class="far trash-alt"></i></button>
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
