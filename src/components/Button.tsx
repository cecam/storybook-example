import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

interface ButtonState {
  mode: 'storybook-button--primary' | 'storybook-button--secondary' | null
}
export class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props)
    this.state = {
      mode: props.primary ? 'storybook-button--primary' : 'storybook-button--secondary'
    }
  }
  render() {
    return (
      <button
        type="button"
        className={['storybook-button', `storybook-button--${this.props.size}`, this.state.mode].join(' ')}
        style={{ backgroundColor: this.props.backgroundColor}}
        {...this.props}
      >
        {this.props.label}
      </button>
    );
  }
}