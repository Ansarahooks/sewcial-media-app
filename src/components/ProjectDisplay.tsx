import ProjectCard from './ProjectCard.tsx';

function ProjectDisplay() {
  return (
    <>
      <div className='projectCardDisplay' style={{ border: 'solid' }}>
        <h2>My Sewing Projects:</h2>
        <ProjectCard />
      </div>
    </>
  );
}

export default ProjectDisplay;
