// AccessoriesSection.jsx

import CardSection from "../CardSection/CardSection";
import { accessories } from "../../data/accessories";

export default function AccessoriesSection() {
  return (
    <CardSection
      title="ACCESSORIES"
      cards={accessories}
    />
  );
}