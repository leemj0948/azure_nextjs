export async function getServerSideProps() {
    const data = JSON.stringify({ time: new Date() });
    return { props: { data } };
}