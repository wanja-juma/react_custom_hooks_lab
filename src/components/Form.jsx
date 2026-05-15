import React from "react";

import useLocalStorage
  from "../hooks/useLocalStorage";

function UserForm() {

  /*
    Store name in localStorage
    using key "name"
  */
  const [name, setName] =
    useLocalStorage("name", "");

  /*
    Store service number in localStorage
    using key "serviceNumber"
  */
  const [serviceNumber, setServiceNumber] =
    useLocalStorage(
      "serviceNumber",
      ""
    );

  return (
    <form>

      <h2>User Form</h2>

      {/* Name Input */}
      <input
        data-testid="name"
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      {/* Service Number Input */}
      <input
        data-testid="serviceNumber"
        type="text"
        placeholder="Enter service number"
        value={serviceNumber}
        onChange={(e) =>
          setServiceNumber(e.target.value)
        }
      />

    </form>
  );
}

export default UserForm;