import {TimelineContainer, TimelineStep, TimelineLine, IconCreated, IconSent, IconTruck, IconStore, IconDelivered } from "./Styled";

const icons = [
    IconCreated,
    IconSent,
    IconTruck,
    IconStore,
    IconDelivered,
  ];
  
  const Timeline = () => {
    return (
      <TimelineContainer>
        {icons.map((Icon, index) => (
          <>
            {index !== 0 && <TimelineLine />}
            <TimelineStep active key={index}>
              <Icon />
            </TimelineStep>
          </>
        ))}
      </TimelineContainer>
    );
  };
  
  export default Timeline;