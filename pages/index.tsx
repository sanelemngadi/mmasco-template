import Container from '@mmasco-atoms/Container';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import MetaData from '../meta';

const Home: NextPage = () => {
  const [count, setCount] = useState(0);

  const handleScroll = () => {
    const dist = window.scrollY;
    setCount(dist);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [])


  return (
    <>
      <MetaData
        title='Mmasco'
        subtitle=""
        path={`/`}
        image='https://nqabanqaba.netlify.app/images/im300.jpg'

      />
      <main>
        <Container maxWidth='md'
          sx={{
            backgroundColor: "black",
            color: "#fff",
            height: 800,
            fontSize: { xs: 24, md: 64 },
            fontWeight: 700,
            borderRadius: 1,
            m: "1rem auto",
            c: 1,
            overflow: "hidden",

            'span': {
              color: 'red',
              backgroundColor: "blue",
              display: { xs: "block", md: "flex" },
              p: 1,
              c: 1,
              ms: 3,
            },
            ['& > div:last-of-type']: {
              width: "100px",
              heiht: 100,
              border: "1px solid red",
              fontSize: 2,
              c: 1,

            },
            ['&:hover']: {
              color: "olive",
              cursor: "progress"
            }
          }}
        >
          <h3
            style={{
              transform: `translateY(${count}px)`
            }}
          >Mmaco</h3>

        </Container>
      </main>
    </>
  )
}

export default Home;
