import Home from "../pages/Home";
const Tugas7 = (props) => {
  return (
    <>
      <h1>Data diri peserta kelas React.js</h1>
      <div>
        <p>name: {props.name}</p>
        <p>batch: {props.batch}</p>
        <p>email: {props.email}</p>
      </div>
    </>
  );
};

export default Tugas7;
