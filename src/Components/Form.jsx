import {useState} from "react";


const Form = () => {
  const [data, setData] = useState({
    fullName: "",
    email: ""
  });
  const [error, setError] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      data.fullName.trim().length < 5 ||
      !isValidateEmail(data.email)
    ) {
      setError("Por favor verifique su información nuevamente")
      setInfoMsg("")
      return;
    }
    console.log(data.fullName, data.email);
    setInfoMsg(`Gracias ${data.fullName}, te contactaremos cuanto antes vía mail`);
    setError("")
  }

  return (
    <div className="form-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre Completo: </label>
          <input
            id="fullName"
            type="text"
            value={data.fullName}
            onChange={(event) => setData({...data, fullName: event.target.value})}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            value={data.email}
            onChange={(event) => setData({...data, email: event.target.value})}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {infoMsg && <p className="success-message">{infoMsg}</p>}
    </div>
  );
};


const isValidateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

export default Form;
