import { Card, Badge, Button } from "antd";

function CardTask({ name, urgency, descriptions }) {
  let badgeColor = "";

  if (urgency === "Normal") {
    badgeColor = "yellow";
  } else if (urgency === "Little") {
    badgeColor = "cyan";
  } else {
    badgeColor = "red";
  }



  return (
    <Badge.Ribbon text={urgency} color={badgeColor}>
      <Card
        hoverable
        title={name}
        headStyle={{
          padding: 25,
        }}
        bodyStyle={{
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          whiteSpace:'pre-wrap'
        }}
      >
        {descriptions}
      </Card>
    </Badge.Ribbon>
  );
}

export default CardTask;
