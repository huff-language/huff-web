import React from 'react'

import { Container, Wrapper, Link, Nerds, Nerd, Schedule, FAQs } from './styled';
import { Logo } from '@components/main/styled'
import LinkNav from '@components/nav'
import { BsLink45Deg } from 'react-icons/bs';

const nerds: Array<{ name: string, role: string, pfp: string }> = [
  {
    name: "Aks Hually",
    role: "CEO of Nerd Inc",
    pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
  },
  {
    name: "Aks Hually",
    role: "CEO of Nerd Inc",
    pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
  },
  {
    name: "Aks Hually",
    role: "CEO of Nerd Inc",
    pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
  },
  {
    name: "Aks Hually",
    role: "CEO of Nerd Inc",
    pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
  },
  {
    name: "Aks Hually",
    role: "CEO of Nerd Inc",
    pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
  },
  {
    name: "Aks Hually",
    role: "CEO of Nerd Inc",
    pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
  },
  {
    name: "Aks Hually",
    role: "CEO of Nerd Inc",
    pfp: "https://img.wattpad.com/01ceb29dbac728b722d8e24d32ea13d3709a5bb6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f547532474a6378544e4f635f65413d3d2d313036323731333231312e313637613333343830363638373361373736333731333932363631312e6a7067?s=fit&w=720&h=720",
  },
];

const faqs: Array<{ question: string, answer: string }> = [
  {
    question: "What is the Huff Hackathon?",
    answer: "The Huff Hackathon is a virtual event where developers can learn about Huff and EVM programming, build projects, and compete for prizes. It's a great opportunity to learn, network, and collaborate with other developers.",
  },
  {
    question: "When and where is the Huff Hackathon?",
    answer: "The Huff Hackathon is a virtual event that will take place on the Huff Discord server. The event will begin on Friday, October 1st, 2021, and end on Sunday, October 3rd, 2021.",
  },
  {
    question: "How can I participate in the Huff Hackathon?",
    answer: "To participate in the Huff Hackathon, you must register on our official website. Registration is free and open to developers of all levels and backgrounds.",
  },
  {
    question: "What is the Huff Hackathon?",
    answer: "The Huff Hackathon is a virtual event where developers can learn about Huff and EVM programming, build projects, and compete for prizes. It's a great opportunity to learn, network, and collaborate with other developers.",
  },
  {
    question: "When and where is the Huff Hackathon?",
    answer: "The Huff Hackathon is a virtual event that will take place on the Huff Discord server. The event will begin on Friday, October 1st, 2021, and end on Sunday, October 3rd, 2021.",
  },
  {
    question: "How can I participate in the Huff Hackathon?",
    answer: "To participate in the Huff Hackathon, you must register on our official website. Registration is free and open to developers of all levels and backgrounds.",
  },
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
              <td>Event starts</td>
              <td>Sep 28, 4:00 PM (UTC)</td>
            </tr>
            <tr>
              <td>CTFs &amp; talks</td>
              <td>Sep 29, TDB (UTC)</td>
            </tr>
            <tr>
              <td>Workshops &amp; hackathon starts</td>
              <td>Sep 30, TDB (UTC)</td>
            </tr>
            <tr>
              <td>Hackathon ends</td>
              <td>Oct 02, TDB (UTC)</td>
            </tr>
            <tr>
              <td>Closing ceremony</td>
              <td>Oct 03, TDB (UTC)</td>
            </tr>
          </tbody>
        </Schedule>
      </Container>

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
    </Wrapper>
  )
}
