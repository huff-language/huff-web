import React from 'react'

import { Container, Wrapper, Link, Nerds, Nerd, Schedule, FAQs } from './styled';
import { Logo } from '@components/main/styled'
import LinkNav from '@components/nav'
import { BsLink45Deg } from 'react-icons/bs';

const nerds: Array<{ name: string, role: string, pfp: string }> = [];
//   {
//     name: "Aks Hually",
//     role: "CEO of Nerd Inc",
//     pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
//   },
//   {
//     name: "Aks Hually",
//     role: "CEO of Nerd Inc",
//     pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
//   },
//   {
//     name: "Aks Hually",
//     role: "CEO of Nerd Inc",
//     pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
//   },
//   {
//     name: "Aks Hually",
//     role: "CEO of Nerd Inc",
//     pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
//   },
//   {
//     name: "Aks Hually",
//     role: "CEO of Nerd Inc",
//     pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
//   },
//   {
//     name: "Aks Hually",
//     role: "CEO of Nerd Inc",
//     pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
//   },
//   {
//     name: "Aks Hually",
//     role: "CEO of Nerd Inc",
//     pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
//   },
// ];

const faqs: Array<{ question: string, answer: string }> = [
  {
    question: "What is the Huff Hackathon?",
    answer: "The Huff Hackathon is a virtual event where developers can learn about Huff and EVM programming, build projects, and compete for prizes. It's a great opportunity to learn, network, and collaborate with other developers."
  },
  {
    question: "When and where is the Huff Hackathon?",
    answer: "The Huff Hackathon is a virtual event that will take place on X (formerly known as Twitter) and the Huff Discord server. The event will begin on Thursday, September 28, 2023, and end on Tuesday, October 3rd, 2023."
  },
  {
    question: "How can I participate in the Huff Hackathon?",
    answer: "To participate in the Huff Hackathon, you must register on our official website. Registration is free and open to developers of all levels and backgrounds."
  },
  {
    question: "What are the key dates and deadlines for the Huff Hackathon?",
    answer: "Important dates and deadlines, including submission deadlines, will be available on our website and communicated to participants. Be sure to check the official hackathon page for updates."
  },
  {
    question: "What kind of projects are eligible for submission?",
    answer: "Projects created using Huff and related to blockchain, Ethereum, or EVM are eligible for submission. Themes and categories, if any, will be announced prior to the hackathon."
  },
  {
    question: "What is the judging criteria for the hackathon?",
    answer: "Projects will be judged based on factors such as creativity, technical innovation, functionality, and overall impact. Detailed judging criteria will be provided to participants during the event."
  },
  {
    question: "Do I need to have prior experience with Huff or EVM programming to participate?",
    answer: "While prior experience can be helpful, it is not a strict requirement. The hackathon may offer resources and support for participants to learn Huff and EVM programming during the event."
  },
  {
    question: "Can I participate as an individual or do I need to form a team?",
    answer: "You can participate either as an individual or as part of a team. The ideal team size may vary, but having diverse skills within your team can be advantageous."
  },
  {
    question: "Are there any prizes or rewards for the winners?",
    answer: "Yes, there are prizes and rewards for the winners, including cash prizes, swag, and potential opportunities to collaborate with industry experts. Details about the prizes will be announced closer to the event."
  }
];

export const Hackathon: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <div>
          <h1>Huffathon</h1>
          <h2>The World's First Huff Hackathon</h2>
          <h3 style={{ marginTop: '1vh' }}>Sep 28 - Oct 03, 2023 · Virtual</h3>
        </div>
        <Link href="https://jig79bdvw35.typeform.com/to/h3Sjvngb">
          <span>Register now to participate</span>
          {' '}
          <BsLink45Deg />
        </Link>
      </Container>

      <Container>
        <h2>About</h2>
        <p>
          Harness the dark arts of EVM with Huff, the cryptic language that
          separates wizards from muggles.
          Inscribe your name in the annals of
          crypto history by joining the Hackathon of the arcane. Embrace the
          challenge and craft spells of smart contracts that will shape the
          future!
          <br />
          <br />
          Join now to have fun and win cool prizes: moolah, swag and NFTs!
        </p>
      </Container>

      <Container>
        <h2>Schedule</h2>
        <Schedule>
          <tbody>
            <tr>
              <td className="date bottom" rowSpan={4}>28/9</td>
              <td className="activity">Opening</td>
              <td>15:00 (UTC)</td>
            </tr>
            <tr>
              <td className="activity">Workshop / office hours</td>
              <td>16:00 (UTC)</td>
            </tr>
            <tr>
              <td className="activity">Huff Challenge #0: Intro</td>
              <td>18:00 (UTC)</td>
            </tr>
            <tr>
              <td className="activity bottom">Huff Challenge #1: Optimizor War by @minaminao</td>
              <td className="bottom">22:00 (UTC)</td>
            </tr>
            <tr>
              <td className="date bottom" rowSpan={3}>29/9</td>
              <td className="activity">Huff Challenge #2: by @PraneshASP</td>
              <td>08:00 (UTC)</td>
            </tr>
            <tr>
              <td className="activity">Speaker Session: Production Huff by @jtriley</td>
              <td>13:00 (UTC)</td>
            </tr>
            <tr>
              <td className="activity bottom">Huff Challenge #3: Solady Challenge</td>
              <td className='bottom'>14:00 (UTC)</td>
            </tr>
            <tr>
              <td className="date bottom" rowSpan={2}>30/9</td>
              <td className="activity">Pre-Hackathon workshop / office hours</td>
              <td>16:00 (UTC)</td>
            </tr>
            <tr>
              <td className="activity bottom">Hackathon begins!</td>
              <td className='bottom'>17:00 (UTC)</td>
            </tr>
            <tr>
              <td className="date bottom" rowSpan={2}>02/10</td>
              <td className="activity">Hackathon ends.</td>
              <td>16:00 (UTC)</td>
            </tr>
            <tr>
              <td className="activity bottom">Speaker Session: Huffidity by @Michaels</td>
              <td className='bottom'>17:00 (UTC)</td>
            </tr>
            <tr>
              <td className="date">03/10</td>
              <td className="activity">Closing ceremony with Mystery speaker</td>
              <td>13:00 (UTC)</td>
            </tr>
          </tbody>
        </Schedule>
      </Container >

      <Container>
        <h2>Speakers &amp; Judges</h2>
        <Nerds>
          {nerds.map((nerd) => (
            <Nerd>
              <img
                key={nerd.name}
                src={nerd.pfp}
                alt={nerd.name}
              />
              <p className="nerd-name">{nerd.name}</p>
              <p className="nerd-role">{nerd.role}</p>
            </Nerd>
          ))}
        </Nerds>
      </Container>

      <Container>
        <h2>Frequently Asked Questions</h2>
        <FAQs>
          {faqs.map((faq) => (
            <li key={faq.question}>
              <details>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            </li>
          ))}
        </FAQs>
      </Container>
      <Container>
        <LinkNav />
      </Container>
    </Wrapper >
  )
}
