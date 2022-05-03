import './Window.scss';
import WindowBar from './WindowBar';


const Window = (props) => {

    return (
        <div className="window">
            <WindowBar title={props.title} right={props.right} />
            <div className="window-content">
                {props.children}
            </div>
        </div>
    );
}

export default Window;