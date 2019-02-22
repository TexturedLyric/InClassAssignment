class MainComponent extends React.Component {

    //constructor
    constructor(props){
        super(props);
    } 

    render() {
        return (
            <div className="container">
                <Input />
            </div>
        );
    };
}
var root = document.getElementById('root');
ReactDOM.render(<MainComponent/>, root);