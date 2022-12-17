
function ColorBox({ color }){
    const styles = {
      backgroundColor: color ,
      height: "35px",
      weight: "33px",
      marginTop: "10px",
    };
  
    return <div style={styles}></div>;
  }

  export { ColorBox };