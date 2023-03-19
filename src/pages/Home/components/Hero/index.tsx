import {
  HeroContainer,
  HeroContent,
  HeroTitle,
  BenefitsContainer,
} from "./styles";

import heroImage from "../../../../assets/hero-image.png";
import imageEcommerce from '../../../../assets/img_eco.png';
import { RegularText } from "../../../../components/Typography";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import { ShoppingCart, Package, Timer} from "phosphor-react";
import { useTheme } from "styled-components";

export function Hero() {
  const { colors } = useTheme();

  return (
    <HeroContainer>
      <HeroContent className="container">
        <div>
          <section>
            <HeroTitle size="xl">Find your product</HeroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Receive your product wherever you are, anytime.
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              iconColor={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill" />}
              text="Simple and secure purchase"
            />
            <InfoWithIcon
              iconColor={colors["base-text"]}
              icon={<Package weight="fill" />}
              text="Packaging keeps the product intact"
            />
            <InfoWithIcon
              iconColor={colors["brand-yellow"]}
              icon={<Timer weight="fill" />}
              text="Fast and tracked delivery."
            />
          </BenefitsContainer>
        </div>

        <div className="imageContainer">
          <img src={imageEcommerce} alt="" />
        </div>
      </HeroContent>
    </HeroContainer>
  );
}
 