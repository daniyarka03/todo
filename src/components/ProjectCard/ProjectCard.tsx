import "./ProjectCard.css";

const ProjectCard = ({name, numberTasks, completedTasks, cover}:
                         {
                             name: string,
                             numberTasks: number,
                             completedTasks: number,
                             cover: string
                         }) => {
    return (
        <div className="project-card">
            <div className="cover" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url(${cover})`,
            }}>
                <div className="cover-content">
                    <h2 className="cover-content__title">{name}</h2>
                    <div className="progress-container">
                        <div className="progress-bar">
                            <div className="progress-fill"
                                 style={{height: `${(completedTasks / numberTasks) * 100}%`}}></div>
                        </div>
                        <div className="progress-info">
                            <span className="progress-bar__number">{completedTasks}/{numberTasks}</span>
                            <span className="progress-bar__text">tasks</span>
                        </div>
                        {/* /.progress-info */}
                    </div>
                </div>
                <div className="control-container">
                    <button className="control-button control-button__info">...</button>
                    <button className="control-button control-button__add">+</button>
                </div>{/* /.control-container */}
            </div>
        </div>
    );
};

export default ProjectCard;