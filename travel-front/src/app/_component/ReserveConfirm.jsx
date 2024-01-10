import {
  Pretendard_Medium,
  Pretendard_Bold,
  Pretendard_Regular,
} from "@/assets/fonts/fonts";
import ShowDate from "@/app/_component/ShowDate";
import AppStyle from "@/app/app.style";

const ReserveConfirm = ({ reserved, child }) => {
  const total =
    (parseInt(reserved.childCount, 10) + parseInt(reserved.adultCount, 10)) *
    reserved.travelPackageOption.price;
  return (
    <AppStyle.ContentWrapper>
      <AppStyle.SubTitle className={Pretendard_Regular.className}>
        {reserved.travelPackage.title.slice(0, 40)}
      </AppStyle.SubTitle>
      {child}
      <AppStyle.DateShowBox>
        <ShowDate mode range={{ from: reserved.startAt, to: reserved.endAt }} />
      </AppStyle.DateShowBox>
      <AppStyle.OptionBox>
        <AppStyle.OptionTitle className={Pretendard_Bold.className}>
          옵션 선택
        </AppStyle.OptionTitle>
        <AppStyle.OptionDataBox>
          <AppStyle.OptionSubTitle className={Pretendard_Medium.className}>
            {reserved.travelPackageOption
              ? reserved.travelPackageOption.title
              : "선택된 옵션이 없습니다."}
          </AppStyle.OptionSubTitle>
          {reserved.travelPackageOption && (
            <AppStyle.OptionPriceText className={Pretendard_Bold.className}>
              ₩{reserved.travelPackageOption.price.toLocaleString()}
            </AppStyle.OptionPriceText>
          )}
        </AppStyle.OptionDataBox>
      </AppStyle.OptionBox>
      <AppStyle.PeopleBox>
        <AppStyle.OptionTitle className={Pretendard_Bold.className}>
          인원 선택
        </AppStyle.OptionTitle>
        <AppStyle.AdultBox>
          <AppStyle.OptionSubTitle className={Pretendard_Medium.className}>
            성인 (만 12세 이상)
          </AppStyle.OptionSubTitle>
          <AppStyle.AdultText className={Pretendard_Bold.className}>
            {reserved.adultCount}명
          </AppStyle.AdultText>
        </AppStyle.AdultBox>
        <AppStyle.ChildBox>
          <AppStyle.OptionSubTitle className={Pretendard_Medium.className}>
            소아 (만 12세 미만)
          </AppStyle.OptionSubTitle>
          <AppStyle.AdultText className={Pretendard_Bold.className}>
            {reserved.childCount}명
          </AppStyle.AdultText>
        </AppStyle.ChildBox>
      </AppStyle.PeopleBox>
      {reserved.travelPackageOption ? (
        <>
          <AppStyle.TotalPriceBox>
            <AppStyle.TotalPriceTitle className={Pretendard_Bold.className}>
              총 금액
            </AppStyle.TotalPriceTitle>
            <AppStyle.TotalPriceText className={Pretendard_Bold.className}>
              ₩ {parseInt(total, 10).toLocaleString()}
            </AppStyle.TotalPriceText>
          </AppStyle.TotalPriceBox>

          <AppStyle.InfoText>
            {reserved.status === 0 &&
              "위의 내용으로 예약 문의가 완료되었습니다. 빠른 시일내로 연락드리겠습니다."}
          </AppStyle.InfoText>
        </>
      ) : (
        <Box>
          해당 패키지는 옵션이 설정되어 있지 않아 가격을 측정할 수 없습니다.
        </Box>
      )}
    </AppStyle.ContentWrapper>
  );
};

export default ReserveConfirm;
