import React from "react"
import styled from "styled-components"

const ParnetContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
  }
  margin-bottom: 10px;
`
const Input = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
}))`
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) =>
    theme.colors.background === "#121212" ? "white" : "#121212"};
  font-size: 0.875rem;
  padding: 1rem;
  width: 100%;
  &:focus {
    border: 1px solid;
    outline: none;
  }
`

const TextArea = styled.textarea`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid black;
  padding: 1rem;
  font-size: 0.875rem;
  background: ${({ theme }) => theme.colors.background};
  height: 100px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
  &:required {
    outline: none;
    border: 1px solid tomato;
  }
`
const Button = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  padding: 1rem;
  margin: 0 ${({ center }) => (center ? "auto" : "0")};
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-decoration: none;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  &:hover,
  &:focus,
  &:active {
    cursor: pointer;
    outline: none;
  }
  svg {
    height: 1rem;
    width: 1rem;
    margin-right: 0.3rem;
    margin-bottom: -0.175rem;
  }
`

const ChildDiv = styled.div.attrs(props => ({
  margin: props.margin || "0px",
}))`
  flex-grow: 1;
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: ${props => props.margin};
  }
  margin-bottom: ${props => props.bottomMargin};
`

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

  return (
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <ParnetContainer>
        <ChildDiv margin="10px" bottomMargin="10px">
          <Input
            name="name"
            onChange={handleChange}
            placeholder="First name"
            required
          />
        </ChildDiv>
        <ChildDiv>
          <Input
            name="email"
            onChange={handleChange}
            placeholder="example@gmail.com"
          />
        </ChildDiv>
      </ParnetContainer>
      <TextArea
        name="message"
        onChange={handleChange}
        placeholder="your message"
      />

      <Button type="submit" textAlign="center">
        Submit
      </Button>
    </form>
  )
}
