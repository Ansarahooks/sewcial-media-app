import ProjectCard from './ProjectCard.tsx';

function ProjectDisplay({ showForm }) {
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
