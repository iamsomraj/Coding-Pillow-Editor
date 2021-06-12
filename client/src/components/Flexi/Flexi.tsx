import { Resizable } from "re-resizable";

// interface FlexiProps {

// }

const Flexi: React.FC = (props) => {
  const style = {
    borderLeft: "solid 3px #444",
    borderRight: "solid 3px #444",
  };

  return (
    <Resizable
      bounds="parent"
      style={style}
      minWidth="90%"
      minHeight="100%"
      defaultSize={{
        width: "100%",
        height: "90%",
      }}
    >
      {props.children}
    </Resizable>
  );
};

export default Flexi;
