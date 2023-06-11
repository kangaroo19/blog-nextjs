import { useRouter } from "next/router";
import { Icon } from "semantic-ui-react";

interface Error404Props{
    content:string
}

export default function Error404({content='404 : 페이지를 찾을 수 없습니다.'}:Error404Props) {
  const router=useRouter()
  return (
    <div style={{ padding: "200px 0", textAlign: "center", fontSize: 30 }}>
      <Icon name="warning circle" color="red" />
      {content}
    </div>
  );
}