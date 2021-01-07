import React from "react";

const Description = ({match,movieList}) => {
  
  return (
    <div>
      {movieList
        .filter((el) => el.Title === match.params.Title)
        .map((el) => (
          <div key={el.Title}>
            <h3>{el.Title}</h3>
            <p>{el.Description}</p>
            <iframe width="420" height="315" src={el.trailer}></iframe>
          </div>
        ))}
    </div>
  );
};

export default Description;
