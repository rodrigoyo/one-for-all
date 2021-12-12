import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from '../src/components/login';

const Title = styled.h1`
  font-size: 50px;
`;

export default function Home() {
  const [pass, setPass] = useState(false);

  useEffect(() => {
    console.log('PASS');
    console.log(pass);
  }, [pass]);

  return <Login setPass={setPass} />;
}
