import ContentBackground from '../../assets/content.svg';

const styles = {
  BackgroundSVG: {
    background: `#677bab url(${ContentBackground}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Background: {
    background: '#88a2c4',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: '700px',
    width: '90%',
    minHeight: '900px',
    textAlign: 'center',
    margin: '128px auto',
    borderRadius: '10px',
    paddingBottom: '32px',
    overflowY: 'auto',
  },
  todoText: {
  color: '#ffffff',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  backgroundColor: '#4a5568',
  padding: '0.5rem 1rem',
  marginLeft: '10px',
  display: 'inline-block',
},


  bulletList: {
    listStyleType: 'none',
    padding: 0,
  },
  bulletListItem: {
    color: 'black',
    position: 'relative',
    paddingLeft: '20px',
  },
  bulletPoint: {
    color: '#E5FFCF',
    position: 'absolute',
    left: '0',
    fontSize: '1.5rem',
    top: '-8px',
  },
  todoText: {
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#4a5568',
    padding: '0.5rem 1rem',
    borderRadius: '10px',
  },
  imageBulletPoint: {
  width: '24px',  // Dostosuj szerokość obrazu do swoich potrzeb
  height: '24px',  // Dostosuj wysokość obrazu do swoich potrzeb
  marginRight: '30px',  // Dodaj odstęp między obrazem a treścią
  float: 'left',
},
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    outline: 'none',
  },
  editButton: {
    backgroundColor: '#003366',
    width: '50px',
    height: '25px',
    cursor: 'pointer',
    color: 'white',
    borderRadius: '50px',
    right: "20px",
    top: ' 0px',
  },
  deleteButton: {
  background: '#f44336',
  width: '25  px',
  height: '25px',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 'bold',
  color: '#fff',
  borderRadius: '100px',
  position: 'absolute',
  right: '20px',  
  top: ' 0px', 
},
editBox: {
  display: 'flex',
  justifyContent: 'space-between',
  right: '-20px',
},


  hr: {
    border: '1px solid black',
    width: '85%',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: 'white',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#003366',
    color: 'white',
    borderRadius: '70px',
  },
  saveButton: {
    width: '100px',
    height: '30px',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    backgroundColor: '#003366',
    color: 'white',
    borderRadius: '50px',
    position: 'absolute',
    bottom: '50px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  exitBtn: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    background: 'purple',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    padding: '10px 30px',
  },
  '@media (max-width: 768px)': {
    Background: {
      width: '95%',
      margin: '64px auto',
    },
  },
};

export default styles;
