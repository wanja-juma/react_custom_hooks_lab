import useLocalStorage from "../hooks/useLocalStorage.js";

function Form() {

  /*
    Store name in localStorage
  */
  const [name, setName] =
    useLocalStorage("name", "");

  /*
    Store service number in localStorage
  */
  const [serviceNumber, setServiceNumber] =
    useLocalStorage("serviceNumber", "");

  return (
    <>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* Name Input */}
        <label htmlFor="name">
          Name:
        </label>

        <input
          id="name"
          type="text"
          data-testid="name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        {/* Service Number Input */}
        <label htmlFor="service">
          Service Number:
        </label>

        <input
          id="service"
          type="text"
          data-testid="service"
          value={serviceNumber}
          onChange={(e) =>
            setServiceNumber(e.target.value)
          }
        />

      </form>

      <h4>
        {name
          ? `Welcome, ${name}!`
          : "Enter your name"}
      </h4>

    </>
  );
}

export default Form;