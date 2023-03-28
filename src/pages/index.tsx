export default function Home({ API_URL }: { API_URL: string }) {
  return (
    <div>
      <h2>Env variable demo</h2>
      <div>{process.env.NODE_ENV}</div>
      <div>{process.env.NEXT_PUBLIC_API_URL}</div>
      <div>API_URL from getServerSideProps: {API_URL}</div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
  };
}
