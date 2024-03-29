import { styled } from '@linaria/react';
import './look.css';

export const metadata = {
  title: 'Nx Next App',
  description: 'Generated by create-nx-workspace',
};

const SDiv = styled.h1`
  background-color: lightcyan;
  padding: 2.5rem;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SDiv>{children}</SDiv>
      </body>
    </html>
  );
}
