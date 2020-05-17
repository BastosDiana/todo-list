import { connect } from 'react-redux';
import ProjectList from '../components/projects/ProjectList';
import { toggleTask, addTask } from '../state/actions/projects';

const mapStateToProps = state => ({
    projects: state.projects,
    auth: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
    onProjectTaskToggle: (projectId, taskId) => dispatch(toggleTask(projectId, taskId)),
    onProjectAddTask: (projectId, description) => dispatch(addTask(projectId, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
