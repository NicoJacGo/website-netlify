import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Section from '../components/Section';
import { CardContainer } from '../components/Card';
import Triangle from '../components/Triangle';
import Project from '../components/Project';
import { useProjectsQuery } from '../queries/useProjectsQuery';

const Projects = () => {
  const projects = useProjectsQuery();

  return (
    <Section.Container id="projects" Background={Background}>
      <Section.Header name="Projects"/>

      <CardContainer minWidth="350px">
        <Fade direction="down" cascade damping={0.5} triggerOnce>
          {projects.map((p, i) => (
            <Project {...p} key={i} />
          ))}
        </Fade>
      </CardContainer>
    </Section.Container>
  );
};

const Background = () => (
  <>
    <Triangle
      color="background"
      height={['80vh', '80vh']}
      width={['100vw', '100vw']}
      position="top-right"
    />

    <Triangle
      color="background"
      height={['50vh', '20vh']}
      width={['50vw', '50vw']}
      position="top-right"
    />

    <Triangle
      color="background"
      height={['25vh', '40vh']}
      width={['75vw', '60vw']}
      position="bottom-right"
    />

    <Triangle
      color="background"
      height={['25vh', '20vh']}
      width={['100vw', '100vw']}
      position="bottom-right"
    />
  </>
);

export default Projects;
