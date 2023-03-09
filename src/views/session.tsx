import { useParams } from "@solidjs/router";

export default () => {
  const id = useParams();
  console.log(id.id);

  return <>ddddddd</>;
};
