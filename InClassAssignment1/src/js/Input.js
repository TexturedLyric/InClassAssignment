class Input extends React.Component {

    //constructor
    constructor(props){
        super(props);
        this.state = {delivery_Email: ''}; 

        this.handleEmailChange = this.handleEmailChange.bind(this);

        this.state = {delivery_Password: ''}; 

        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(event){
        const delivery_Email = event.target.value;
        this.setState( () => {
                return {
                    delivery_Email
                }
            }
        );

        const email = this.state.delivery_Email;

        this.props.handleEmail(email);
    }    


    handlePasswordChange(event){
        const delivery_Password = event.target.value;
        this.setState( () => {
                return {
                    delivery_Password
                }
            }
        );

        const Password = this.state.delivery_Password;

        this.props.handlePassword(Password);
    }    

    handleEmailSubmit(event){

        this.props.handleOrderSubmit(this.state.customer_email);
    }

    render() {
        return (
            <div className="form-group">
                <input className="form-control" 
                       id="EmailInput" 
                       onChange={this.handleEmailChange}                       
                       placeholder="Enter Email" 
                       type="input"
                       value={this.state.delivery_Email}  />
                <input className="form-control" 
                   id="PasswordInput" 
                   onChange={this.handlePasswordChange}                       
                   placeholder="Enter Password" 
                   type="input"
                   value={this.state.delivery_Password}  />
                <div className="input-group-append">
                    <button className="btn btn-primary" 
                            id="button-addon2"
                            onClick={this.handleEmailSubmit}>
                        Submit
                    </button>
                </div>
            </div>

        );
    };
}