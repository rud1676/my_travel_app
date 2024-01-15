import { useSuspenseQuery } from "@tanstack/react-query";
import { myPlanApi } from "@/api/myplan";
import Plan from "./Plan";
import PlanMini from "./PlanMini";

const Plans = ({ minView, setDeleteid, setModal }) => {
  const { data: plans } = useSuspenseQuery({
    queryKey: ["plan"],
    queryFn: () => myPlanApi.list("asc"),
    enabled: false,
  });

  const onClickDelete = (id) => {
    setDeleteid(id);
    setModal(true);
  };
  return (
    <>
      {plans?.length >= 1 ? (
        plans.map((v) =>
          minView ? (
            <PlanMini
              onClickDeleteButton={() => {
                onClickDelete(v.id);
              }}
              key={v.id}
              plan={v}
            />
          ) : (
            <Plan
              onClickDeleteButton={() => {
                onClickDelete(v.id);
              }}
              key={v.id}
              plan={v}
            />
          )
        )
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </>
  );
};

export default Plans;
