import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class FaceBookLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userId: '',
      name: '',
      email: '',
      picture: '',
    };
  }


  componentClicked = () => {
    console.log('clicked');
  };

  postResource = async (data) => {
    const url = 'https://postman-echo.com/post';
    const query = await fetch(`${url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    });
    const content = await query.json();
    return content;
  };

  postquery = (data) => {
    this.postResource(data)
      .then((content) => {
        console.log(content);
      });
  };

  responseFacebook = (response) => {
    console.log(response);
    // this.postquery(response);

    this.setState({
      isLoggedIn: true,
      userId: response.UserId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  render() {
    let fbContent;
    const { isLoggedIn } = this.state;
    if (isLoggedIn) {
      const { picture, name, email } = this.state;
      fbContent = (
        <div style={{
          width: '450px',
          margi: 'auto',
          background: '#f4f4f4',
          padding: '20px'
        }}
        >
          <img src={picture} alt={name} />
          <h2>
            Wellcome:
            {name}

          </h2>
          Email:
          {email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="2846849285325734"
          autoLoad={false}
          fields="name,email,picture"
          /* scope="email,user_photos" */
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          redirect_uri="http://localhost:3000/"
          state={'{st=state123abc,ds=123456789}'}
        />
      );
    }
    return (
      <h2>{fbContent}</h2>
    );
  }
}


export default FaceBookLogin;
