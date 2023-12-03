import caseStudyCover from "../assets/img/case-study-front/eir-case-cover@2x.png";
import caseStudyCoverMobile from "../assets/img/case-study-front/eir-mobile-cover@2x.png";
const projectsData = [
  {
    id: 1,
    title: `Eir's UX Design: Embracing SaaS at version 1.0`,
    caseStudyCover: caseStudyCover,
    caseStudyCoverMobile: caseStudyCoverMobile,
    overview:
      "Welcome to Eir's user-centric innovation. I'm Wellington Alexander, your Lead Product Designer, and we're on a transformative journey.",
    process: "Design process for Project 1",
    toolkit: "Design toolkit for Project 1",
    tag: "React",
    content: {
      sections: [
        {
          type: "text",
          heading: "Section 1",
          content: "Text content for Section 1",
        },
        {
          type: "image",
          imageSrc: "image1.jpg",
          caption: "Caption for Image 1",
        },
      ],
    },
  },
  // {
  //   id: 2,
  //   title: "Project 2",
  //   caseStudyCover: "../assets/img/case-study-front/case.png",
  //   overview: "Overview for Project 2",
  //   process: "Design process for Project 2",
  //   toolkit: "Design toolkit for Project 2",
  //   tag: `<li className="tag"><span className="font">React</span></li>`,

  //   content: {
  //     sections: [
  //       {
  //         type: "text",
  //         heading: "Section 1",
  //         content: "Text content for Section 1",
  //       },
  //       {
  //         type: "image",
  //         imageSrc: "image1.jpg",
  //         caption: "Caption for Image 1",
  //       },
  //       {
  //         type: "text",
  //         heading: "Section 2",
  //         content: "Additional text content for Section 2",
  //       },
  //       {
  //         type: "image",
  //         imageSrc: "image2.jpg",
  //         caption: "Caption for Image 2",
  //       },
  //     ],
  //   },
  // },
];

export default projectsData;
