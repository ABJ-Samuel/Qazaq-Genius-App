import axios from 'axios';
import Home from '../components/Home';
import type { GetStaticProps } from 'next';

const lyricsApi = process.env.LYRICS_API_HOST;

export const getStaticProps: GetStaticProps = async () => {
  const { data: songData } = await axios.get(lyricsApi + '/song/50000001');
  return {
    props: {
      songData,
    },
  };
};

export default Home;
