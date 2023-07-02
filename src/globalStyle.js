import { createGlobalStyle } from 'styled-components'

export const colors = {
  body: "#f6fcff",
  main: "#59815b",
  textLight: "#fff",
  textDark: "#1E1E1E",
  textGray: "#878787",
  bgGray: "#242625",
  bgDark: "#111",
  bgLight: "fff",

}

export const fFamily = {
  text: "'Mulish', sans-serif",
  title: "'Oswald', sans-serif",
  serif: "'Crimson Text', serif",
}

export const fSize = {
  title: "3.125rem",
  text: "1rem"
}

export const transition = {
  default: "all 200ms ease-in-out",
}

export const pseudoCfg = {
  content: "''",
  display: 'block',
  position: 'absolute',
}

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${colors.body};
    font-family: ${fFamily.text};
  }

  p {
    font-family: ${fFamily.text};
    color: ${colors.textGray};
  }

  input,
  textarea,
  input::placeholder,
  textarea::placeholder {
    font-family: ${fFamily.serif};
    color: ${colors.textGray};
  }

  input:focus,
  textarea:focus{
    outline: none;
  }

  a,
  button {
    text-decoration: none;
    border: none;
    transition: ${transition.default};
    cursor: pointer;
    font-family: ${fFamily.title};
  }

  input {
    background-color: ${colors.bgLight};
    border: none;
    font-style: italic;
    padding: .75rem 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.textDark};
    font-family: ${fFamily.text};
  }

  h2 {
    text-transform: uppercase;
    font-size: ${fSize.title};
    
    span {
      position: relative;
      color: ${colors.main};
      background-color: ${colors.bgLight};
      padding: 0 10px 0 5px;
    }
  }
  
  .container .error {
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 5px;
    border-radius: 5px;
  }
  .container {
  min-height: 60vh;
  margin-bottom: 5rem;
  }
`