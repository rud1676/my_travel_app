"use client";

import { useRouter } from "next/navigation";

import HomeStyle, { RandomPins } from "@/app/(main)/(home)/home.style";
import { Pretendard_Bold, Pretendard_Regular } from "@/assets/fonts/fonts";

const Package = ({ Package }) => {
  const navigator = useRouter();
  const price = Package?.options[0]?.price;
  const { title, location, images } = Package;

  const onClickPackage = () => {
    navigator.push(`/packages/${Package.id}`);
  };

  return (
    <HomeStyle.PackageWrapper onClick={onClickPackage}>
      {images[0] ? (
        <HomeStyle.PackageImage alt="사진이미지" src={images[0]?.location} />
      ) : (
        <HomeStyle.PackageImageEmpty />
      )}
      <HomeStyle.PackagePriceWrapper>
        <HomeStyle.PackagePriceOuter />
        <HomeStyle.PackagePriceInner>
          <HomeStyle.PackagePriceText className={Pretendard_Bold.className}>
            ₩ {`${Number(price).toLocaleString("kr")}`}~
          </HomeStyle.PackagePriceText>
        </HomeStyle.PackagePriceInner>
      </HomeStyle.PackagePriceWrapper>
      <HomeStyle.PackagePriceTextWrapper>
        <HomeStyle.PackageTitle className={Pretendard_Bold.className}>
          {location}
        </HomeStyle.PackageTitle>
        <HomeStyle.PackageSubTitle className={Pretendard_Regular.className}>
          {title.length >= 20 ? `${title.slice(0, 20)}...` : title}
        </HomeStyle.PackageSubTitle>
      </HomeStyle.PackagePriceTextWrapper>
      <HomeStyle.PackagePinImage
        width={27.768}
        height={27.878}
        alt="핀이미지"
        src={RandomPins[Package.id % 8]}
      />
    </HomeStyle.PackageWrapper>
  );
};

export default Package;
