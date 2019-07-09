import React, {Component} from 'react';

import CheckBox from './formComponents/CheckBox';
import Input from './formComponents/Input';
import TextArea from './formComponents/TextArea';
import Select from './formComponents/Select';
import Button from './formComponents/Button'

class AddCustomerForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
        newUser: {
          name: '',
          email: '',
          age: '',
          gender: '',
          expertise: '',
          about: '',
          skills: ['Programming', 'Development']
        },
        genderOptions: ['Male', 'Female', 'Others'],
        skillOptions: ['Programming', 'Development', 'Design', 'Testing']
    }

    this.handleInputControl = this.handleInputControl.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleCheckBox(event) {
    let value = event.target.value;
    let checked = event.target.checked;
    if(checked){
        this.setState((previousState)=>{
            return previousState.newUser.skills.push(value);
        })
    } else {
        this.setState((previousState)=>{
            let index = previousState.newUser.skills.indexOf(value);
            previousState.newUser.skills.splice(index,1);
            return previousState;
        })
    }
  }

  handleInputControl(event) {
    let value = event.target.value;
    let controlName = event.target.name;

    this.setState(previousState => {
        previousState.newUser[controlName] = value
        return previousState;
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let customerData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
        newUser: {
          name: '',
          email: '',
          age: '',
          gender: '',
          expertise: '',
          about: '',
          skills: []
        },
        genderOptions: ['Male', 'Female', 'Others'],
        skillOptions: ['Programming', 'Development', 'Design', 'Testing']
    });
  }

  render() {
    return(<form className="container" onSubmit={this.handleFormSubmit}>
                <Input  type={'text'}
                        title= {'Full Name'}
                        name= {'name'}
                        value={this.state.newUser.name}
                        placeholder = {'Enter your name'}
                        handleChange = {this.handleInputControl} />

                <Input  type={'text'}
                        title= {'Age'}
                        name= {'age'}
                        value={this.state.newUser.age}
                        placeholder = {'Enter your age'}
                        handleChange = {this.handleInputControl} />

                <Select title={"Gender"}
                        name={"gender"}
                        options={this.state.genderOptions}
                        value={this.state.newUser.gender}
                        placeholder={"Select Gender"}
                        handleChange={this.handleGender}/>

                <CheckBox title={"Skills Acquired"}
                        name={"skills"}
                        options={this.state.skillOptions}
                        selectedOptions={this.state.newUser.skills}
                        handleChange={this.handleCheckBox}/>

                <TextArea
                        title={"About you."}
                        rows={10}
                        value={this.state.newUser.about}
                        name={"about"}
                        handleChange={this.handleInputControl}
                        placeholder={"Describe your past experience and skills"}/>

                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Submit"}
                    style={buttonStyle}
                    />
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                    style={buttonStyle}
                    />
            </form>);
  }
}

const buttonStyle = {
    margin: "10px 10px 10px 10px"
  };

export default AddCustomerForm;