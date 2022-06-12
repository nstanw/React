import { Card, CardBody, CardTitle } from "reactstrap";

function RenderError({ error }) {
  return (

      <Card>
        <CardBody>
          <CardTitle>{error}</CardTitle>
        </CardBody>
      </Card>

  );
}

export default RenderError;
