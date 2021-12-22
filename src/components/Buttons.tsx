import React, { CSSProperties } from 'react'
import styled from 'styled-components'
import COLORS from '../constants/colors'

interface ButtonProps {
  className?: string;
  variant: 'fill' | 'outline' | 'ghost';
  size: 'lg' | 'md' | 'sm';
}

const SIZES = {
  sm: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 16 / 16 + 'rem',
    '--padding': '4px 12px',
  },
  md: {
    '--borderRadius': 2 + 'px',
    '--fontSize': 18 / 16 + 'rem',
    '--padding': '12px 20px',
  },
  lg: {
    '--borderRadius': 4 + 'px',
    '--fontSize': 21 / 16 + 'rem',
    '--padding': '16px 32px',
  }
}

const Button: React.FC<ButtonProps> = ({ variant, size, children, className }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === 'fill') {
    Component = FillButton;
  } else if (variant  === 'outline') {
    Component = OutlineButton;
  } else {
    Component = GhostButton;
  }

  return (
    <Component style={styles as CSSProperties} className={className}>
      {children}
    </Component>
  )
}

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: 'Roboto', sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`

const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`

const GhostButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.gray};

  &:focus {
    outline-color: ${COLORS.transparentGray75};
  }

  &:hover {
    color: ${COLORS.black};
    background-color: ${COLORS.transparentGray15};
  }
`

export default Button