import { Card, Badge } from "antd";

function CardTask({name, urgency,descriptions}) {
  return (
    <Badge.Ribbon text={urgency}>
      <Card title={name}>
        {descriptions}
      </Card>
    </Badge.Ribbon>

  );
}

export default CardTask;
