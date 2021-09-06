import styled from 'styled-components/macro'
import PinkLogo from '../../../src/assets/images/penguinparty/cbwg.png'
import './style.css'
import { VERSION } from '../../constants/misc'
// Import the required images
import HiturunkSelfie from '../../../src/assets/images/penguinparty/hiturunk.jpg'

export default function ShowTeamPage() {
  const PenguinParty = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: -1%;
    width: 70%;
    max-width: 1200px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px 20px 0 0;
  `
  const AboutText = styled.div`
    align-self: center;
    color: white;
    margin: 5%;
    padding: 2%;
  `
  const PenguinArea = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    width: 70%;
    text-align: center;
    max-width: 1200px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0px 0px 20px 20px;
    padding-bottom: 1rem;
  `
  const Hiturunk = styled.div`
    color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    align-items: center;
    margin-bottom: 5%;
  `
  const Devs = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    flex-wrap: wrap;
    place-items: center;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 100px;
  `

  const VERSION_TEXT = 'Version '.concat(VERSION)

  return (
    <>
      <PenguinParty className="penguin-party">
        <AboutText>
          <h1>ABOUT</h1>
          <p>
            <b>Penguin Party</b> is a Decentralized Governance Token Delegation focused on software deliverables to
            improve decentralized protocols and ensure protocol interoperability.
          </p>
          <p>
            <b>Penguin Swap</b> is our front-end interface which interacts with the Uniswap trading Protocol contracts
            using Penguin Swap&apos;s preferred token list and custom token / routing pairs.
          </p>
          <sup>Made at PanArka Blockchain Laboratories, Inc. - A Delaware Corporation.</sup>
        </AboutText>
      </PenguinParty>
      <PenguinArea>
        <Hiturunk>
          <p>
            <h2>
              The{' '}
              <span role="img" aria-label="penguin">
                🐧
              </span>{' '}
              Team
            </h2>
          </p>
          <img className="hiturunk" src={HiturunkSelfie} alt="" />
          <h3>Hiturunk</h3>
          CEO / Senior Developer
        </Hiturunk>

        <Devs className="devs">
          <div className="dev">
            <img className="team-photo" src={PinkLogo} alt="" />
            <h3>Andy&apos;s Wallpaper</h3>
            COO / Project Manager
          </div>

          <div className="dev">
            <img className="team-photo" src={PinkLogo} alt="" />
            <h3>FerretKnows</h3>
            Front End / React Dev.
          </div>

          <div className="dev">
            <img className="team-photo" src={PinkLogo} alt="" />
            <h3>Marduk</h3>
            Front End / React Dev.
          </div>

          <div className="dev">
            <img className="team-photo" src={PinkLogo} alt="" />
            <h3>Qonfluent</h3>
            Backend / Smart contracts
          </div>

          <div className="dev">
            <img className="team-photo" src={PinkLogo} alt="" />
            <h3>AnimalHut</h3>
            SRE
          </div>

          <div className="dev">
            <img className="team-photo" src={PinkLogo} alt="" />
            <h3>Pancake</h3>
            Sr. Dev.
          </div>

          <div className="dev">
            <img className="team-photo" src={PinkLogo} alt="" />
            <h3>Plankt0n</h3>
            Community manager
          </div>

          <div className="dev">
            <img className="team-photo" src={PinkLogo} alt="" />
            <h3>Pooryia</h3>
            Graphic Designer
          </div>
        </Devs>

        {VERSION_TEXT}
      </PenguinArea>
    </>
  )
}
