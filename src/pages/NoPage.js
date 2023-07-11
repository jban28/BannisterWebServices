import Button from "react-bootstrap/Button"

const NoPage = () => {
  return (
    <>
      <h1>Error 404</h1>
      <p>Page not found on this server. Please check the URL and start again</p>
      <Button href="/">Return to Homepage</Button>
    </>
  )
};

export default NoPage;