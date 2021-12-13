import { useEffect, useState } from 'react';
import { getRecords } from '../src/services/sheets';
import Login from '../src/components/login';
import Records from '../src/components/records';

export default function Home({ recordList }) {
  const [pass, setPass] = useState(false);

  useEffect(() => {
    console.log('PASS');
    console.log(pass);
  }, [pass]);

  return (
    <>{!pass ? <Login setPass={setPass} /> : <Records list={recordList} />}</>
  );
}

export async function getStaticProps(context) {
  const records = await getRecords();
  return {
    props: {
<<<<<<< HEAD
      recordList: records.slice(1, records.length), // remove sheet header
=======
      records: records.slice(1, records.length), // remove sheet header
>>>>>>> f4f257b (feat: load google sheets)
    },
    revalidate: 5,
  };
}
