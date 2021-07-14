import GitHubIcon from '@material-ui/icons/GitHub';
import Chip from '@material-ui/core/Chip';

function ProjectDisplay({title, description, githubLink, pic, demoLink}) {
    const handleClick = () => {

    }

    return(
        <div>
            <h2>{title}</h2>
            <div className='project'>
              <div style={{width: "80%"}}>
                <p>{description}</p>
                <a className='project-tag' href={githubLink} target='_blank'><Chip icon={<GitHubIcon />} color='primary' label='Github link' onClick={handleClick} /></a>
                {
                    demoLink != null && 
                    <a className='project-tag' href={demoLink} target='_blank'><Chip color='primary' label='Live demo' onClick={handleClick} /></a>
                }
              </div>
              <img style={{width: "20rem",height: "15rem", padding: "3rem"}} src={pic} alt='Pic of project' />
            </div>
        </div>
    )
}

export default ProjectDisplay;