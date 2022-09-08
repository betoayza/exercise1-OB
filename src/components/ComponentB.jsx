import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponentB = ({ name, lastName, email, conected }) => {
  const [state, setState] = useState(conected);

  const handleToogle = () => {
    setState(!state);
  };

  return (
    <div>
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
