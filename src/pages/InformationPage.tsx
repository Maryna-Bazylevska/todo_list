import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const InformationPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="container">
      <h2 className="title">Information Page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        nesciunt, ducimus quo, eius nemo facilis laborum quod sequi provident
        aspernatur inventore dignissimos laudantium pariatur consequatur labore
        nisi sunt saepe. Dignissimos, voluptates minima tempora a impedit totam
        accusantium autem fugiat rem nostrum expedita recusandae quisquam
        doloremque illo optio obcaecati ea. Repudiandae illo molestias iure
        voluptate optio aliquid nemo ipsum iusto eaque.
      </p>
      <button
        className="btn pink lighten-1"
        type="button"
        onClick={() => navigate(location?.state?.from ?? "/")}
      >
        RETURN TO TODO LIST
      </button>
    </div>
  );
};
export default InformationPage;
