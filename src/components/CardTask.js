import { Card, Badge } from "antd";

function CardTask({name, urgency, descriptions}) {

    let badgeColor=''

    if (urgency==='Normal') {
      badgeColor='green'
    } else if(urgency==='Little'){
      badgeColor='cyan'
    } else {
      badgeColor='red'
      
    }

  return (
    <Badge.Ribbon text={urgency} color={badgeColor}>
      <Card hoverable title={name}
        headStyle={{
          padding:25
        }}
      >
        {descriptions}
      </Card>
    </Badge.Ribbon>

  );
}

export default CardTask;
