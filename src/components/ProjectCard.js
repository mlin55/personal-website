const ProjectCard = ({
  image,
  title,
  description,
  githubLink = "",
  link = "",
}) => {
  return (
    <div className="card-container">
      <div className="card medium">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" id="card-image" src={image} />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {title}
            <i class="material-icons right">more_vert</i>
          </span>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {title}
            <i class="material-icons right">close</i>
          </span>
          <p>{description}</p>
          <span className="icon-container">
            {githubLink && (
              <a target="_blank" href={githubLink} className="icon">
                <i class="bi bi-github"></i>
              </a>
            )}
            {link && (
              <a target="_blank" href={link} className="icon">
                <i class="bi bi-link"></i>
              </a>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
