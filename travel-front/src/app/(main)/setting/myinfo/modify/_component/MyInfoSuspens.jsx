import { useSuspenseQuery } from "@tanstack/react-query";
import { globalApi } from "@/api/global";
import UserForm from "@/app/_component/ui/UserForm";

const MyInfoSuspens = ({ form, id, setForm }) => {
  const { data: user } = useSuspenseQuery({
    queryKey: ["user"],
    queryFn: () => globalApi.profileDetail(id),
    enabled: false,
  });
  setForm(user.data);
  return <>{user && <UserForm form={form} setForm={setForm} />}</>;
};

export default MyInfoSuspens;
