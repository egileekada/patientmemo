import React from "react";
// Import navigation card components - helps move between screen components
import NavigationCard from "../components/nursesPageComponents/NavigationCards";
// Import navigation cards data
import { navigationCards } from "../components/nursesPageComponents/NavigationCardsDetails";

export default function Nurses() {
  return (
    <div className="w-full h-full px-32 py-12">
      <div className="grid grid-cols-3 w-full gap-6">
        {/* Iterate through navigationCards array */}
        {navigationCards.map((card, index) => (
          <NavigationCard
            bgColor={card.bgColor}
            iconColor={card.iconColor}
            cardText1={card.cardText1}
            cardText2={card.cardText2}
            halfCircleColor={card.halfCircleColor}
            navigationLink={card.navigationLink}
            Icon={card.Icon}
          />
        ))}
      </div>
    </div>
  );
}
