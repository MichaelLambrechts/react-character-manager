import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import { Card } from "shards-react";

class CardContent extends React.Component {
  
  render() {
    
    const { name, shortDescription, image, isLoading } = this.props;
    const imageURL = 'data:image/jpeg;base64,';
    const imageURL64 = imageURL + image;
    const userDetails = this.props.sendData.map(index =>
      <div>
        <img
          className="img-thumbnail rounded-circle mx-auto mb-2 shadow-sm"
          src= {index.imageURL64}
          alt={index.name}
          style={{ width: "100px", height: "100px" }}
        />
        <h4 className="mb-0">{index.name}</h4>
        <span className="text-muted">{index.shortDescription}</span>
      </div>
    );

    const loadingMessage = <span className="d-flex m-auto">Loading...</span>;

    return (
      <Card
        className="mx-auto mt-4 text-center p-5"
        style={{ maxWidth: "300px", minHeight: "250px" }}
      >
        {isLoading ? loadingMessage : userDetails}
      </Card>
    );
  }
}

CardContent.propTypes = {
  name: PropTypes.string,
  shortDescription: PropTypes.string,
  isLoading: PropTypes.bool
};

export default CardContent;
