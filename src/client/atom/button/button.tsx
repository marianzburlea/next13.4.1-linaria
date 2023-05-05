import type { ReactNode } from "react";
import { styled } from "@linaria/react";

const SButton = styled.button`
  border: 14px solid green;
  padding: 1rem 3rem;
  border-radius: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  transition: 250ms;

  &:active,
  &:focus {
    background-color: #000;
    color: #fff;
  }
`;

export const Button = ({ children }: { children?: ReactNode }) => {
  return <SButton>{children}</SButton>;
};
