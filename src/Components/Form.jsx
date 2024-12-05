import {useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      fullName.trim().length < 5 ||
      !isValidateEmail(email)
    ) {
      setError("Por favor verifique su información nuevamente")
      setInfoMsg("")
      return;
    }
    console.log({ fullName, email});
    setInfoMsg(`Gracias ${fullName}, te contactaremos cuanto antes vía mail`);
    setError("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Nombre Completo: </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p className="text-error">{error}</p>}
      {infoMsg && <p>{infoMsg}</p>}
    </div>
  );
};


const isValidateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

export default Form;
