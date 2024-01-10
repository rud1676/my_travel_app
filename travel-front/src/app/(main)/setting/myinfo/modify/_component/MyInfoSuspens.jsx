import { useSuspenseQuery } from "@tanstack/react-query";
import { globalApi } from "@/api/global";
import MyInfoModify from "./MyInfoModify";

const MyInfoSuspens = ({ id, setForm }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["user"],
    queryFn: () => globalApi.profileDetail(id),
    enabled: false,
  });
  return <>{data && <MyInfoModify setForm={setForm} user={data.data} />}</>;
};

export default MyInfoSuspens;
