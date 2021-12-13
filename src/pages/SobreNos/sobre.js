import { Card, Container } from "react-bootstrap"
import { Helmet } from 'react-helmet-async';
import "./sobre.scss";

    <Helmet>
        <title>SPORT STORE | Sobre Nós</title>
    </Helmet> 

const team = [
  {
    img: "https://avatars.githubusercontent.com/u/85592809?v=4",
    name: "Lamark Neris",
    linkedin: "https://www.linkedin.com/in/lamark-neris-b9a8a8172/",
    github: "https://github.com/LamarkNeris"
  }, {
    img: "https://avatars.githubusercontent.com/u/85467074?v=4",
    name: "Leandra Ferrari Weber",
    linkedin: "https://www.linkedin.com/in/leandra-ferrari-weber/",
    github: "https://github.com/leandrafw"
  }, {
    img: "https://avatars.githubusercontent.com/u/85622591?v=4",
    name: "Leshly Ontiveros",
    linkedin: "",
    github: "https://github.com/leshlyontiveros"
  }, {
    img: "https://avatars.githubusercontent.com/u/85209669?v=4",
    name: "Lucas Silveira",
    linkedin: "https://www.linkedin.com/in/lucas-silveira-a9a8a8172/",
    github: "https://github.com/LucasSquariz"
  }, {
    img: "https://avatars.githubusercontent.com/u/85131163?v=4",
    name: "Vitor Bessoni",
    linkedin: "https://www.linkedin.com/in/vitor-bessoni-a9a8a8172/",
    github: "https://github.com/VitorBessoni"
  },
]

const TeamCards = () => {
  return (
    <>
      <Helmet>
        <title> Sobre Nós</title>
      </Helmet>
      <h1>Integrantes</h1>
      <Container fluid style={{ width: '90%', gap: '1.2rem', marginTop: '3rem' }} className="d-flex flex-wrap justify-content-center">
        {team.map(user =>

          <Card style={{ width: '20rem' }} id="userCard">
            <Card.Img variant="top" src={user.img} />
            <Card.Body>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                Web Developer
              </Card.Text>
            </Card.Body>

            <Card.Body id="iconSocial">
              <Card.Link target="_blank" href={user.linkedin}><img className="iconLinkedIn" src="https://www.freeiconspng.com/uploads/linkedin-logo-3.png" alt="linkedIn" /></Card.Link>
              <Card.Link target="_blank" href={user.github}><img className="iconGitHub" src="https://www.freeiconspng.com/uploads/github-logo-icon-20.png" alt="github" /></Card.Link>
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  )
}
export default TeamCards;