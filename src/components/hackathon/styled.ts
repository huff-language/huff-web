import styled from 'styled-components'

export const Wrapper = styled.div`
  background-image: url("./overlay.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  gap: 12vh;
  align-items: center;
  padding-top: 8vh;
  padding-bottom: 8vh;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  gap: 4vh;

  h1 {
    font-size: 5.5rem;
    font-family: 'Roboto Mono', sans-serif;
    line-height: .9;
    margin: 0;
    text-align: center;
  }

  h2 {
    font-size: 3.25rem;
    font-weight: bold;
    margin: 0;
    text-align: center;
    font-family: "Roboto Mono", sans-serif;
    text-decoration: underline;
    text-decoration-color: #4242c7;
    text-decoration-thickness: 5px;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
    font-family: "Roboto", sans-serif;
  }

  p {
    line-height: 1.25;
    font-size: 1.4rem;
    margin: 0;
  }
`;

export const Link = styled.a`
  background-color: #4242c7;
  text-decoration: none;
  padding: 1.5vh 2.75vw;
  border-radius: 8px;
  font-size: 1.25rem;
  font-family: 'Roboto Mono';
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.accent0};
    color: #4242c7;
  }
`;

export const Nerds = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4vw;
`;

export const Nerd = styled.div`
  display: flex;
  flex-direction: column;

  img {
    border-radius: 999px;
    width: 100%;
    margin-bottom: 1vh;
  }

  p {
    margin: 0;
    text-align: center;
  }

  .nerd-name {
    color: #4242c7;
    font-size: 3vh;
    font-family: "Roboto Mono", sans-serif;
  }

  .nerd-role {
    font-size: 2.25vh;
  }
`;

export const Schedule = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;

  td {
    font-size: 3vh;
    padding: 2vh 1vh;
  }

  tr {
    border-bottom: 2px solid white;
  }

  tr:last-child {
    border-bottom: none;
  }

  td:first-child {
    text-align: left;
    font-family: "Roboto Mono", sans-serif;
  }

  td:last-child {
    font-size: 2.25vh;
    text-align: right;
    font-weight: 400;
    color: #4242c7;
  }
`;

export const FAQs = styled.div`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  li {
    margin-bottom: 2.5vh;
  }

  li:last-child {
    border-bottom: none;
  }

  li details p {
    font-weight: 400;
    margin-top: 2vh;
    font-size: 2.5vh;
    margin-left: 4vw;
  }

  summary {
    font-weight: 500;
    cursor: pointer;
    font-size: 3vh;
    font-family: "Roboto Mono", sans-serif;
  }

  summary::marker {
    color: #4242c7;
    float: right;
  }
`;
