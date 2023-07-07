export const customStyles = {
    container: (provided) => ({
      ...provided,
      margin: "10px 0",
      width: "200px" ,  
    }),
    control: (provided) => ({
      ...provided,
      border: "1px  gray",
      backgroundColor : "#eee",
      borderRadius: "30px",
      boxShadow: "none",
    }),
    menu: (provided) => ({
      ...provided,
      boxShadow: "none",
      borderRadius: "0px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "blue" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "blue",
        color: "white",
      },
    }),
  };
  