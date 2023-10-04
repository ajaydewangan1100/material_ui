import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

export const MuiTimeline = () => {
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          9:00 AM
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          11:00 AM
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="success" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.primary">
          12:30 PM
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="filled" color="secondary" />
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
