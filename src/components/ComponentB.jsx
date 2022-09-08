import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponentB = ({ name, lastName, email, conected, updateState }) => {
  const [state, setState] = useState(conected);

  const handleToogle = () => {
    setState(!state);
    updateState(state);
  };

  return (
    <div>
      <h4>{name}</h4>
      <h4>{lastName}</h4>
      <h4>{email}</h4>
      <button type={"submit"} onClick={handleToogle}>
        {state ? "Contacto En Línea" : " Contacto No Disponible"}
      </button>
    </div>
  );
};

ComponentB.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  conected: PropTypes.bool,
};

export default ComponentB;
