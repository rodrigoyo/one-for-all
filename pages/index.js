import { useEffect, useState } from 'react';
import Login from '../src/components/login';

import { getRecords } from '../src/services/sheets';

export default function Home({ records }) {
  const [pass, setPass] = useState(false);

  useEffect(() => {
    console.log('PASS');
    console.log(pass);
  }, [pass]);

  return (
    <>
      <Login setPass={setPass} />
      {records[0].title}
    </>
  );
}

export async function getStaticProps(context) {
  const records = await getRecords();
  return {
    props: {
      records: records.slice(1, records.length), // remove sheet header
    },
    revalidate: 5,
  };
}
