"use client";

import { Box, Typography } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  timelineItemClasses,
} from "@mui/lab";
import { TrackingInfoProps, deliveryDetailProps } from "./types";

export function TrackingInfo({ trackingInfo }: TrackingInfoProps) {
  const { status, receiver, sender } = trackingInfo;

  function renderStatuItem() {
    return status?.map((item, index) => {
      const { condition, name } = item;
      const date = new Date(item.date);
      const timelineConnector =
        index < status.length - 1 ? <TimelineConnector /> : "";

      return (
        <TimelineItem key={index}>
          <TimelineOppositeContent color="textSecondary">
            {date.toLocaleDateString("pt-BR")}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {timelineConnector}
          </TimelineSeparator>
          <TimelineContent>{name}</TimelineContent>
        </TimelineItem>
      );
    });
  }

  function renderDeliveryDetails({ title, address }: deliveryDetailProps) {
    const { city, state, street, zipcode } = address;

    return (
      <Box>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Box component="div">
          <Typography variant="subtitle2" gutterBottom>
            {street}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {zipcode}, {city} - {state}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ overflow: "auto", width: "100%", padding: "20px" }}>
      <Box>
        {renderDeliveryDetails({ title: "Saindo de", address: sender.address })}
        {renderDeliveryDetails({
          title: "Com destino a",
          address: receiver.address,
        })}
      </Box>

      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {renderStatuItem()}
      </Timeline>
    </Box>
  );
}
