/* eslint-disable react/static-property-placement */
/* eslint-disable max-classes-per-file */
import React from 'react';
import PropTypes from 'prop-types';

const ENTER_KEY_CODE = 13;
class Form extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired,
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

const FormContext = React.createContext();

class SubmitButton extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired,
  }

  render() {
    const { children } = this.props;
    return (
      <FormContext.Consumer>
        {
        (({ handleSubmit }) => (
          <button type="button" onClick={handleSubmit}>{children}</button>
        ))
      }
      </FormContext.Consumer>
    );
  }
}

class TextInput extends React.Component {
  handleEnterClicked = (handleSubmit, event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      event.preventDefault();
      handleSubmit();
    }
  }

  render() {
    const { name } = this.props;
    const { placeholder } = this.props;
    return (
      <FormContext.Consumer>
        {
          (
            ({ handleSubmit }) => (
              <input
                type="text"
                name={name}
                placeholder={placeholder}
                onKeyUp={(event) => this.handleEnterClicked(handleSubmit, event)}
              />
            )
          )
        }
      </FormContext.Consumer>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};


class Context extends React.Component {
  handleSubmit = () => {
    // eslint-disable-next-line no-alert
    // eslint-disable-next-line no-undef
    alert('YOU WIN!');
  };

  render() {
    const contextValue = {
      handleSubmit: () => {
        this.handleSubmit();
      },
    };

    return (
      <FormContext.Provider value={contextValue}>
        <div>
          <h1>
            This isn&#39;t even my final
            <code>&lt;Form/&gt;</code>
            !
          </h1>

          <Form onSubmit={this.handleSubmit}>
            <p>
              <TextInput name="firstName" placeholder="First Name" />
              {' '}
              <TextInput name="lastName" placeholder="Last Name" />
            </p>
            <p>
              <SubmitButton>Submit</SubmitButton>
            </p>
          </Form>
        </div>
      </FormContext.Provider>
    );
  }
}

export default Context;
