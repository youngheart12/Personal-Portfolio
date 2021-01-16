import React, { useState, useEffect } from "react"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function contactForm() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => alert("submitted"))
      .catch(error => alert(error))
  }

  console.log(state)
  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "10px 0px",
          flexGrow: "1",
        }}
      >
        <div style={{ flexGrow: "1", marginRight: "10px" }}>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="First name"
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #110c11",
            }}
          ></input>
        </div>
        <div style={{ flexGrow: "1" }}>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="example@gmail.com"
            style={{
              width: "100%",
              padding: "8px 12px",
              borderRadius: "4px",
              border: "1px solid #110c11",
            }}
          ></input>
        </div>
      </div>
      <textarea
        name="message"
        onChange={handleChange}
        placeholder="your message"
        style={{
          width: "100%",
          padding: "8px 12px",
          borderRadius: "4px",
          border: "1px solid #29c7ac",
          marginBottom: "16px",
          height: "100px",
        }}
      ></textarea>

      <button
        type="submit"
        style={{
          backgroundColor: "mediumseagreen",
          color: "white",
          textAlign: "center",
          padding: "8px 12px",
          borderRadius: "4px",
        }}
      >
        Submit
      </button>
    </form>
  )
}
