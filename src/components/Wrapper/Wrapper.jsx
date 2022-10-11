import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Wrapper.scss";
import PropTypes from "prop-types";

const Wrapper = ({ title, icon, children, className }) => {
  const classes = className + " wrapper";
  return (
    <div className={classes}>
      <div className="wrapper__container">
        <p className="wrapper__head">
          <FontAwesomeIcon icon={icon} /> &nbsp; {title}
        </p>
        {children}
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.object,
  className: PropTypes.string,
};

export default Wrapper;
